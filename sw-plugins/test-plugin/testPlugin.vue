<template>
  <div class="test-plugin">
    <h3>I am a test-plugin</h3>
  </div>
</template>
<script>
export default {
  name: "TestPlugin",
  data() {
    return {};
  },
  mounted () {
    console.log("test plugin mounted");
  },
};
</script>
<style lang="scss" scoped>
.test-plugin {
  display: flex;
  justify-content: center;
  border: 1px solid green;
}
</style>
