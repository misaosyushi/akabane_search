<template>
  <div class="message" >
    <v-alert
      v-if="errorMessage"
      :value="true"
      type="error"
    >
      {{ errorMessage }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props:{
    errorMessage: {
      type: String,
      required: true
    }
  }
};
</script>