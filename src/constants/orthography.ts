import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'aa',
  'b',
  'd',
  'rd',
  'g',
  'i',
  'ii',
  'j',
  'k',
  'l',
  'rl',
  'm',
  'n',
  'ng',
  'rn',
  'o',
  'oo',
  'r',
  'rr',
  't',
  'w',
  'y',
  "'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
