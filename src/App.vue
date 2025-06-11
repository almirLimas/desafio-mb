<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-12">
        <div class="form-container">
          <FormWelcome @next="teste" v-if="formActive === 0" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import FormWelcome from './components/form/FormWelcome.vue'

const formActive = ref(0)

const teste = (e) => {
  formActive.value = e
  console.log('Continuar clicked', e)
}
</script>
<style scoped></style>
