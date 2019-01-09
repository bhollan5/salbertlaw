<template>
<div class="flex-content main-content">

  <div class="left-side-content">
    <div class="red-quote">
      {{pageData.red_text[0].text}}
    </div>
    <div class="red-subtitle">
      <prismic-rich-text :field="pageData.main_text"/>
    </div>
  </div>

  <div class="right-side-content">
    <div class="map raised-container drop-shadow">
      <h3>National Experience</h3>
      <img src="@/assets/maps/trials.png">
    </div>

    <div class="map-subtitle drop-shadow flex-content">
      <img src="@/assets/maps/juried-trials-marker.gif">
      <div>
        <p class="b">140 JURY TRIALS</p>
        <p>» 125 trials in Ohio</p>
        <p>» 15 others across the U.S.</p>
      </div>
      <img src="@/assets/maps/appellate-marker.gif">
      <div>
        <p class="b">20 APPELLATE COURT APPEARANCES</p>
        <p>» 18 appearances in Ohio</p>
        <p>» 1 in Texas</p>
        <p>» 1 in Georgia</p>
      </div>
    </div>
  </div>

</div>

</template>

<script>
var Prismic = require('prismic-javascript');

 
export default {
  data() {
    return {
    }
  },
  props: {
    pageData: {
      type: Object
    }
  },

  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/ContentStyling.scss';


</style>