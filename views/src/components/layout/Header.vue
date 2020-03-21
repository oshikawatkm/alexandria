<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <a href="#" class="navbar-brand">Alexandria</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="#" class="nav-link">トップ</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">マイページ</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">新規登録</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">ログイン</a>
            </li>
          </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {}
}
</script>