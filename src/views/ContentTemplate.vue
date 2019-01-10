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
    <div class="map raised-container drop-shadow" v-if="map">
      <h3 v-if="map.map_title[0]">{{map.map_title[0].text}}</h3>
      <img :src="map.map_image.url">
    </div>

    <div class="map-subtitle drop-shadow " v-if="map">
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

    <div class="contact-marker raised-container" v-else-if="contactInfo">
      <p class="b">Contact Us</p>
      <p class="address-line">{{contactInfo.address_line_1[0].text}}</p>
      <p class="address-line">{{contactInfo.address_line_2[0].text}}</p>
      <p class="address-line">{{contactInfo.address_line_3[0].text}}</p>
      <br>
      <p class="additional-contact">TEL: {{contactInfo.phone[0].text}}</p>
      <p class="additional-contact">
        Email: <a :href="'mailto: ' + contactInfo.email[0].text">{{contactInfo.email[0].text}}</a>
      </p>
      <br>
    </div>
    
    <div class="areas-of-expertise-links" v-if="!map">
      <p class="b">Areas of Expertise:</p>
      <hr style="margin-top: 0px;margin-bottom:20px;">
      <router-link tag="div" to="/business-litigation">
        Business Litigation →
      </router-link>
      <router-link tag="div" to="/employment-litigation">
        Employment Litigation →
      </router-link> 
      <router-link tag="div" to="/product-liability-litigation">
        Product Liability Litigation →
      </router-link>
      <br>
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
    },
    mapContent: {
      type: Object
    },
    contactInfo: {
      type: Object
    }
  },
  computed: {
    map() {
      
      if (this.mapContent && this.mapContent.primary)
        return this.mapContent.primary;
      else 
        return null
    }
  },

  mounted() {
    
  }
}
</script>

<style lang="scss">
@import '@/ContentStyling.scss';


</style>