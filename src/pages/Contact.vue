<template>
  <layout>
    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('/img/contact-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>Contact Me</h1>
              <span class="subheading">Have questions? I have answers.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <p>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <div class="my-5">
              <!-- * * * * * * * * * * * * * * *-->
              <!-- * * SB Forms Contact Form * *-->
              <!-- * * * * * * * * * * * * * * *-->
              <!-- This form is pre-integrated with SB Forms.-->
              <!-- To make this form functional, sign up at-->
              <!-- https://startbootstrap.com/solution/contact-forms-->
              <!-- to get an API token!-->
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    v-model="contactForm.name"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label for="name">Name</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                    :style="{ display: validateState.name ? 'block' : '' }"
                  >
                    {{ validateState.name }}
                  </div>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    v-model="contactForm.email"
                    placeholder="Enter your email..."
                    data-sb-validations="required,email"
                  />
                  <label for="email">Email address</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="email:required"
                    :style="{ display: validateState.email ? 'block' : '' }"
                  >
                    {{ validateState.email }}
                  </div>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="phone"
                    type="tel"
                    v-model="contactForm.phone"
                    placeholder="Enter your phone number..."
                    data-sb-validations="required"
                  />
                  <label for="phone">Phone Number</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="phone:required"
                    :style="{ display: validateState.phone ? 'block' : '' }"
                  >
                    {{ validateState.phone }}
                  </div>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    id="message"
                    v-model="contactForm.message"
                    placeholder="Enter your message here..."
                    style="height: 10rem"
                    data-sb-validations="required"
                  ></textarea>
                  <label for="message">Message</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="message:required"
                    :style="{ display: validateState.message ? 'block' : '' }"
                  >
                    {{ validateState.message }}
                  </div>
                </div>
                <br />
                <!-- Submit success message-->
                <!---->
                <!-- This is what your users will see when the form-->
                <!-- has successfully submitted-->
                <div
                  :class="{ 'd-none': submitMessage.type !== 'success' }"
                  id="submitSuccessMessage"
                >
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="http://baidu.com/">http://baidu.com/</a>
                  </div>
                </div>
                <!-- Submit error message-->
                <!---->
                <!-- This is what your users will see when there is-->
                <!-- an error submitting the form-->
                <div
                  :class="{ 'd-none': submitMessage.type !== 'error' }"
                  id="submitErrorMessage"
                >
                  <div
                    class="text-center text-danger mb-3"
                    v-if="submitMessage.type === 'error'"
                  >
                    {{ submitMessage.message || 'Error sending message!' }}
                  </div>
                </div>
                <!-- Submit Button-->
                <button
                  class="btn btn-primary text-uppercase"
                  :disabled="isRequesting"
                  id="submitButton"
                  type="submit"
                  @click.prevent="onSubmit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </layout>
</template>

<script>
import axios from 'axios'

const defaultMessage = {
  type: '',
  message: ''
}
export default {
  name: 'ContactPage',
  metaInfo: {
    title: 'Contact Page'
  },
  data () {
    return {
      contactForm: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: 'name field is required'
          }
        ],
        email: [
          {
            validate: val => {
              return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
                val
              )
            },
            message: 'email is invalid'
          }
        ],
        phone: [
          {
            required: true,
            message: 'name field is required'
          },
          {
            validate: val => {
              return /^1[3-9]\d{9}$/.test(val)
            },
            message: 'phone is invalid'
          }
        ],
        message: [
          {
            required: true,
            message: 'message field is required'
          }
        ]
      },
      validateState: {},
      isRequesting: false,
      submitMessage: defaultMessage
    }
  },
  methods: {
    onSubmit () {
      let self = this
      self.restValidateState()
      self.validateForm(self.contactForm).then(valid => {
        if (!valid) return
        self.isRequesting = true
        axios({
          method: 'POST',
          url: `${GRIDSOME_API_URL}/api/contacts`,
          data: { data: self.contactForm },
          transformResponse: [
            function (res) {
              const data = JSON.parse(res)
              if (data.error) {
                self.submitMessage = {
                  type: 'error',
                  message: data.error && data.error.message
                }
              }
              // 对 data 进行任意转换处理
              return res
            }
          ]
        })
          .then(res => {
            if (res.data) {
              window.alert(
                '留言成功！我们将尽快与您取得联系。感谢您对小站的支持！'
              )
              self.submitMessage = {
                type: 'success',
                message:
                  '留言成功！我们将尽快与您取得联系。感谢您对小站的支持！'
              }
              setTimeout(() => {
                self.restValidateState()
                self.restDefaultSubmitMessage()
              }, 3500)
              self.resetForm()
            }
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => {
            self.isRequesting = false
          })
      })
    },
    resetForm () {
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    },
    validateForm (form) {
      let valid = true
      for (const key in this.rules) {
        const rule = this.rules[key]
        rule.forEach(item => {
          if (item.required && (form[key] === '' || !form[key])) {
            this.validateState[key] = item.message
            valid = false
          }
          if (item.validate && !item.validate(form[key])) {
            this.validateState[key] = item.message
            valid = false
          }
        })
      }

      return Promise.resolve(valid)
    },
    restValidateState () {
      this.validateState = {}
    },
    restDefaultSubmitMessage () {
      this.submitMessage = defaultMessage
    }
  }
}
</script>

<style></style>
