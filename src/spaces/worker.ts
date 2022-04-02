import { paintL, paintC, paintH } from './lib.js'
import { setColorSupport } from '../../lib/colors.js'

export type MessageData =
  | {
      type: 'init'
      canvas: HTMLCanvasElement
      width: number
      height: number
      p3: boolean
    }
  | { type: 'l'; l: number }
  | { type: 'c'; c: number }
  | { type: 'h'; h: number }

let prefix: [HTMLCanvasElement, number, number] | undefined

onmessage = (e: MessageEvent<MessageData>) => {
  if (e.data.type === 'init') {
    setColorSupport(e.data.p3)
    prefix = [e.data.canvas, e.data.width, e.data.height]
  } else if (e.data.type === 'l' && prefix) {
    paintL(...prefix, e.data.l)
  } else if (e.data.type === 'c' && prefix) {
    paintC(...prefix, e.data.c)
  } else if (e.data.type === 'h' && prefix) {
    paintH(...prefix, e.data.h)
  }
}