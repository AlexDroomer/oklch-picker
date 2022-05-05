import './reset.css'
import './index.css'
import { accent } from '../../stores/accent.js'

let theme = document.querySelector<HTMLMetaElement>('meta[name=theme-color]')!

accent.subscribe(({ main, surface }) => {
  document.body.style.setProperty('--accent', main)
  document.body.style.setProperty('--surface-ui-accent', surface)
  theme.content = main
})
