export const transformToCamelCase  = (str: string) => str
.split(' ')
.map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
.join('');