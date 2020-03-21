<template>
  <div id="book-detail-component" style="margin-top: 150px;">
    <div class="container">
      <h2>書籍詳細情報</h2>
      <div class="row">
        <div class="col-md-5">
          <div class="p-3 m-5 bg-dark" style="width: 300px; height: 450px;"></div>
        </div>
        <div class="col-md-7">
          <p class="mt-5">タイトル:</p>
          <h4 class="ml-3">転生したらウンタラカンタラ</h4>
          <p class="mt-4">著者:</p>
          <h4 class="ml-3">吉田 健</h4>
          <p class="mt-4">投稿日時:</p>
          <h4 class="ml-3">2020/10/12</h4>
          <p class="mt-4">価格:</p>
          <h4 class="ml-3">500円</h4>
          <a href="#" class="btn btn-primary">購入申請</a>
          <p class="mt-4">詳細:</p>
          <p>普通の会社員、佐藤がある日の仕事帰り事故に遭い、目がさめるとそこは知らない世界だった。そこで佐藤は</p>
        </div>
      </div>
      <div id="comments">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
