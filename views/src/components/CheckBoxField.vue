<template>
  <div class="form-gruop my-4">
    <p>{{ formText }}</p>
    <div class="row">
      <div v-for="choice in sexChoices" :key="choice.id" class="form-check form-check-inline mx-4">
        <input class="form-check-input" type="radio" :name="choice.name" :id="choice.id" :value="choice.value">
        <label class="form-check-label" :for="choice.id">{{ choice.labelText }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckBoxField',
  props: {
    sexChoices: {
      type: Array,
      required: true
    },
    formText: {
      type: String,
      required: true
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
