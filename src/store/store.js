import { reactive } from 'vue'

export const store = reactive({
  formActive: 1,
  tipoDePessoa: 0,
  nextForm() {
    this.formActive++
  },
  prevForm() {
    this.formActive--
  },

  errorMessages: {
    nome: '',
    razaoSocial: '',
    email: '',
    password: '',
    cnpj: '',
    cpf: '',
    dataNascimento: '',
    dataAbertura: '',
    telefone: '',
  },
  objRegister: {
    nome: '',
    razaoSocial: '',
    email: '',
    password: '',
    cnpj: '',
    cpf: '',
    dataNascimento: '',
    dataAbertura: '',
    telefone: '',
  },
})
