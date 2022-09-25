<template>
  <label class="mr-4 font-sf-pro-display text-sm">{{
    $t("actions.view")
  }}</label>
  <select
    id="countries"
    class="
      bg-white
      border border-gray-300
      text-gray-900 text-sm
      rounded-lg
      focus:ring-blue-500 focus:border-blue-500
      block
      w-full
      p-2.5
      dark:bg-gray-700
      dark:border-gray-600
      dark:placeholder-gray-400
      dark:text-white
      dark:focus:ring-blue-500
      dark:focus:border-blue-500
    "
  >
    <option
      :value="option.value"
      v-for="(option, index) in options"
      :key="index + '-option'"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const emit = defineEmits(["update:pageSize"]);
const props = defineProps({
  pageSize: {
    type: Number,
    default: 20,
  },
});
const options = [
  {
    value: 20,
    label: "20",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 300,
    label: "300",
  },
  {
    value: 500,
    label: "500",
  },
];

function handleChange(v: any) {
  emit("update:pageSize", v.target.value);
}
</script>

<style>
</style>
