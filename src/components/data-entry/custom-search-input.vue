<template>
  <div class="relative">
    <div
      class="
        flex
        absolute
        inset-y-0
        left-0
        items-center
        pl-3
        pointer-events-none
      "
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_120_308)">
          <path
            d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
            stroke="#B1B1B8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 17.5L12.5 12.5"
            stroke="#B1B1B8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_120_308">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      :value="inputValue"
      @input="handleInput"
      class="
        lg:w-72
        block
        text-xs
        p-3
        bg-gray-100
        pl-10
        text-gray-900
        bg-gray-50
        rounded-md
        focus:ring-blue-500
      "
      :placeholder="$t('actions.search')"
    />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineExpose, defineProps } from "vue";
defineProps({
  inputValue: String,
});

const emit = defineEmits(["update:inputValue"]);
function handleInput(v: any) {
  emit("update:inputValue", v.target.value);
}
</script>

<style>
</style>