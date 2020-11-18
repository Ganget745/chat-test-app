/* eslint-disable import/no-anonymous-default-export */
import tinycolor from 'tinycolor2'

const getCorrectIndex = (number) => {
  if (number > 255) {
    return 255
  }
  if (number < 0) {
    return 0
  }
  return number > 255 ? 255 : number < 0 ? 0 :number
}

export default (hash) => {
  const [r, g, b] = hash
    .substr(3, 6)
    .split('')
    .map((char) => getCorrectIndex(char.charCodeAt(0)))

  return {
    color: tinycolor({ r, g, b }).lighten(20).toHexString(),
    colorLighten: tinycolor({ r, g, b }).lighten(40).toHexString()
  }
}
