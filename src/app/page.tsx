import { GenerateQrcode } from '@/components/gerar-qrcode'

export default function Home() {
  return (
    <main className="min-h-screen p-24 flex justify-center text-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl font-semibold">QRCODE</h1>
        <GenerateQrcode />

        <div className="text-start mt-4">
          <h2 className="font-semibold">Recentes 0</h2>
        </div>
      </div>
    </main>
  )
}
