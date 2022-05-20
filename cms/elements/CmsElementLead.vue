<template>
  <div class="cms-element-lead">
    <strong>ELEMENT: LEAD</strong>

    <!-- <pre>{{ content }}</pre> -->

    <h1 v-text="content.translated.config.title.value"></h1>

    <p v-html="content.translated.config.body.value"></p>
  </div>
</template>

<script>
import CmsGenericElement from "sw-cms/CmsGenericElement";

export default {
  name: "CmsElementLead",
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
    console.log("mounted", "element lead");
  },
};
</script>

<style lang="scss" scoped>
  .cms-element-lead {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>
