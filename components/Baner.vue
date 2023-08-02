<template>
  <section class="baner">
    <h2 class="baner-content"><Button class="baner-button">Help My Device</Button></h2>
  </section>
</template>
<script setup lang ="ts"></script>
<style>
.baner {
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0px;
  padding-top: 97px;
  padding-bottom: 97px;

  background-image: url(https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/banner/repairs_banner.jpg);
}

.baner-content {
  margin: 0px;
  width: 100%;
  max-width: 474px;
  padding: 37px 0px;
  background-color:
    #1BD3E0;
  border-radius: 27px;
  align-items: center;
  display: flex;
  justify-content: center;

}

.baner-button {
  background-color:
    #1BD3E0;
  color: #fff;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  border: #1BD3E0;
}
</style>