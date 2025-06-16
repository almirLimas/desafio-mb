<template>
  <form class="container">
    <h3 class="form-header">Senha de acesso</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.password" :label="'Senha'" />
          <span v-if="store.errorMessages.password" class="form-error">{{
            store.errorMessages.password
          }}</span>
        </div>
        <div class="col-6">
          <ButtonPrevious @click="previous" />
        </div>
        <div class="col-6">
          <ButtonInfo @click="continuar" />
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
import { useValidation } from '@/composables/useValitation'
const { isValidFormPassword } = useValidation()

const continuar = () => {
  if (isValidFormPassword()) {
    store.nextForm()
  }
}

const previous = () => {
  store.prevForm()
}
</script>

<style scoped></style>
