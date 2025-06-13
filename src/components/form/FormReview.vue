<template>
  <form class="container">
    <h3 class="form-header">Seja Bem vindo (a)</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.email" :label="'Endereço de e-mail'" />
        </div>
        <div class="col-12">
          <InputText v-model="store.objRegister.nome" :label="'Nome'" />
        </div>
        <div class="col-12">
          <InputText v-model="store.objRegister.cpf" :label="'CPF'" />
        </div>
        <div class="col-12">
          <InputText v-model="store.objRegister.data" :label="'Data de nascimento'" />
        </div>
        <div class="col-12">
          <InputText v-model="store.objRegister.telefone" :label="'Telefone'" />
        </div>
        <div class="col-12">
          <InputText v-model="store.objRegister.senha" :label="'Senha'" />
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

const continuar = () => {
  if (store.objRegister.email === '') {
    alert('Preencha o e-mail')
    return
  }
  store.nextForm()
}
</script>

<style scoped></style>
