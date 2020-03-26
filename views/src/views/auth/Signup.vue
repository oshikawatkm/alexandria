<template>
  <div id="signup-section" class="bg-light">
    <div class="container">
      <div class="card my-5 ">
        <div class="card-body">
          <div class="container">
            <h1 class="card-title text-center my-5">新規登録</h1>
            <p class="text-center my-5">すでに登録済みのかたは<router-link to="/login" class="nav-link text-primary">ログイン画面へ</router-link></p>
            <form @submit.prevent="onSubmit">
              <div class="row">
                <div class="col-md-6">
                  <InputField @inputted="inputtedFirstName" inputId="firstName" labelText="お名前(姓):" placeholderText="田中" />
                </div>
                <div class="col-md-6">
                  <InputField @inputted="inputtedLastName" inputId="lastName" labelText="お名前(名):" placeholderText="太郎" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <InputField @inputted="inputtedFirstNameKana" inputId="firstNameKana" labelText="お名前(セイ):" placeholderText="タナカ" />
                </div>
                <div class="col-md-6">
                  <InputField @inputted="inputtedLastNameKana" inputId="lastNameKana" labelText="お名前(メイ):" placeholderText="タロウ" />
                </div>
              </div>
              <EmailInputField @inputted="inputtedEmail" inputId="email" labelText="メールアドレス：" placeholderText="alexandria@example.com" />
              <PasswordInputField @inputted="inputtedPassword" inputId="passwrod" labelText="パスワード：" placeholderText="パスワード" smallText="8文字以上32文字未満" />
              <PasswordInputField @inputted="inputtedPasswrodConfirm" inputId="passwrodConfirm" labelText="パスワード確認用：" placeholderText="パスワード確認用" smallText="" />
              <CheckBoxField @inputted="inputtedSex"  choices="inputtedSexChoices" formText="性別：" />
              <div class="form-group my-4">
                <label for="birth">生年月日:</label>
                <div class="row">
                  <div class="col-md-4">
                    <SelectField @inputted="inputtedBirthYear" labelText="年" idText="birthYear" options="birthYearOptions" />
                  </div>
                  <div class="col-md-2">
                    <SelectField @inputted="inputtedBirthMonth" labelText="月" idText="birthMonth" options="birthMonthOptions" />
                  </div>
                  <div class="col-md-2">
                    <SelectField @inputted="inputtedBirthDay" labelText="日" idText="birthDay" options="birthDayOptions" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-4">
                    <SelectField @inputted="inputtedAddressPrefecture" labelText="住所(県)" idText="addressPrefecture" options="prefecturesOptions" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <InputField @inputted="inputtedAddressCity" inputId="addressCity" labelText="住所:市町村 番地" placeholderText="港区 3-2"></InputField>
              </div>
              <div class="form-group">
                <InputField @inputted="inputtedAddressOthers" inputId="addressOthers" labelText="住所:マンション・アパート 号室" placeholderText="アレクサンドリアマンション 109号室"></InputField>
              </div>
              <div class="form-group">
                <InputField @inputted="inputtedMobilePhoneNumber" inputId="mobilePhoneNumber" labelText="携帯電話番号" placeholderText="0901234567" smallText="ハイフン抜きで入力してください。"></InputField>
              </div>
              <div class="form-group">
                <InputField @inputted="inputtedHomePhoneNumber" inputId="homePhoneNumber" labelText="自宅電話番号" placeholderText="061234567" smallText="ハイフン抜きで入力してください。"></InputField>
              </div>
              <ConfirmBox idText="confirmed" labelText="利用規約に同意します" />
              <button class="btn btn-primary btn-lg mt-4 mb-3 mx-auto d-block">新規登録</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";
import InputField from "@/components/InputField";
import EmailInputField from "@/components/EmailInputField";
import PasswordInputField from "@/components/PasswordInputField";
import CheckBoxField from "@/components/CheckBoxField";
import SelectField from "@/components/SelectField";
import ConfirmBox from "@/components/ConfirmBox";
import { 
  sexChoices, 
  prefecturesOptions, 
  birthYearOptions, 
  birthMonthOptions, 
  birthDayOptions 
  } from "@/common/props"

export default {
  name: 'Signup',
  components: {
    InputField,
    EmailInputField,
    PasswordInputField,
    CheckBoxField,
    SelectField,
    ConfirmBox
  },
  props: {
    sexChoices,
    prefecturesOptions,
    birthYearOptions,
    birthMonthOptions,
    birthDayOptions
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
   onSubmit() {
     console.log("Hello!!!")
     console.log(this.inputtedFirstName)
      this.$store
        .dispatch(REGISTER, {
          name: this.name,
          nameKana: this.nameKana,
          email: this.email,
          password: this.password,
          sex: this.sex,
          address: this.address,
          mobilePhoneNumber: this.mobilePhoneNumber,
          homePhoneNumber: this.homePhoneNumber
        })
        .then(() => this.$router.push({ name: "dashboard" }));
    }
  },
  watch: {
    inputtedFirstName: function() {
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
