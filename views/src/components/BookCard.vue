<template>
  <div class="card col-md-3 col-sm-6 col-xs-12 my-3 mx-2" style="max-width:23.5%; max-height: 300px;">
    <div class="card-body">
      <div class="img text-center">
        <div class="bg-dark px-3 py-5 mx-5 my-2"></div>
        <p style="margin-bottom: 0.1rem;">{{title}}</p>
      </div>
      <p style="margin-bottom: 0.1rem;"><small>作者:{{author}}</small></p>
      <p style="margin-bottom: 0.1rem;"><small>投稿: {{date}}</small></p>
      <p style="margin-bottom: 0.1rem;"><small>カテゴリ: </small></p>
      <div v-for="category in categorys" :key="category.id">
        <a href="#" class="badge badge-light px-2">{{category.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    categorys: {
      type: Array,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
