<template>
  <div>
    <section id="login">
      <mt-header title="激活账号" />
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
        <mt-button
          type='primary'
          @click="getSms"
          :disabled='isVerCode'
        ><span v-if='isVerCode'> {{ count }}s后重新获取 </span> <span v-else>获取验证码</span></mt-button>

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

    </section>
    <section class="footer_btn">
      <mt-button
        size="normal"
        type='primary'
        @click="submit"
      >激活账号</mt-button>

    </section>
  </div>

</template>

<script>
import { MessageBox } from 'mint-ui';
import { test } from '../api/index'
import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/json'
export default {
  name: "login",
  data() {
    return {
      isVerCode: false,
      count: '',
      username: '',
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
    getSms() {
      if (this.phoneNumState !== 'success') {
        this.$messagebox.alert('请输入正确的手机号')
      } else {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          }
        }
        const data = JSON.stringify({  //这里是发送给后台的数据
          msgCode: 'SMS_152283583',
          receiveMobile: this.phone
        })


        // axios
        //   .post('http://192.168.1.56:8981/sms/sendMessage', data, config)
        //   .then(function (res) {
        //     console.log('获取验证码成功', res)
        //   })
        // test(data).then(res => {
        //   if (res.errorCode === 9000) {
        //     console.log('res--->', res)
        //   } else {
        //     this.$message.error(res.errorMessage)
        //   }
        // })
        this.$axios({
          method: 'post',
          url: 'http://192.168.1.56:8981/sms/sendMessage',
          data: data
        }).then((response) => {
          this.$messagebox.alert('验证码', '获取验证码成功')
          const TIME_COUNT = 60
          if (!this.timer) {
            this.count = TIME_COUNT
            this.isVerCode = true
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--
              } else {
                this.isVerCode = false
                clearInterval(this.timer)
                this.timer = null
              }
            }, 1000)
          }
          console.log(response)       //请求成功返回的数据
        }).catch((error) => {

          this.$messagebox.alert('提示', '请求失败')
          console.log(error)       //请求失败返回的数据
        })
      }
    },
    submit() {
      if (this.phoneNumState != 'success') {
        this.$messagebox.alert('提示', '请确保手机号是正确的')
        return
      }
      if (this.cardNumState != 'success') {
        this.$messagebox.alert('提示', '请确保验证码的正确性')
        return
      }
      // 提交数据
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      this.$axios({
        config,
        method: 'post',
        url: 'http://192.168.1.56:8981/spread/manage/makecard/activate',

        data: JSON.stringify({    //这里是发送给后台的数据
          name: this.username,
          mobile: this.phone,
          cardNumber: this.cardNum,
          activationCode: this.activeNum
        })
      }).then((response) => {          //这里使用了ES6的语法

        this.$messagebox.alert('提示', '注册成功')
        this.phoneNum = ''
        this.cardNumState = ''
        this.phoneNumState = ''
        this.cardNum = ''


        console.log(response)       //请求成功返回的数据
      }).catch((error) => {

        this.$messagebox.alert('提示', '请求失败')
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

.footer_btn {
  text-align: center;
}

.footer_btn .mint-button {
  width: 200px;
}
</style>
