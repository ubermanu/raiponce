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
  const minWidth = Object.keys(table)[0]
  const maxWidth = Object.keys(table)[1]

  const minFontSize = parseFloat(table[minWidth]) * ratio
  const maxFontSize = parseFloat(table[maxWidth]) * ratio

  const unit = table[minWidth].replace(/[\d.]+/, '') || 'px'

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
  const yAxisIntersection = -minWidth * slope + minFontSize

  return `clamp(${minFontSize}${unit}, ${add(
    (yAxisIntersection / ratio).toFixed(10).concat(unit),
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
