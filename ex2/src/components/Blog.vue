<template>
  <div class="articles">
    <h1>My Blog</h1>
    <hr />
    <h2>a</h2>
    <section v-if="post" class="articles-list">
      <article>
        <img :src="url" alt="post" class="thumbnail" />
        <div class="article-text">
          <h4>{{ name }}</h4>
          <p>{{ post.addr }}</p>
          <!-- <h5>{{ content }}</h5> -->
          <p v-html="content"></p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { createClient } from "contentful";

const client = createClient({
  space: "m1jw0s8o8vms",
  accessToken: "mTXinMxxvzNv4dBNUaOtlWcLnNHhRMz3VuQYRsqBbDk",
});

export default {
  data() {
    return {
      post: {},
    };
  },
  computed: {
    url() {
      return this.post.pic.fields.file.url;
    },
    name() {
      return this.post.name;
    },
    content() {
      // return this.post.intro.content[0].content[0].value;
      let txt = "";
      for (let x in this.post.intro.content) {
        txt += this.post.intro.content[x].content[0].value + "<br>";
      }
      return txt;
    },
  },
  async created() {
    this.post = await this.blogtest();
  },
  methods: {
    async blogtest() {
      return await client
        .getEntry("vl4qZF6arnpe3GUaviVvO")
        .then(function (entry) {
          console.log(entry);
          return entry.fields;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
</style>
