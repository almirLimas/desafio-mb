<template>
  <form class="container">
    <h3 class="form-header">Senha de acesso</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.password" :label="'Senha'" />
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
