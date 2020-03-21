<template>
  <div class="form-group my-4">
    <label :for="{inputId}">{{labelText}}</label>
    <input type="text" :id="{inputId}" class="form-control" :placeholder="placeholderText">
  </div>
</template>

<script>
export default {
  name: 'InputField',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
