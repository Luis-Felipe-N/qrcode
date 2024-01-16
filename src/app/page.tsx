import { Input } from '@/components/form/input'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen items-center p-24 grid place-items-center text-center">
      <div className=''>
        <h1 className='text-2xl'>QR Code</h1>
        <form className='mt-4 flex items-center gap-2 max-w-2xl'>
          <Input type="text" placeholder='Informe o link' className='w-full' />
          <button className="px-4 h-14 rounded-xl font-bold bg-green-500">Gerar qrcode</button>
        </form>
      </div>
    </main>
  )
}
