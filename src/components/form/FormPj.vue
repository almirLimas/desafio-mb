<template>
  <form class="container">
    <h3 class="form-header">Pessoa Juridica</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.razaoSocial" :label="'Razão social'" />
          <span v-if="store.errorMessages.razaoSocial" class="form-error">{{
            store.errorMessages.razaoSocial
          }}</span>
        </div>
        <div class="col-12">
          <InputText
            v-model="store.objRegister.cnpj"
            @update:modelValue="onInputPj"
            :label="'CNPJ'"
            :max-length="18"
          />

          <span v-if="store.errorMessages.cnpj" class="form-error">{{
            store.errorMessages.cnpj
          }}</span>
        </div>
        <div class="col-12">
          <InputDate v-model="store.objRegister.dataAbertura" :label="'Data de abertura'" />
          <span v-if="store.errorMessages.dataAbertura" class="form-error">{{
            store.errorMessages.dataAbertura
          }}</span>
        </div>
        <div class="col-12">
          <InputPhone v-model="store.objRegister.telefone" :label="'Telefone'" />
          <span v-if="store.errorMessages.telefone" class="form-error">
            {{ store.errorMessages.telefone }}
          </span>
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
import { useFormatCnpj } from '@/composables/useFormatCnpj'
import { useValidation } from '@/composables/useValitation'
const { isValidFormPj } = useValidation()
const { formatCnpj } = useFormatCnpj()
import ButtonInfo from '../buttons/ButtonInfo.vue'
import ButtonPrevious from '../buttons/ButtonPrevious.vue'
import InputPhone from '../inputs/InputPhone.vue'
import InputDate from '../inputs/InputDate.vue'

const continuar = () => {
  if (isValidFormPj()) {
    store.nextForm()
  } else {
    return
  }
}

const previous = () => {
  store.prevForm()
}

const onInputPj = () => {
  store.objRegister.cnpj = formatCnpj(store.objRegister.cnpj)
}
</script>

<style scoped></style>
