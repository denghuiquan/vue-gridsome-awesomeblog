// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '乐享百知',
  siteDescription: '一个专注于学习收集分享新技术新思想的博客',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md'
      },
      remark: {
        // remark options
      }
    },
    // {
    //   use: '@gridsome/source-graphql',
    //   options: {
    //     url: 'http://localhost:1337/graphql',
    //     fieldName: 'Strapi',
    //     typeName: 'CleanBlog',
    //     headers: {
    //       Authorization: `Bearer ${process.env.AUTH_TOKEN}`
    //     }
    //   }
    // },
    {
      use: 'gridsome-source-strapi-v4',
      options: {
        apiURL: `${process.env.GRIDSOME_API_URL}/api`,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'],
        // typeName: 'Strapi',
        singleTypes: ['general'],
        // Locales are required to load single-type content with multiple locales into a single collection
        locales: ['zh-Hans', 'en', 'ru-RU'], //Default ['en']
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  templates: {
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],

    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
