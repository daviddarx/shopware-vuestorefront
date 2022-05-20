<template>
  <div class="cms-element-blog">
    <strong>ELEMENT: NETZP BLOG 6</strong>

    <h4>Kategorien:</h4>
    <select>
      <option
        v-for="cat in content.data.result.aggregations.categories.entities"
        :key="cat._uniqueIdentifier"
      >
        {{ cat.translated.title }}
      </option>
    </select>

    <div>
      <div
        v-for="(el) in content.data.result.elements"
        :key="el.id"
        class="cms-element-blog__card"
      >
        <h2>{{el.translated.title}}</h2>
        <p>{{el.postdate}}</p>
        <p>{{el.category.translated.title}}</p>
        <p v-html="el.translated.teaser"></p>
        <nuxt-link
          :to="'/news/'+el.translated.slug"
        >
          Read more...
        </nuxt-link>
        <!-- <pre>{{el}}</pre> -->
      </div>
    </div>

    <pre>{{ content }}</pre>
  </div>
</template>

<script>
import CmsGenericElement from "sw-cms/CmsGenericElement";

export default {
  name: "CmsElementBlog6",
  components: {
    CmsGenericElement,
  },
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
  },
  mounted () {
    console.log("mounted", "element blog 6");
    console.log("all routes", this.$router.options.routes);
  },
};
</script>

<style lang="scss" scoped>
  .cms-element-blog {
    background-color: rgba(0, 0, 0, 0.1);

    &__card {
      border: 1px solid black;
      padding: 1rem;

      a {
        background-color: green;
        padding: 1em;
      }
    }
  }
</style>
