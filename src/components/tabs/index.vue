<template>
  <div class="tabs">
    <ul class="flex lg:flex-row flex-col cursor-pointer">
      <li
        @click="changeTab(index)"
        :class="[
          index == 0
            ? 'rounded-l-md'
            : index == tabs?.length - 1
            ? 'rounded-r-md border-r-2'
            : '',
          activeTab === index ? 'bg-blue-500 text-white' : ' text-blue-500',
        ]"
        class="
          text-xs
          tracking-widest
          font-semibold
          fonr-sf-pro-display
          uppercase
          py-3
          border-blue-100 border-l-2 border-t-2 border-b-2
          px-16
        "
        v-for="(tab, index) in tabs"
        :key="index"
      >
        {{ $t(`${tab}`) }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
const emit = defineEmits(["update:activeTab"]);
function changeTab(tabIndex: number) {
  emit("update:activeTab", tabIndex);
}

defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
  activeTab: {
    type: Number,
    default: 1,
  },
});
</script>

<style>
</style>