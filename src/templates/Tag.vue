<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1># {{ $page.tag.attributes.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <template v-for="post in $page.tag.attributes.posts.data">
            <div class="post-preview" :key="'posts-' + post.id">
              <g-link :to="'/post/' + post.id">
                <h2 class="post-title">
                  {{
                    post.attributes.title || post.attributes.content.slice(0, 8)
                  }}
                </h2>
                <h3
                  class="post-subtitle"
                  v-html="mdInline(post.attributes.content)"
                ></h3>
              </g-link>
              <!-- <p class="post-meta">
                Posted by
                <a href="#!">{{
                  post.attributes.createdBy.data
                    ? `${post.attributes.createdBy.data.attributes.firstname} ${post.attributes.createdBy.data.attributes.lastname}`
                    : 'System API'
                }}</a>
                on {{ post.attributes.createdAt }}
              </p> -->
              <!-- <span
                v-for="tag in post.attributes.tags.data"
                :key="'tags-' + tag.id"
              >
                <g-link :to="'/tag/' + tag.id">{{
                  tag.attributes.title
                }}</g-link>
                &nbsp;&nbsp;
              </span> -->
            </div>
            <hr class="my-4" :key="post.id" />
          </template>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import md from '@/utils/markdown'
export default {
  name: 'TagPage',
  metaInfo: {
    title: 'Tag Page'
  },
  methods: {
    mdInline: mdContent => md.renderInline(mdContent)
  }
}
</script>

<style>
.pagination a {
  background: #d0e9e3;
  min-width: 24px;
  height: auto;
  text-align: center;
  margin: 0 5px;
}
.pagination a.active {
  background: #0085a1;
}
</style>
<page-query>
query($id: ID! = 1){
  tag:strapiTag(id: $id) {
    id
    attributes{
      title
      posts{
        data{
          id
          attributes{
            title
            content
            createdAt
          }
        }
      }
    }
  }
}
</page-query>
