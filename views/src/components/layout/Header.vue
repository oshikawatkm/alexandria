<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <a href="#" class="navbar-brand">Alexandria</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">トップ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashborad" class="nav-link">マイページ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link">新規登録</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">ログイン</router-link>
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