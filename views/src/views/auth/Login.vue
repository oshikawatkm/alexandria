<template>
  <div id="signup-section">
    <div class="container">
      <div class="card my-5">
        <div class="card-body">
          <div class="container">
            <h1 class="card-title text-center my-5">ログイン</h1>
            <p class="text-center my-5">アカウントをお持ちでない方は<a href="#" class="text-primary">新規登録画面へ</a></p>
            <form action="" class="my-5">
              <EmailInputField inputId="email" labelText="メールアドレス：" placeholderText="alexandria@example.com" />
              <PasswordInputField inputId="passwrod" labelText="パスワード：" placeholderText="パスワード" smallText="8文字以上32文字未満" />
              <div class="form-gruop mt-5 text-center">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                  <label class="form-check-label" for="inlineCheckbox1">ログイン情報を記憶する。</label>
                </div>
              </div>
              <button class="btn btn-primary btn-block mt-4 mb-3">ログイン</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInputField from "@/components/EmailInputField";
import PasswordInputField from "@/components/PasswordInputField";

export default {
  name: 'Login',
  components: {
    EmailInputField,
    PasswordInputField
  },
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
