<template>
  <header>
    <div class="logo" />
    <img src="/images/tim.jpg" class="tim" />
  </header>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin-bottom: 25px;
  box-shadow: 1px 1px 2px;
  .logo {
    height: 100%;
    width: 250px;
    background-repeat: no-repeat;
    background-position: -20px;
    background-size: 250px 200px;
    background-image: url("/images/tool_time.jpg");
  }
}
</style>
