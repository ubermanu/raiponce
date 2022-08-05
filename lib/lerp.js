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
export function lerp(table, ratio = 10, domain = '100vw') {
  const minWidth = Object.keys(table)[0]
  const maxWidth = Object.keys(table)[1]

  const unit = table[minWidth].replace(/[\d.]+/, '') || 'px'

  let minFontSize = parseFloat(table[minWidth])
  let maxFontSize = parseFloat(table[maxWidth])

  if (unit === 'rem' || unit === 'em') {
    minFontSize *= ratio
    maxFontSize *= ratio
  }

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
  let yAxisIntersection = -minWidth * slope + minFontSize

  if (unit === 'rem' || unit === 'em') {
    minFontSize *= ratio
    maxFontSize *= ratio
  }

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
