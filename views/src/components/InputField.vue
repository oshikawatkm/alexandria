<template>
  <div class="form-group my-4">
    <label :for="{inputId}">{{labelText}}</label>
    <input type="text" v-model="$data.inputValue" :id="{inputId}" class="form-control" :placeholder="placeholderText">
    <small v-if="smallText">{{smallText}}</small>
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
    },
    smallText: {
      type: String,
    },
  },
  data() {
    return {inputValue: ""}
  },
  watch: {
    inputValue: function () {
      this.$emit("inputted")
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
