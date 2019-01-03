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

    <div id="expertise-footer">
      <div class="area-of-expertise">
        <h3>Business Litigation</h3>
        <h4>SOLVING BUSINESS DISPUTES</h4>
        <p>For 40 years, Mr. Albert has successfully represented public companies and privately held corporations in a variety of business disputes.</p>
      </div>
      <div class="area-of-expertise">
        <h3>Employment Litigation</h3>
        <h4>EMPLOYEE AND EMPLOYER REPRESENTATION</h4>
        <p>Mr. Albert has extensive experience in creating policies and representing employers and employees.</p>
      </div>
      <div class="area-of-expertise">
        <h3>Product Liability Litigation</h3>
        <h4>REPRESENTING COMPANIES AND INDIVIDUALS</h4>
        <p>Mr. Albert has successfully represented private and public corporations as well as individuals in product liability litigation.</p>
      </div>
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

$margin-size: 20%;
$content-size: 60%;
$mobile-margin-size: 5%;
$mobile-content-size: 90%;

#header-frame {
  position: absolute;
  display: grid;
  grid-template-rows: 80px 30px 300px 1fr 200px 70px;
  grid-template-columns: $margin-size $content-size $margin-size;
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
  width: $content-size;
  margin-left: $margin-size;
  overflow: hidden;
  @media screen and (max-width: $md-bp) {
    width: $mobile-content-size;
    margin-left: $mobile-margin-size;
  }
}
#banner-image {
  height: 100%;
}

#content {
  grid-area: content;
  padding: 10px;
  display: flex;
  padding-bottom: 100px;
}

#expertise-footer {
  background: $light-gray;
  grid-area: expertise;
  text-align: left;
  padding: 0px $margin-size;
  width: $content-size;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: $md-bp) {
    width: $mobile-content-size;
    margin-left: $mobile-margin-size;
  }
}
.area-of-expertise {
  border-top: 8px solid $red;
  padding: 20px;
  width: calc(30% - 40px);
  h3 {
    color: $red;
    margin: 0px;
  }
  h4 {
    margin-top: 0px;
    font-size: 12px;
  }
  p {
    font-size: 12px;
  }
}
</style>