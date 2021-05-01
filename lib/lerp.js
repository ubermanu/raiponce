/**
 * @param table
 * @param ratio
 * @return {string}
 */
export function lerp(table, ratio = 10) {
  const minWidthPx = Object.keys(table)[0]
  const maxWidthPx = Object.keys(table)[1]

  const minFontSize = table[minWidthPx]
  const maxFontSize = table[maxWidthPx]

  const minWidth = minWidthPx / ratio
  const maxWidth = maxWidthPx / ratio

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
  const yAxisIntersection = -minWidth * slope + minFontSize

  return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem)`
}
