<template>
  <form class="container">
    <h3 class="form-header">Pessoa Física</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-6">
          <InputText v-model="store.objRegister.nome" :label="'Nome'" />
        </div>
        <div class="col-6">
          <InputText v-model="store.objRegister.cpf" :label="'CPF'" />
        </div>
        <div class="col-6">
          <InputText v-model="store.objRegister.dataNascimento" :label="'Data de nascimento'" />
        </div>
        <div class="col-6">
          <InputText v-model="store.objRegister.telefone" :label="'Telefone'" />
        </div>
        <div class="col-6">
          <ButtonPrevious type="submit" @click="previous" />
        </div>
        <div class="col-6">
          <ButtonInfo type="submit" @click="continuar" />
        </div>
      </div>
    </div>
  </form>
</template>
<script setup>
import { store } from '@/store/store'
import InputText from '../inputs/InputText.vue'
import ButtonInfo from '../buttons/ButtonInfo.vue'

import ButtonPrevious from '../buttons/ButtonPrevious.vue'

const continuar = () => {
  store.nextForm()
}

const previous = () => {
  store.prevForm()
}
</script>

<style scoped></style>
