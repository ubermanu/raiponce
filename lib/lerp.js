/**
 * @param table
 * @param ratio
 * @return {string}
 */
export function lerp(table, ratio = 10) {
  const minWidthPx = Object.keys(table)[0]
  const maxWidthPx = Object.keys(table)[1]

  const minFontSize = parseFloat(table[minWidthPx])
  const maxFontSize = parseFloat(table[maxWidthPx])

  const unit = table[minWidthPx].replace(minFontSize, '') || 'px'

  const minWidth = minWidthPx / ratio
  const maxWidth = maxWidthPx / ratio

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
  const yAxisIntersection = -minWidth * slope + minFontSize

  return `clamp(${minFontSize}${unit}, ${yAxisIntersection.toFixed(
    10
  )}${unit} + ${(slope * 100).toFixed(10)}vw, ${maxFontSize}${unit})`
}
