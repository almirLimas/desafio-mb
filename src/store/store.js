import { reactive } from 'vue'

export const store = reactive({
  isLoading: false,
  formActive: 1,

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
    tipoDePessoa: 0,
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
