<template>
  <div class="bg-gradient-to-b pt-6 to-white from-gray-50"></div>
  <div
    class="
      bg-gradient-to-t
      to-white
      from-gray-50
      pb-6
      flex
      justify-between
      items-center
    "
  >
    <div class="container overflow-auto">
      <div class="flex items-center justify-between">
        <Tabs v-model:activeTab="activeTab" :tabs="tabs" />
        <div class="flex items-center">
          <CustomSearchInput v-model:inputValue="searchValue" />
          <CustomFilterButton @click="showFilterModal" />
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-100 py-10 min-h-screen">
    <Sponsors ref="spononsorsRef" v-if="activeTab == 1" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CustomSearchInput from "@/components/data-entry/custom-search-input.vue";
import CustomFilterButton from "@/components/buttons/custom-filter-button.vue";
import Tabs from "@/components/tabs/index.vue";
import Sponsors from "@/views/dashboard/tab/sponsors/index.vue";
import { watch } from "vue";

const tabs: string[] = [
  "column.dashboard",
  "column.sponsors",
  "column.requirements",
];

const activeTab = ref();
const searchValue = ref("");
const spononsorsRef = ref();
function changeTab(v: number) {
  activeTab.value = v;
}

function showFilterModal() {}

watch(searchValue, (v) => {
  spononsorsRef.value.handleSearchValueChange(v);
});
</script>

<style>
</style>