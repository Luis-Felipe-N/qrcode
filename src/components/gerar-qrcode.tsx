'use client'

import { z } from 'zod'
import { Input } from './form/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQrCodes } from '@/contexts/QrcodesContext'
import { url } from 'inspector'
import { Spinner } from '@phosphor-icons/react'

const generateQrcodeFormSchema = z.object({
  url: z.string(),
})

type GenerateQrcodeFormData = z.infer<typeof generateQrcodeFormSchema>

export function GenerateQrcode() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<GenerateQrcodeFormData>({
    resolver: zodResolver(generateQrcodeFormSchema),
  })

  const { createNewQrcode } = useQrCodes()

  async function handleGenerateQrcode(data: GenerateQrcodeFormData) {
    const response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.url}`,
    )

    createNewQrcode({ url: response.url })
  }

  return (
    <div>
      <form
        className="mt-4 flex items-center gap-2  w-full"
        onSubmit={handleSubmit(handleGenerateQrcode)}
      >
        <Input
          {...register('url')}
          type="text"
          placeholder="Informe o link"
          className="w-full"
        />

        {isSubmitting ? (
          <button
            type="submit"
            className="flex items-center font-semibold bg-blue-600 px-4 h-14 rounded-xl"
            disabled
          >
            <Spinner className="mr-2 h-4 w-4 animate-spin" />
            Carregando
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 h-14 rounded-xl bg-blue-500 hover:bg-blue-600 space-x-2 text-zinc-50 font-semibold"
          >
            <span className="whitespace-nowrap">Gerar qrcode</span>
          </button>
        )}
      </form>
    </div>
  )
}
