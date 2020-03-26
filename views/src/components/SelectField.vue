<template>
  <div class="form-group">
    <label for="birthYear">{{labelText}}</label>
    <select class="form-control form-control-lg" :id="idText">
      <option v-for="(option, value) in options" v-bind:value="option.value" :key='value'>
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    options: {
      type: Array,
      required: true
    },
    labelText: {
      type: String,
      required: true
    },
    idText: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
