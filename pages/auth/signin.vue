<template>
  <div class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card style="width: 90%; max-width: 500px;">
      <v-card-text>
        <v-form @submit.prevent="signInWithEmail">
          <h1 style="text-align: center;">Log In</h1>
          
          <br>
          <v-text-field v-model="email" label="Email" prepend-inner-icon="mdi-email" outlined />
          <v-text-field v-model="password" label="Password" type="password" prepend-inner-icon="mdi-lock" outlined />

          
          <v-btn :loading="loading" color="blue" size="large" type="submit" block>Sign In</v-btn>

          <br>
          <v-btn color="red darken-1" variant="elevated" block @click="signInWithGoogle">
          <v-icon left>mdi-google</v-icon>
          Sign in with Google
        </v-btn>
        </v-form>

        <div v-if="userInfo" class="mt-4 text-center">
          <p>Welcome, <strong>{{ userInfo.displayName }}</strong></p>
          <p>Email: {{ userInfo.email }}</p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
export default {
  layout: "auth",
  middleware: 'guest',
  methods: {
    signInWithGoogle(){
      this.$auth.loginWith('google')
    }
  }
};
</script>

