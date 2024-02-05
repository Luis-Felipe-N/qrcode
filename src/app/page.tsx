'use client'

import { GenerateQrcode } from '@/components/gerar-qrcode'
import { useQrCodes } from '@/contexts/QrcodesContext'

export default function Home() {
  const { qrCodes } = useQrCodes()

  return (
    <main className="min-h-screen p-24 flex justify-center text-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl font-semibold">QRCODE</h1>
        <GenerateQrcode />

        <div className="text-start mt-4">
          <h2 className="font-semibold">Recentes {qrCodes.length}</h2>

          <ul className="space-y-2 mt-8">
            {qrCodes.map((item) => (
              <li
                key={item.id}
                className="flex gap-4 bg-zinc-950 p-4 rounded-lg"
              >
                <div className="bg-white p-2 w-30">
                  <img src={item.image} alt="" className="w-36 h-full" />
                </div>
                <div className="flex flex-col space-y-2 items-start">
                  <strong className="text-zinc-200">{item.url}</strong>
                  <small className="text-zinc-300">
                    Criando em {item.created_at.toString()}
                  </small>

                  <button className="px-8 h-12 text-sm rounded-xl bg-blue-500 hover:bg-blue-600 space-x-2 text-zinc-50 font-semibold">
                    Download
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
