<template>
  <form class="container">
    <h3 class="form-header">Seja Bem vindo (a)</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.email" :label="'Endereço de e-mail'" />
          <span v-if="isError" class="form-error">Informe um e-mail válido!</span>
        </div>
        <div class="col-12">
          <InputRadio v-model="store.tipoDePessoa" :options="options" />
        </div>
      </div>
    </div>

    <ButtonInfo @click="continuar" />
  </form>
</template>
<script setup>
import { ref } from 'vue'
import { store } from '@/store/store'

import InputText from '../inputs/InputText.vue'
import ButtonInfo from '../buttons/ButtonInfo.vue'
import InputRadio from '../inputs/InputRadio.vue'
import { useValidation } from '@/composables/useValitation'
const isError = ref(false)
const { isValidEmail } = useValidation()

const options = [
  { label: 'Pessoa Física', value: 0 },
  { label: 'Pessoa Jurídica', value: 1 },
]
const continuar = () => {
  console.log(isValidEmail(store.objRegister.email))

  if (isValidEmail(store.objRegister.email)) {
    isError.value = false
    store.nextForm()
  } else {
    isError.value = true
    return
  }
}
</script>

<style scoped></style>
