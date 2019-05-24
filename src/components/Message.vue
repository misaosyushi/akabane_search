<template>
  <div class="message" >
    <!-- <v-alert
      v-if="message"
      :value="true"
      type="success"
    >
      {{ message }}
    </v-alert> -->
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
    // message: {
    //   type: String,
    //   required: true
    // },
    errorMessage: {
      type: String,
      required: true
    }
  }
};
</script>