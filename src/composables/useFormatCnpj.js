export const useFormatCnpj = () => {
  const formatCnpj = (valor) => {
    const numeros = valor.replace(/\D/g, '')

    if (!numeros) return ''

    if (numeros.length <= 2) {
      return numeros
    } else if (numeros.length <= 5) {
      return `${numeros.slice(0, 2)}.${numeros.slice(2)}`
    } else if (numeros.length <= 8) {
      return `${numeros.slice(0, 2)}.${numeros.slice(2, 5)}.${numeros.slice(5)}`
    } else if (numeros.length <= 12) {
      return `${numeros.slice(0, 2)}.${numeros.slice(2, 5)}.${numeros.slice(5, 8)}/${numeros.slice(8)}`
    } else {
      return `${numeros.slice(0, 2)}.${numeros.slice(2, 5)}.${numeros.slice(5, 8)}/${numeros.slice(8, 12)}-${numeros.slice(12, 14)}`
    }
  }

  return {
    formatCnpj,
  }
}
