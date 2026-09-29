<template>
  <AppCard>
    <div>
      <!-- Header -->
      <div class="text-center mb-4">
        <h1 class="text-2xl font-bold text-cc-navy tracking-tight mb-2">Welcome back</h1>
        <p class="text-cc-sub text-sm">Please enter your details to sign in.</p>
      </div>

      <div class="mb-4 text-cc-red text-sm">
        <p v-if="error">{{ error }}</p>
      </div>
      <!-- Login Form -->
      <form @submit.prevent="onSubmit">
        
        <!-- Email Input -->
        <div class="mb-5">
          <label class="block text-xs font-medium text-cc-navy mb-1.5" for="email">
            Email Address
          </label>
          <input
            id="email"
            v-model="email"
            v-bind="emailProps"
            type="email"
            placeholder="name@company.com"
            class="w-full border border-cc-gray-mid rounded-lg px-4 py-2.5 text-sm outline-none focus:border-cc-blue focus:ring-[3px] focus:ring-cc-blue/10 transition-all text-cc-navy"
          />

          <ErrorMessage name="email" class="text-cc-red"/>
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label class="block text-xs font-medium text-cc-navy mb-1.5" for="password">
            Password
          </label>
          <div class="flex justify-center items-center w-full border border-cc-gray-mid rounded-lg px-4 focus:border-cc-blue focus:ring-[3px] focus:ring-cc-blue/10 transition-all">
            <input
                id="password"
                v-model="password"
                v-bind="passwordProps"
                :type="isPasswordVisible ? 'text' : 'password'"
                placeholder="••••••••"
                class="w-full py-2.5 text-sm outline-none  text-cc-navy"
            />
            <svg v-if="isPasswordVisible" @click="isPasswordVisible = false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-cc-gray-dark">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <svg v-else @click="isPasswordVisible = true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-cc-gray-dark">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>

          </div>

          <ErrorMessage name="password" class="text-cc-red"/>
        </div>

        <!-- Options -->
        <div class="flex items-center justify-between mb-8 text-xs">
          <a href="#" class="text-cc-blue font-medium">
            Forgot password?
          </a>
        </div>

        <AppButton 
          type="submit" 
          :disabled="isLoading"
          class="w-full shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading">Signing in...</span>
          <span v-else>Sign In</span>
        </AppButton>
        
      </form>
    </div>
  </AppCard>
    
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { z } from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { useAuth } from '~/composables/useAuth';

const isPasswordVisible = ref<boolean>(false)
const isLoading = ref<boolean>(false)

// Zod validation schema
const loginSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().nonempty("Please enter your password!"),
})

const {defineField, handleSubmit} = useForm({
  validationSchema: toTypedSchema(loginSchema),

  initialValues: {
    email: "",
    password: "",
  },
})


const [email, emailProps] = defineField("email", {validateOnChange: true});
const [password, passwordProps] = defineField("password", {validateOnChange: true});

const error = ref<string | null>(null)
const setError = (message: string) => {
  error.value = message
}


// Form submission
const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true
  setError("")

  const { login } = useAuth()
  
  // if(email.value === undefined || password.value === undefined){
  //   setError("Please fill in all required fields.")
  //   isLoading.value = false
  //   return
  // }
  
  try {

    const loggedUser = await login(values.email, values.password)
    
    if(loggedUser.account.role === 'admin'){
      navigateTo('/ccl/admin/dashboard')
    } else if(loggedUser.account.role === 'staff'){
      navigateTo('ccl/staff/dashboard')
    } else {
      navigateTo('/')
    }

    console.log("logged in successfully")
  } catch (err) {
    setError("Invalid email or Password. Please try again.")
  } finally {
    isLoading.value = false;
  }
  
})


definePageMeta({
  layout: 'blank'
})
</script>