// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import './assets/js/fontawesome.all'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/index.css'
import 'startbootstrap-clean-blog/dist/css/styles.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.mixins({
    data () {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
