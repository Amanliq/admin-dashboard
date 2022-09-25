<template>
  <nav class="py-3 overflow-auto">
    <div class="container">
      <div class="flex items-center justify-between">
        <img width="250" src="@/assets/logo.png" alt="" />
        <div class="flex items-center">
          <div class="flex py-2 px-2 rounded-md bg-gray-100">
            <p class="font-bold font-sf-pro-display">username</p>
            <div class="ml-3 rounded-md pl-1 pt-2 pr-1 bg-green-600">
              <img width="20" src="@/assets/avatar.png" alt="" />
            </div>
          </div>

          <div class="ml-10">
            <img
              width="30"
              @click="logout"
              class="cursor-pointer"
              src="@/assets/log-out.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
import { removeAuthToken, removeRefreshToken } from "@/utils/auth-handler";
import { useRouter } from "vue-router";

const { saveAuthResponse } = useAuthStore();
const router = useRouter();
function logout() {
  if (confirm("Tasdiqlash")) {
    removeAuthToken();
    removeRefreshToken();
    saveAuthResponse({ access: "", refresh: "" });

    router.push("/login");
  }
}
</script>

<style>
</style>