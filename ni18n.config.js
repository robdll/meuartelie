export const LANG_PT = 'pt'
export const LANG_EN = 'en'
export const LANG_IT = 'it'

const supportedLngs = [ LANG_PT, LANG_EN, LANG_IT ]

export const ni18nConfig = {
  fallbackLng: LANG_PT,
  supportedLngs,
  ns: ['translation'],
}