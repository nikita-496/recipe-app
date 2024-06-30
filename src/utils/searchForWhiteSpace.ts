export const searchForWhiteSpace = (str: string) => {
    const pattern = /\s/g;
    return str.search(pattern)
}