<template>
  <component :is="layout">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import BlankLayout from "@/views/layout/blank-layout.vue";
import DashboardLayout from "@/views/layout/dashboard-layout.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const layouts = {
  BlankLayout: BlankLayout,
  DashboardLayout: DashboardLayout,
};

const layout = computed(() => {
  const metaLayout = route.name ? route.meta?.layout || "AppDefaultLayout" : "";
  return layouts[metaLayout as keyof typeof layouts];
});
</script>