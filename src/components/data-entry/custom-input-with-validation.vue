<template>
  <input
    v-bind="$attrs"
    :id="name"
    :value="inputValue"
    @input="handleChange"
    @blur="handleBlur"
    placeholder="Kiriting"
    class="
      form-input
      w-full
      rounded-lg
      border border-gray-200
      bg-gray-50
      px-3
      py-2
      shadow-sm
      hover:bg-white
      focus:bg-white
    "
  />
  <p class="err-message" v-show="errorMessage || meta.valid">
    {{ errorMessage }}
  </p>
</template>

<script setup lang="ts">
import { defineProps, toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String || undefined,
    default: "",
  },
  value: {
    type: String || undefined,
    default: "",
  },
});
const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleChange,
  handleBlur,
  meta,
} = useField(props.name, undefined, {
  initialValue: props.value,
});
</script>

<style scoped>
.err-message {
  color: red;
}
</style>



