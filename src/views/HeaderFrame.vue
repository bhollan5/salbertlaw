<template>
  <div id="header-frame">

    <div id="logo">
      <img src="@/assets/albert_logo.svg">
    </div>

    <div id="menu-options">
    
    </div>

    <div id="image-banner">
      <div id="banner-image-container">
        <img id="banner-image" src="@/assets/banner_images/columns.png">
      </div>
      <h1></h1>
    </div>

    <div id="content">
      <router-view></router-view>
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
  grid-template-rows: 100px 30px 300px 1fr 300px 100px;
  grid-template-columns: 20% 60% 20%;
  grid-template-areas: 
    "margin-top   margin-top    margin-top"
    "menu-options menu-options  menu-options"
    "banner-image banner-image  banner-image"
    "margin-left  content       margin-right"
    "expertise    expertise     expertise"
    "footer       footer        footer";
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  @media screen and (max-width: $md-bp) {
    grid-template-columns: 5% 90% 5%;
  }
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
  @media screen and (max-width: $md-bp) { 
    width: 225px;
    height: 90px;
    margin-left: 20px;
  }
}
#image-banner {
  background: $dark-gray;
  grid-area: banner-image;
  box-shadow: $heavy-inset-box-shading;
  overflow-y: hidden;
  position: relative;

  h1 {
    position: absolute;
    bottom: -15px;
    font-size: 40px;
    font-weight: bolder;
    left: 25%;
    margin: 0px;
    color: white;
  }
}
#banner-image-container {
  height: 100%;
  width: 60%;
  margin-left: 20%;
  overflow: hidden;
  @media screen and (max-width: $md-bp) {
    width: 90%;
    margin-left: 5%;
  }
}
#banner-image {
  height: 100%;
}

#content {
  grid-area: content;
  padding: 10px;
  display: flex;
}
</style>