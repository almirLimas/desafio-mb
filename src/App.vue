<template>
  <LoadingSpinner v-if="store.isLoading" />
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-12">
        <div class="form-container">
          <span class="container"> Passo {{ store.formActive }} de 4</span>

          <FormWelcome v-if="store.formActive === 1" />
          <FormPf v-if="store.formActive === 2 && store.objRegister.tipoDePessoa === 0" />
          <FormPj v-if="store.formActive === 2 && store.objRegister.tipoDePessoa === 1" />
          <FormPassword v-if="store.formActive === 3" />
          <FormReview v-if="store.formActive === 4" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { watch, ref, onMounted } from 'vue'
import { getRegister } from '@/api/api.js'
import { store } from '@/store/store'
import FormWelcome from '@/components/form/FormWelcome.vue'
import FormPf from '@/components/form/FormPf.vue'
import FormPj from '@/components/form/FormPj.vue'
import FormPassword from '@/components/form/FormPassword.vue'
import FormReview from '@/components/form/FormReview.vue'
import LoadingSpinner from '@/components/spinner/LoadingSpinner.vue'
const isEdit = ref(false)

onMounted(async () => {
  if (isEdit.value === true) {
    await getRegister()
  }
})

watch(
  () => ({ ...store.objRegister }),
  (navoValor, velhoValor) => {
    for (const key in navoValor) {
      if (navoValor[key] !== velhoValor[key]) {
        store.errorMessages[key] = ''
      }
    }
  },
  { deep: true },
)
</script>
<style scoped></style>
