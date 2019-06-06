<template>
  <div>
    <section id="login">
      <mt-field
        label="姓名"
        placeholder="请输入姓名"
        v-model="username"
      ></mt-field>
      <mt-field
        label="手机号"
        :state="phoneNumState"
        placeholder="请输入手机号"
        type="tel"
        v-model="phone"
      ></mt-field>
      <mt-field
        label="验证码"
        placeholder="请输入验证码"
        type="number"
        v-model="verCode"
      >
        <mt-button type='primary'>获取验证码</mt-button>

      </mt-field>

      <mt-field
        label="畅玩卡卡号"
        placeholder="请输入畅玩卡卡号"
        type="number"
        v-model="cardNum"
        :state='cardNumState'
      ></mt-field>
      <mt-field
        label="激活码"
        placeholder="请输入畅玩卡激活码"
        type="number"
        v-model="activeNum"
      ></mt-field>

      <mt-button
        size="large"
        type='primary'
        @click="submit"
      >激活账号</mt-button>
    </section>

  </div>

</template>

<script>
export default {
  name: "login",
  data() {
    return {

      phone: '',
      verCode: '',
      cardNum: '',
      activeNum: "",
      phoneNumState: '',
      cardNumState: '',
    }
  },
  watch: {
    phone(newVal, oldVal) {
      if (this.tools(newVal)) {
        this.phoneNumState = 'success'
      } else {
        this.phoneNumState = 'error'
      }
      if (newVal == '') { // 如果输入为空，取消状态显示
        this.phoneNumState = ''
      }
    },

    cardNum(newVal, oldVal) {
      if (newVal.length === 12) {
        this.cardNumState = 'success'
      } else {
        this.cardNumState = 'error'
      }
      if (newVal == '') { // 如果输入为空，取消状态显示
        this.cardNumState = ''
      }
    }
  },
  methods: {
    submit() {
      if (this.phoneNumState != 'success') {

        Toast('请确保手机号是正确的')

        return

      }

      if (this.cardNumState != 'success') {

        Toast('请确保验证码的正确性')

        return

      }


      // 提交数据

      this.$axios({
        method: 'post',
        url: 'api',
        data: this.qs.stringify({    //这里是发送给后台的数据
          userId: this.userId,
          token: this.token,
        })
      }).then((response) => {          //这里使用了ES6的语法
        Toast('注册成功')

        this.phoneNum = ''

        this.cardNumState = ''

        this.phoneNumState = ''
        this.cardNum = ''


        console.log(response)       //请求成功返回的数据
      }).catch((error) => {

        Toast('注册失败')
        console.log(error)       //请求失败返回的数据
      })


    },
    tools(val) {
      let phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|166|198|199|(147))+\d{8})$/;
      return phoneReg.test(val)
    }

  }
}
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  /* background: url("../assets/images/1.jpg") no-repeat center center; */
  background-size: cover;
  position: relative;
}
</style>
