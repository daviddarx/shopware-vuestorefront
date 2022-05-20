<template>
  <div class="cms-block-blog">
    <strong>BLOCK: NETZP BLOG 6</strong>

    <!-- <pre>{{ getSlots }}</pre> -->

    <CmsGenericElement
      v-if="getSlots[0]"
      :content="getSlots[0]"
      class="cms-block-blog__element"
    />
  </div>
</template>

<script>
import CmsGenericElement from "sw-cms/CmsGenericElement";

export default {
  name: "CmsBlockBlog6",
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
    getSlots() {
      return this.content.slots || [];
    }
  },
  mounted () {
    console.log("mounted", "block blog 6");
  },
};
</script>

<style lang="scss" scoped>
  .cms-block-blog {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>
