<template>
  <form class="container">
    <h3 class="form-header">Seja Bem vindo (a)</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.email" :label="'Endereço de e-mail'" />
          <span v-if="store.errorMessages.email" class="form-error">{{
            store.errorMessages.email
          }}</span>
        </div>
        <div class="col-12">
          <InputRadio v-model="store.objRegister.tipoDePessoa" :options="options" />
        </div>
      </div>
    </div>

    <ButtonInfo @click="nextForm" :title="'Continuar'" />
  </form>
</template>
<script setup>
import { watch } from 'vue'
import { store } from '@/store/store'
import InputText from '@/components/inputs/InputText.vue'
import ButtonInfo from '@/components/buttons/ButtonInfo.vue'
import InputRadio from '@/components/inputs/InputRadio.vue'
import { useValidation } from '@/composables/useValitation'

const { isValidEmail } = useValidation()

const options = [
  { label: 'Pessoa Física', value: 0 },
  { label: 'Pessoa Jurídica', value: 1 },
]
const nextForm = () => {
  if (isValidEmail(store.objRegister.email)) {
    store.nextForm()
  } else {
    return
  }
}

watch(
  () => store.objRegister.tipoDePessoa,
  (valor) => {
    if (valor === 0) {
      store.objRegister.cnpj = ''
      store.objRegister.dataAbertura = ''
      store.objRegister.razaoSocial = ''
    }

    if (valor === 1) {
      store.objRegister.cpf = ''
      store.objRegister.dataNascimento = ''
      store.objRegister.nome = ''
    }
  },
)
</script>

<style scoped></style>
