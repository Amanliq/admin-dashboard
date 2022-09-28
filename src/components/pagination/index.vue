<template>
  <div class="flex items-center cursor-pointer">
    <div
      v-if="total > 0"
      @click="prev"
      :class="currentPage === 1 ? 'bg-gray-100' : ' bg-white'"
      class="
        w-9
        flex
        items-center
        justify-center
        font-bold
        fon-sf-pro-display
        h-9
        ml-1
        border
        rounded-md
      "
    >
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.87762 1.12747C8.03371 1.28355 8.03385 1.53658 7.87793 1.69284L3.86207 5.71747C3.70628 5.87361 3.70628 6.1264 3.86207 6.28253L7.87793 10.3072C8.03385 10.4634 8.03371 10.7164 7.87762 10.8725L7.033 11.7172C6.87679 11.8734 6.62352 11.8734 6.46731 11.7172L1.033 6.28284C0.876789 6.12663 0.87679 5.87337 1.033 5.71716L6.46731 0.282842C6.62352 0.126632 6.87679 0.126633 7.033 0.282843L7.87762 1.12747Z"
          fill="#979797"
        />
      </svg>
    </div>
    <div
      @click="page !== '...' ? setPage(page) : null"
      :class="[page === currentPage ? 'border-blue-500' : '']"
      class="
        w-9
        flex
        items-center
        justify-center
        font-bold
        fon-sf-pro-display
        h-9
        ml-1
        border-2
        bg-white
        rounded-md
      "
      v-for="page in pagePagination"
      :key="page + '-page'"
    >
      {{ page }}
    </div>

    <div
      v-if="total > 0"
      @click="next"
      :class="[currentPage === pageTotal ? 'bg-gray-100' : ' bg-white']"
      class="
        w-9
        flex
        items-center
        justify-center
        font-bold
        fon-sf-pro-display
        h-9
        ml-1
        border
        rounded-md
      "
    >
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.122378 1.12747C-0.0337111 1.28355 -0.0338491 1.53658 0.12207 1.69284L4.13793 5.71747C4.29372 5.87361 4.29372 6.1264 4.13793 6.28253L0.12207 10.3072C-0.0338493 10.4634 -0.0337111 10.7164 0.122378 10.8725L0.967001 11.7172C1.12321 11.8734 1.37648 11.8734 1.53269 11.7172L6.967 6.28284C7.12321 6.12663 7.12321 5.87337 6.967 5.71716L1.53269 0.282842C1.37648 0.126632 1.12321 0.126633 0.967001 0.282843L0.122378 1.12747Z"
          fill="#C4CDD5"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const emit = defineEmits(["update:currentPage"]);

const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 20,
  },
});

const pageTotal = computed(() => Math.ceil(props.total / props.pageSize));

const pagePagination = computed(() => {
  if (pageTotal.value > 3) {
    if (
      props.currentPage != pageTotal.value &&
      props.currentPage != pageTotal.value - 1
    ) {
      return [
        props.currentPage,
        props.currentPage + 1,
        "...",
        pageTotal.value - 1,
        pageTotal.value,
      ];
    } else {
      return [1, 2, "...", pageTotal.value - 1, pageTotal.value];
    }
  } else {
    return pageTotal.value;
  }
});

function next() {
  if (props.currentPage !== pageTotal.value) {
    emit("update:currentPage", props.currentPage + 1);
  }
}

function prev() {
  if (props.currentPage !== 1) {
    emit("update:currentPage", props.currentPage - 1);
  }
}

function setPage(v: number) {
  emit("update:currentPage", v);
}
</script>

<style>
</style>