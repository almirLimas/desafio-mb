import { reactive } from 'vue'

export const store = reactive({
  formActive: 0,
  tipoDePessoa: 0,
  nextForm() {
    this.formActive++
  },
  prevForm() {
    this.formActive--
  },
  objRegister: {
    nome: '',
    razaoSocial: '',
    email: '',
    password: '',
    cnpj: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
  },
})
