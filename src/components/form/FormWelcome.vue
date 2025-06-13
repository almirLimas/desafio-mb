<template>
  <form class="container">
    <h3 class="form-header">Seja Bem vindo (a)</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.email" :label="'Endereço de e-mail'" />
        </div>
        <div class="col-12">
          <InputRadio v-model="store.tipoDePessoa" :options="options" />
        </div>
      </div>
    </div>

    <ButtonInfo type="submit" @click="continuar" />
  </form>
</template>
<script setup>
import { store } from '@/store/store'

import InputText from '../inputs/InputText.vue'
import ButtonInfo from '../buttons/ButtonInfo.vue'
import InputRadio from '../inputs/InputRadio.vue'

const options = [
  { label: 'Pessoa Física', value: 0 },
  { label: 'Pessoa Jurídica', value: 1 },
]
const continuar = () => {
  if (store.objRegister.email === '') {
    alert('Preencha o e-mail')
    return
  }
  store.nextForm()
}
</script>

<style scoped></style>
