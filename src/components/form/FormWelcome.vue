<template>
  <form class="container">
    <h3 class="form-header">Seja Bem vindo (a)</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="email" :label="'Endereço de e-mail'" />
        </div>
      </div>
    </div>

    <ButtonInfo type="submit" class="" />
  </form>
</template>
<script setup>
import { ref } from 'vue'
import InputText from '../inputs/InputText.vue'
import ButtonInfo from '../buttons/ButtonInfo.vue'

const email = ref('')
</script>

<style scoped>
.teste {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>
