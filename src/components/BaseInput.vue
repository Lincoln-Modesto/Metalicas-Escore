<template>
  <div>
    <label>{{ title }}</label>
    <input 
      type="number" 
      class="base-input form-control input" 
      :class="{ 'is-invalid': hasError }"
      :value="modelValue"
      v-bind="$attrs" 
      @input="emit('update:modelValue', $event.target.value)"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: { required: true, type: String },
    hasError: { required: false, default: false, type: Boolean },
    modelValue: { type: String }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return {
      emit
    }
  }
})
  
</script>

<style scoped>

.input{
  width: 250px;
}

</style>