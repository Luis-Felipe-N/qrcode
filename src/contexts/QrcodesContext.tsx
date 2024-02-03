'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface Qrcode {
  id: string
  url: string
  created_at: Date
}

interface CreateNewQrcode {
  url: string
}

interface QrcodesContextType {
  qrcodes: Qrcode[]
  createNewQrcode: (data: CreateNewQrcode) => Qrcode
}

interface QrcodesProviderProps {
  children: ReactNode
}

export const QrcodesContext = createContext({} as QrcodesContextType)

export function QrcodesContextProvider({ children }: QrcodesProviderProps) {
  const [qrcodes, setQrcodes] = useState<Qrcode[]>([])

  function createNewQrcode(data: CreateNewQrcode) {
    const idNewQrcode = String(new Date().getTime())
    const newQrcode: Qrcode = {
      id: idNewQrcode,
      url: data.url,
      created_at: new Date(),
    }

    setQrcodes((value) => [...value, newQrcode])

    return newQrcode
  }

  return (
    <QrcodesContext.Provider
      value={{
        qrcodes,
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
