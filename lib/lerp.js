/**
 * Return a formatted clamp() function for responsive sizes.
 *
 * @example
 *  lerp({ 320: '10px', 1024: '30px' })
 *  lerp({ 768: '14rem', 1980: '24rem' })
 *
 * @param {object} table
 * @param {number} ratio
 * @param {string} domain
 * @return {string}
 */
export function lerp(table, ratio = 1, domain = '100vw') {
  const minWidthPx = Object.keys(table)[0]
  const maxWidthPx = Object.keys(table)[1]

  const minFontSize = parseFloat(table[minWidthPx])
  const maxFontSize = parseFloat(table[maxWidthPx])

  const unit = table[minWidthPx].replace(minFontSize, '') || 'px'

  const minWidth = minWidthPx / ratio
  const maxWidth = maxWidthPx / ratio

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
  const yAxisIntersection = -minWidth * slope + minFontSize

  return `clamp(${minFontSize}${unit}, ${add(
    yAxisIntersection.toFixed(10).concat(unit),
    (slope * 100).toFixed(10).concat('vw')
  )}, ${maxFontSize}${unit})`
}

/**
 * Format a sum operation made of strings
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function add(a, b) {
  if (a.charAt(0) === '-') {
    return `${b} - ${a.substring(1)}`
  }

  return `${a} + ${b}`
}
