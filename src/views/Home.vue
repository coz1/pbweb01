<template>
  <div>
    <h1>Hi {{ identifier }}</h1>
    <p>{{ secretMessage }}</p>
    <input type="button" value="Logout" @click="logout" />
  </div>
</template>
<script>
import AuthService from '@/services/AuthService';

export default {
  data() {
    return {
      secretMessage: '',
      identifier: '',
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }
    this.identifier = this.$store.getters.getUser.identifier;
    this.secretMessage = await AuthService.getSecretContent();
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
};
</script>
