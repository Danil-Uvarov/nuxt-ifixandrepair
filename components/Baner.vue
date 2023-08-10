<template>
  <section class="baner">
    <a target="_blank" :href="googleMaps" class="baner-link">
      <h2 class="baner__button-text">Help My Device</h2>
    </a>
  </section>
</template>
<script setup lang ="ts">
import { googleMaps } from '../consts';
</script>
<style>
.baner {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0px;
  padding: 97px 20px;
  background-image: url("/images/baner.png");

}

.baner-link {
  width: 100%;
  max-width: 474px;
  text-decoration: none;
}

.baner__button-text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 48px;
  padding: 37px 0px;
  background-color:
    #1BD3E0;
  border-radius: 27px;


}

@media(max-width:650px) {
  .baner {
    padding-top: 57px;
    padding-bottom: 57px;
  }

  .baner__button-text {
    font-size: 32px;
  }
}
</style>