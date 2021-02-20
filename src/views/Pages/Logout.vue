<template>
  <a @click="logout()">
    <slot></slot>
  </a>
</template>
<script>
import firebase from "firebase"

export default {
  name: "log-out",
  props: {
    class: String
  },
  methods: {
    logout() {
          window.localStorage.setItem('authenticated', false);
       firebase
        .auth()
        .signOut()
        .then(() => {
      this.$router.push('/login');
        });
    }
  }
};
</script>
