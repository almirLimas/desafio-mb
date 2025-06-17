<template>
  <form class="container">
    <h3 class="form-header">Revisa suas informações</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.email" :label="'Endereço de e-mail'" />
          <span v-if="store.errorMessages.email" class="form-error">{{
            store.errorMessages.email
          }}</span>
        </div>
        <div class="col-12">
          <InputText
            v-if="store.objRegister.tipoDePessoa === 0"
            v-model="store.objRegister.nome"
            :label="'Nome'"
          />

          <span v-if="store.errorMessages.nome" class="form-error">{{
            store.errorMessages.nome
          }}</span>
          <InputText
            v-if="store.objRegister.tipoDePessoa === 1"
            v-model="store.objRegister.razaoSocial"
            :label="'Razão social'"
          />
          <span v-if="store.errorMessages.razaoSocial" class="form-error">{{
            store.errorMessages.razaoSocial
          }}</span>
        </div>
        <div class="col-12">
          <InputText
            v-if="store.objRegister.tipoDePessoa === 0"
            v-model="store.objRegister.cpf"
            :label="'CPF'"
          />
          <span v-if="store.errorMessages.cpf" class="form-error">{{
            store.errorMessages.cpf
          }}</span>
          <InputText
            v-if="store.objRegister.tipoDePessoa === 1"
            v-model="store.objRegister.cnpj"
            :label="'CNPJ'"
          />
          <span v-if="store.errorMessages.cnpj" class="form-error">{{
            store.errorMessages.cnpj
          }}</span>
        </div>
        <div class="col-12">
          <InputDate
            v-if="store.objRegister.tipoDePessoa === 0"
            v-model="store.objRegister.dataNascimento"
            :label="'Data de nascimento'"
          />
          <span v-if="store.errorMessages.dataNascimento" class="form-error">{{
            store.errorMessages.dataNascimento
          }}</span>
          <InputDate
            v-if="store.objRegister.tipoDePessoa === 1"
            v-model="store.objRegister.dataAbertura"
            :label="'Data de abertura'"
          />
          <span v-if="store.errorMessages.dataAbertura" class="form-error">{{
            store.errorMessages.dataAbertura
          }}</span>
        </div>
        <div class="col-12">
          <InputText v-model="store.objRegister.telefone" :label="'Telefone'" />
          <span v-if="store.errorMessages.telefone" class="form-error">{{
            store.errorMessages.telefone
          }}</span>
        </div>
        <div class="col-12">
          <InputText v-model="store.objRegister.password" :label="'Senha'" />
          <span v-if="store.errorMessages.password" class="form-error">{{
            store.errorMessages.password
          }}</span>
        </div>
        <div class="col-6">
          <ButtonPrevious @click="previous" :title="'Voltar'" />
        </div>
        <div class="col-6">
          <ButtonInfo @click="save" :title="'Salvar'" />
        </div>
      </div>
    </div>
  </form>
</template>
<script setup>
import { store } from '@/store/store'
import { register } from '@/api/api.js'
import InputText from '@/components/inputs/InputText.vue'
import ButtonInfo from '@/components/buttons/ButtonInfo.vue'
import ButtonPrevious from '@/components/buttons/ButtonPrevious.vue'
import InputDate from '@/components/inputs/InputDate.vue'
import { useValidation } from '@/composables/useValitation'

const { isValidFormReview } = useValidation()

const save = async () => {
  console.log(isValidFormReview())
  if (isValidFormReview()) {
    try {
      store.isLoading = true
      await register()
    } catch (error) {
      console.log('Erro:', error)
    } finally {
      store.isLoading = false
    }
  }
}

const previous = () => {
  store.prevForm()
}
</script>

<style scoped></style>
