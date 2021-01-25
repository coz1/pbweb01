<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="identifier" />
    <input type="text" placeholder="Password" v-model="password" />
    <input type="button" @click="login" value="Login" />
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  data() {
    return {
      identifier: '',
      password: '',
      msg: '',
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          identifier: this.identifier,
          password: this.password,
        };
        const response = await AuthService.login(credentials);
        this.msg = response.message;
        console.log(response);
        const { token } = response;
        const { user } = credentials.identifier;
        this.$store.dispatch('login', { token, user });
        this.$router.push('/');
      } catch (error) {
        this.msg = `${error.response.status}-${error.response.statusText}`;
      }
    },
  },
};
</script>
