'use client'

import { getFromLocalStorage, saveLocalStorage } from '@/services/storage'
import { createContext, ReactNode, useContext, useState } from 'react'

export interface Qrcode {
  id: string
  url: string
  image: string
  created_at: Date
}

interface CreateNewQrcode {
  image: string
  url: string
}

interface QrcodesContextType {
  qrCodes: Qrcode[]
  createNewQrcode: (data: CreateNewQrcode) => Qrcode
}

interface QrcodesProviderProps {
  children: ReactNode
}

export const QrcodesContext = createContext({} as QrcodesContextType)

export function QrcodesContextProvider({ children }: QrcodesProviderProps) {
  function createNewQrcode(data: CreateNewQrcode) {
    const idNewQrcode = String(new Date().getTime())
    const newQrcode: Qrcode = {
      id: idNewQrcode,
      url: data.url,
      image: data.image,
      created_at: new Date(),
    }

    saveLocalStorage(newQrcode)

    return newQrcode
  }

  const qrCodes = getFromLocalStorage()

  return (
    <QrcodesContext.Provider
      value={{
        qrCodes,
        createNewQrcode,
      }}
    >
      {children}
    </QrcodesContext.Provider>
  )
}

export function useQrCodes() {
  const value = useContext(QrcodesContext)
  return value
}
