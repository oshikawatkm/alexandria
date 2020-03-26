<template>
  <div class="form-gruop mt-5 text-center">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" :idText="idText" :value="idText">
      <label class="form-check-label" for="idText">{{labelText}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    idText: {
      type: String,
      require: true
    },
    labelText: {
      type: String,
      require: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
