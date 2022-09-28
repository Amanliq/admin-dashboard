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
      <div class="flex flex-col xl:flex-row items-center justify-between">
        <Tabs v-model:activeTab="activeTab" :tabs="tabs" />

        <div class="flex items-center flex-col justify-start lg:flex-row">
          <CustomSearchInput
            class="my-5 xl:m-0"
            v-model:inputValue="searchValue"
          />
          <CustomFilterButton @click="showFilterModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CustomSearchInput from "@/components/data-entry/custom-search-input.vue";
import CustomFilterButton from "@/components/buttons/custom-filter-button.vue";
import Tabs from "@/components/tabs/index.vue";
import { watch } from "vue";
import { TabInterface } from "@/utils/type-helper";
import { useSponsorsStore } from "@/store/dashboard/sponsors/index";

const { setSearchValue } = useSponsorsStore();

const tabs: TabInterface[] = [
  {
    label: "column.dashboard",
    link: "Dashboard",
  },
  {
    label: "column.sponsors",
    link: "Sponsors",
  },
  {
    label: "column.requirements",
    link: "Requirements",
  },
];

const activeTab = ref(1);
const searchValue = ref("");
const spononsorsRef = ref();
function changeTab(v: number) {
  activeTab.value = v;
}

function showFilterModal() {}

watch(searchValue, (v) => {
  setSearchValue(v);
});
</script>

<style>
</style>