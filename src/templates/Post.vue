<template>
  <layout>
    <!-- Page Header-->
    <header
      class="masthead"
      :style="{
        'background-image': `url('${GRIDSOME_API_URL}${$page.post.attributes
          .cover.data && $page.post.attributes.cover.data.attributes.url}')`
      }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{ $page.post.id }}</h1>
              <!-- <h2 class="subheading">
                Problems look mighty small from 150 miles up
              </h2> -->
              <span class="meta">
                Posted by
                <a href="#!">{{
                  $page.post.attributes.createdBy.data
                    ? `${$page.post.attributes.createdBy.data.attributes.firstname} ${$page.post.attributes.createdBy.data.attributes.lastname}`
                    : 'System API'
                }}</a>
                on {{ $page.post.attributes.createdAt }}
              </span>

              <span
                v-for="tag in $page.post.attributes.tags.data"
                :key="'tags-' + tag.id"
              >
                <g-link class="tag-button-link" :to="'/tag/' + tag.id">{{
                  tag.attributes.title
                }}</g-link>
                &nbsp;&nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div
            class="col-md-10 col-lg-8 col-xl-7"
            v-html="mdToHtml($page.post.attributes.content)"
          ></div>
        </div>
      </div>
    </article>
  </layout>
</template>

<script>
import { mdToHtml } from '../utils/markdown'

export default {
  name: 'PostPage',
  metaInfo: {
    title: 'Post Page'
  },
  methods: {
    mdToHtml: mdContent => mdToHtml(mdContent)
  }
}
</script>

<style>
.tag-button-link {
  background-color: skyblue;
  padding: 2px 10px;
  border-radius: 6px;
}
</style>
<page-query>
query ($id: ID!) {
  post: strapiPost(id: $id) {
    id
    attributes{
      title
      is_publish
      cover{
        data {
          id
          attributes {
            url
          }
        }
      }
      createdAt
      createdBy{
        data{
          attributes{
            firstname
            lastname
          }
        }
      }
      content
      tags{
        data{
          id
          attributes{
            title
          } 
        }
      }
    }
  }
}
</page-query>
