<template>
  <div
    class="
      flex
      min-h-screen
      flex-col
      justify-center
      overflow-hidden
      py-6
      px-3
      sm:py-12
      bg-gray-50
    "
  >
    <div
      class="
        mb-10
        sm:mx-auto sm:max-w-md sm:w-full sm:rounded-2xl
        flex
        justify-center
      "
    >
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div
      class="
        border border-gray-50
        relative
        bg-white
        py-6
        pt-10
        pb-8
        shadow-md
        sm:mx-auto sm:max-w-md sm:w-full sm:rounded-2xl sm:px-10
      "
    >
      <div class="leading-7 text-gray-600 text-base">
        <h1
          class="
            font-sf-pro-display
            flex
            items-center
            text-3xl
            font-bold
            text-gray-900
          "
        >
          {{ $t("auth.login") }}
        </h1>

        <div class="my-3 mt-10">
          <label
            class="font-sf-pro-display text-sm uppercase text-black font-bold"
            >{{ $t("auth.username") }}</label
          >

          <CustomInputWithValidation type="text" name="username" />
        </div>

        <div class="my-3 mt-5">
          <label
            class="font-sf-pro-display text-sm uppercase text-black font-bold"
            >{{ $t("auth.password") }}</label
          >

          <CustomInputWithValidation name="password" type="password" />
        </div>

        <div class="my-5">
          <vue-recaptcha
            @verify="markRecaptchaAsVerified"
            ref="recaptcha"
            class="recaptcha"
            :size="900"
            :sitekey="keyRecaptcha"
          ></vue-recaptcha>
        </div>

        <div class="my-5">
          <button
            @click="login"
            class="
              bg-blue-500
              text-white
              px-5
              py-3
              rounded-lg
              text-center
              w-full
              mt-4
            "
          >
            {{ $t("auth.login") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const keyRecaptcha = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
import { onMounted, ref } from "vue";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
import { useAuthStore } from "@/store/auth";
import { VueRecaptcha } from "vue-recaptcha";
import CustomInputWithValidation from "@/components/data-entry/custom-input-with-validation.vue";

import { UsernamePassword } from "@/utils/type-helper";

import { auth } from "@/services/core/api";
import { saveAuthToken, saveRefreshToken } from "@/utils/auth-handler";
import { useRouter } from "vue-router";

const recaptchaVerified = ref(false);
const recaptcha = ref();
const schema = ref({
  username: yup.string().required(),
  password: yup.string().required(),
});

const { validate, resetForm, values, setValues } = useForm({
  validationSchema: schema,
  validateOnMount: false,
});

const router = useRouter();
const { saveAuthResponse } = useAuthStore();
function login() {
  validate().then((res) => {
    if (res.valid && recaptchaVerified.value) {
      auth
        .login(values)
        .then((res) => {
          saveAuthResponse(res.data);
          router.push("/");
        })
        .catch((e) => {
          alert(e.response);
        });
    }
  });
}

function markRecaptchaAsVerified() {
  recaptchaVerified.value = true;
}

onMounted(() => {
  setValues({
    username: "metsenatadmin",
    password: "uF9aH1vZ3bV2kN2y",
  });
});
</script>

<style lang="scss">
.recaptcha {
  transform: scale(1.2) !important;
  transform-origin: 0 0 !important;
}
</style>