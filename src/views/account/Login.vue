<template>
  <div class="login">
  <a-button type="primary">{{number}}</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";

export default defineComponent({
  name: "Login",
  setup(props){
    const number = ref<number>(10)
    return {
      number
    }
  }
});
</script>
