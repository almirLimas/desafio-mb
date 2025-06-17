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
          <ButtonPrevious @click="previous" :title="'Voltar'" />
        </div>
        <div class="col-6">
          <ButtonInfo @click="nextForm" :title="'Continuar'" />
        </div>
      </div>
    </div>
  </form>
</template>
<script setup>
import { store } from '@/store/store'
import InputText from '@/components/inputs/InputText.vue'
import { useFormatCnpj } from '@/composables/useFormatCnpj'
import { useValidation } from '@/composables/useValitation'
import ButtonInfo from '@/components/buttons/ButtonInfo.vue'
import ButtonPrevious from '@/components/buttons/ButtonPrevious.vue'
import InputPhone from '@/components/inputs/InputPhone.vue'
import InputDate from '@/components/inputs/InputDate.vue'

const { isValidFormPj } = useValidation()
const { formatCnpj } = useFormatCnpj()

const nextForm = () => {
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
