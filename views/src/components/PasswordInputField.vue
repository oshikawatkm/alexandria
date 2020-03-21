<template>
  <div class="form-group my-4">
    <label :for="{inputId}">{{labelText}}</label>
    <input type="password" :id="{inputId}" class="form-control" :placeholder="placeholderText">
    <small>{{ smallText }}</small>
  </div>
</template>

<script>
export default {
  name: 'PasswordInputField',
  props: {
    inputId: {
      type: String,
      required: true
    },
    labelText: {
      type: String,
      required: true
    },
    placeholderText: {
      type: String,
      required: true
    },
    smallText: {
      type: String,
      required: true
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
