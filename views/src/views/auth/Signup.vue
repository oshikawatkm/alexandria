<template>
<div id="signup-section">
    <div class="container">
      <div class="card my-5">
        <div class="card-body">
          <div class="container">
            <h1 class="card-title text-center my-5">新規登録</h1>
            <p class="text-center my-5">すでに登録済みのかたは<a href="#" class="text-primary">ログイン画面へ</a></p>
            <form action="" class="my-5">
              <div class="row">
                <div class="col-md-6">
                  <InputField inputId="firstName" labelText="お名前(姓):" placeholderText="田中" />
                </div>
                <div class="col-md-6">
                  <InputField inputId="lastName" labelText="お名前(名):" placeholderText="太郎" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <InputField inputId="firstNameKana" labelText="お名前(セイ):" placeholderText="タナカ" />
                </div>
                <div class="col-md-6">
                  <InputField inputId="lastNameKana" labelText="お名前(メイ):" placeholderText="タロウ" />
                </div>
              </div>
              <EmailInputField inputId="email" labelText="メールアドレス：" placeholderText="alexandria@example.com" />
              <PasswordInputField inputId="passwrod" labelText="パスワード：" placeholderText="パスワード" smallText="8文字以上32文字未満" />
              <PasswordInputField inputId="passwrodConfirm" labelText="パスワード確認用：" placeholderText="パスワード確認用" smallText="" />
              <CheckBoxField v-bind:choices="sexChoices" formText="性別：" />
              <div class="form-group my-4">
                <label for="birth">生年月日:</label>
                <div class="row">
                  <div class="col-md-4">
                    <label for="birthYear">年</label>
                    <select class="form-control form-control-lg" id="birthYear">
                      <option>選択してください</option>
                    </select>
                  </div>
                  <div class="col-md-2">
                    <form action="birthMonth">月</form>
                    <select class="form-control form-control-lg" id="birthMonth">
                      <option>選択してください</option>
                    </select>
                  </div>
                  <div class="col-md-2">
                    <form action="birthDay">日</form>
                    <select class="form-control form-control-lg" id="birthDay">
                      <option>選択してください</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="">住所:県</label>
                <select class="form-control form-control-lg col-md-4" id="birthDay">
                  <option>選択してください</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">住所:市町村 番地</label>
                <input type="text" id="mobilePhoneNumber" class="form-control" placeholder="港区 3-2">
              </div>
              <div class="form-group">
                <label for="">住所:マンション・アパート 号室</label>
                <input type="text" id="mobilePhoneNumber" class="form-control" placeholder="アレクサンドリアマンション 109号室">
              </div>
              <div class="form-group">
                <label for="">携帯電話番号</label>
                <input type="text" id="mobilePhoneNumber" class="form-control" placeholder="0901234567">
                <small>ハイフン抜きで入力してください。</small>
              </div>
              <div class="form-group">
                <label for="">自宅電話番号</label>
                <input type="text" id="homePhoneNumber" class="form-control" placeholder="06123456">
                <small>ハイフン抜きで入力してください。</small>
              </div>
              <div class="form-gruop mt-5 text-center">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                  <label class="form-check-label" for="inlineCheckbox1">利用規約に同意します</label>
                </div>
              </div>
              <button class="btn btn-primary btn-lg mt-4 mb-3 mx-auto d-block">新規登録</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "@/components/InputField";
import EmailInputField from "@/components/EmailInputField";
import PasswordInputField from "@/components/PasswordInputField";
import CheckBoxField from "@/components/CheckBoxField"
import { sexChoices } from "@/common/props"

export default {
  name: 'Signup',
  components: {
    InputField,
    EmailInputField,
    PasswordInputField,
    CheckBoxField
  },
  props: {
    sexChoices
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
