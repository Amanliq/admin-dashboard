<template>
  <div class="tabs">
    <ul class="flex lg:flex-row flex-col cursor-pointer">
      <li
        @click="changeTab(tab)"
        :class="[
          index == 0
            ? 'rounded-l-md'
            : index == tabs?.length - 1
            ? 'rounded-r-md border-r-2'
            : '',
          tab.link === $route.name
            ? 'bg-blue-500 text-white'
            : ' text-blue-500',
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
        {{ $t(`${tab.label}`) }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { TabInterface } from "@/utils/type-helper";
import { defineEmits, defineProps } from "vue";
import { useRouter } from "vue-router";
const emit = defineEmits(["update:activeTab"]);

const router = useRouter();
function changeTab(tab: TabInterface) {
  router.push({ name: tab.link });
}

defineProps({
  tabs: {
    type: Array as PropType<TabInterface[]>,
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