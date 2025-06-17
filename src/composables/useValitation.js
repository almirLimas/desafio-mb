import { store } from '@/store/store'
export const useValidation = () => {
  const isValidEmail = (email) => {
    for (const key in store.errorMessages) {
      store.errorMessages[key] = ''
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!regex.test(email)) {
      store.errorMessages.email = 'Informe um e-mail valido!'
    }
    return regex.test(email)
  }

  const isValidCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '')

    if (!cpf || cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false

    let soma = 0
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i)
    let resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0
    if (resto !== parseInt(cpf.charAt(9))) return false

    soma = 0
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i)
    resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0

    return resto === parseInt(cpf.charAt(10))
  }

  const isValidCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/g, '')

    if (!cnpj || cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false

    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho)
    let digitos = cnpj.substring(tamanho)
    let soma = 0
    let pos = tamanho - 7

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--
      if (pos < 2) pos = 9
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
    if (resultado !== parseInt(digitos.charAt(0))) return false

    tamanho += 1
    numeros = cnpj.substring(0, tamanho)
    soma = 0
    pos = tamanho - 7

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--
      if (pos < 2) pos = 9
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
    return resultado === parseInt(digitos.charAt(1))
  }

  const isValidFormPf = () => {
    let isValid = true

    for (const key in store.errorMessages) {
      store.errorMessages[key] = ''
    }

    if (!store.objRegister.dataNascimento.trim()) {
      store.errorMessages.dataNascimento = 'Informe a data de nascimento!'
      isValid = false
    }

    if (!store.objRegister.nome.trim()) {
      store.errorMessages.nome = 'Informe o nome!'
      isValid = false
    }

    if (!store.objRegister.telefone.trim()) {
      store.errorMessages.telefone = 'Informe o telefone!'
      isValid = false
    }

    if (!isValidCPF(store.objRegister.cpf)) {
      store.errorMessages.cpf = 'Informe um CPF valido!'
      isValid = false
    }

    return isValid
  }

  const isValidFormPj = () => {
    let isValid = true

    for (const key in store.errorMessages) {
      store.errorMessages[key] = ''
    }

    if (!store.objRegister.dataAbertura.trim()) {
      store.errorMessages.dataAbertura = 'Informe a data de abertura!'
      isValid = false
    }

    if (!store.objRegister.razaoSocial.trim()) {
      store.errorMessages.razaoSocial = 'Informe a razão social!'
      isValid = false
    }

    if (!store.objRegister.telefone.trim()) {
      store.errorMessages.telefone = 'Informe o telefone!'
      isValid = false
    }

    if (!isValidCNPJ(store.objRegister.cnpj)) {
      store.errorMessages.cnpj = 'Informe um CNPJ valido!'
      isValid = false
    }

    return isValid
  }
  const isValidFormPassword = () => {
    let isValid = true

    for (const key in store.errorMessages) {
      store.errorMessages[key] = ''
    }

    if (!store.objRegister.password.trim()) {
      store.errorMessages.password = 'Informe a senha!'
      isValid = false
    }

    return isValid
  }

  const isValidFormReview = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(store.objRegister.email)) {
      store.errorMessages.email = 'Informe um e-mail valido!'
      return false
    }

    if (!store.objRegister.password.trim()) {
      store.errorMessages.password = 'Informe a senha!'
      return false
    }

    if (store.objRegister.tipoDePessoa === 0) {
      return isValidFormPf()
    } else {
      return isValidFormPj()
    }
  }
  return {
    isValidEmail,
    isValidCPF,
    isValidCNPJ,
    isValidFormPf,
    isValidFormPj,
    isValidFormPassword,
    isValidFormReview,
  }
}
