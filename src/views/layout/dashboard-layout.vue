<template>
  <div>
    <Navbar />
    <Tab />
    <div class="bg-gray-100 min-h-screen">
      <slot></slot>
    </div>
  </div>
</template>

<script setup  lang="ts">
import Navbar from "@/views/dashboard/navbar/index.vue";

import Tab from "@/views/dashboard/tab/index.vue";
</script>
