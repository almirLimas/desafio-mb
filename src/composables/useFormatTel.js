export const useFormatTel = () => {
  const formatTel = (valor) => {
    const numeros = valor.replace(/\D/g, '')

    if (!numeros) return ''

    let formatado = ''
    if (numeros.length <= 2) {
      formatado = `(${numeros}`
    } else if (numeros.length <= 6) {
      formatado = `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`
    } else if (numeros.length <= 10) {
      formatado = `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`
    } else {
      formatado = `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`
    }

    return formatado
  }

  return {
    formatTel,
  }
}
