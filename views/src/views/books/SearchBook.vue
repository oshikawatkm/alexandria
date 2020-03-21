<template>
  <div id="book-search-form-component" class="my-5">
    <div class="container">
      <div class="card bg-light">
        <div class="card-body">
          <h3 class="text-center my-3">蔵書検索</h3>
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <input type="text" class="form-control" id="bookTitle" aria-describedby="bookTitleHelp" placeholder="タイトル">
            </div>
            <div class="col-md-1"></div>
          </div>
          <div class="row">
            <div class="col">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
