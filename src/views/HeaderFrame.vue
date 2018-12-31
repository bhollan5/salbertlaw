<template>
  <div id="header-frame">
    <div id="logo">
      <img src="@/assets/albert_logo.svg">
    </div>
    <div id="menu-options">
    
    </div>
    <div id="banner-image-container">
      <img id="banner-image" src="@/assets/banner_images/columns.jpg">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/GlobalVars.scss";

#header-frame {
  position: absolute;
  display: grid;
  grid-template-rows: 100px 30px 300px 1fr;
  grid-template-columns: 10% 80% 10%;
  grid-template-areas: 
    "margin-top margin-top margin-top"
    "menu-options menu-options menu-options"
    "banner-image banner-image banner-image"
    "margin-left content margin-right";
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
}
#menu-options {
  background: $light-gray;
  box-shadow: $inset-box-shading;
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  width: 90%;
  padding: 0% 10%;
  height: 30px;
  margin-left: -5%;
}

#logo {
  grid-column: 2/3;
  grid-row: 1/4;
  width: 300px;
  height: 140px;
  margin-left: 50px;
  background: white;
  z-index: 100;
  padding: 25px;
  box-shadow: $box-shading;
}
#banner-image-container {
  background: $dark-gray;
  grid-area: banner-image;
  box-shadow: $heavy-inset-box-shading;
  overflow-y: hidden;
}
#banner-image {
  margin: 0% 10%;
  width: 80%;
}
</style>