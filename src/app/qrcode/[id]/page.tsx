'use client'

import { getFromLocalStorage } from '@/services/storage'
import { ArrowLeft } from '@phosphor-icons/react'
import Link from 'next/link'

interface QrcodesProps {
  params: {
    id: string
  }
}

export default function Qrcode({ params }: QrcodesProps) {
  const qrCodes = getFromLocalStorage()

  const qrcode = qrCodes.find((item) => item.id === params.id)

  return (
    <main className="min-h-screen p-24 flex justify-center text-center items-center">
      <div className="max-w-5xl">
        <div className="flex relative">
          <Link
            href={'/'}
            className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center gap-2 hover:underline"
          >
            <ArrowLeft size={14} /> <span>Voltar</span>
          </Link>
          <h1 className="text-3xl font-semibold flex-1">QRCODE</h1>
        </div>
        <div className="bg-zinc-950 max-w-2xl p-12 rounded-3xl mt-12">
          <strong className="text-xl">Aponte a camera</strong>
          <div className="bg-white p-2 my-8">
            <img src={qrcode?.image} alt="" className="w-full" />
          </div>

          <button className="px-8 h-14 w-full rounded-xl bg-blue-500 hover:bg-blue-600 space-x-2 text-zinc-50 font-semibold">
            Download
          </button>
        </div>
      </div>
    </main>
  )
}
