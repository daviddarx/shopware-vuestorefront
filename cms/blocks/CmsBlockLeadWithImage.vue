<template>
  <div class="cms-block-lead-with-image">
    <strong>BLOCK: LEAD WITH IMAGE</strong>

    <!-- <pre>{{ getSlots }}</pre> -->

    <CmsGenericElement
      v-if="getSlots[1]"
      :content="getSlots[1]"
      class="cms-block-lead-with-image__image"
    />

    <CmsGenericElement
      v-if="getSlots[0]"
      :content="getSlots[0]"
      class="cms-block-lead-with-image__bottom"
    />
  </div>
</template>

<script>
import CmsGenericElement from "sw-cms/CmsGenericElement";

export default {
  name: "CmsBlockLeadWithImage",
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
    console.log("mounted", "block lead image");
  },
};
</script>

<style lang="scss" scoped>
  .cms-block-lead-with-image {
    background-color: rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: auto;
    }
  }
</style>
