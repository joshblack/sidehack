/**
 * Helper function to let us specify a pixel value and receive a rem value
 *
 * @param  {Number}  px    Pixel value that we want, like a line-height
 * @param  {Number}  base  Root pixel value, set to 16 for default case
 * @return {Number}        Equivalent rem value
 */
export function rem(px, base = 16) {
  const value = Number(px) / base;

  return `${value}rem`;
}
