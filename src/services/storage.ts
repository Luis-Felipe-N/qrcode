import { Qrcode } from '@/contexts/QrcodesContext'

export function saveLocalStorage(item: Qrcode) {
  const items = getFromLocalStorage()
  return localStorage.setItem('qrcode@items', JSON.stringify([...items, item]))
}

export function getFromLocalStorage(): Qrcode[] {
  const items = localStorage.getItem('qrcode@items')

  if (items) {
    return JSON.parse(items)
  }

  return []
}
