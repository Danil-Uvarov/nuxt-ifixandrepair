<template>
  <header class="header">
    <section class="header-container">
      <h1 class="header__logo">
        <a href="https://ifixandrepair.com/">
          <img class="header__logo-img" src="/images/logo.png" alt="">
        </a>
      </h1>
      <nav class="header__communication communication">
        <ul class="communication__list">
          <li class="communication__geolocation">
            <a :href="googleMaps" target="_blank">
              <img src="/images/icon-google-maps.png" alt="" class="geolocation-img"></a>
          </li>
          <li class="communication__facebook">
            <a href="https://facebook.com/ifixandrepair" target="_blank">
              <img src="/images/icon-facebook.png" alt="" class="facebook-img">
            </a>
          </li>
          <li class="communication__instagram">
            <a href="https://instagram.com/ifixandrepairofficial" target="_blank">
              <img src="/images/icon-instagram.png" alt="" class="instagram-img">
            </a>
          </li>
          <li class="communication__phone">
            <a :href="googleMaps" target="_blank">
              <img src="/images/icon-phone.png" alt="" class="phone-img">
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>
<script setup lang="ts">
import { googleMaps } from '../consts';
</script>

<style>
.header {}

.header-container {
  margin: 70px 0 55px 0;
  display: flex;
  justify-content: space-around;
}

.header__logo {
  margin: 0;
  display: flex;
  align-items: center;
}

.header__communication {
  display: flex;
  justify-content: center;
}

.header__logo-img {
  max-width: initial;

}

.communication {
  max-width: 350px;
  width: 100%;
}

.communication__list {
  margin: 0px;
  padding: 0px;
  gap: 50px;
  display: flex;
  justify-content: space-around;
  list-style: none;
}

.communication__geolocation {}

.geolocation-img {}

.communication__facebook {}

.facebook-img {}

.communication__instagram {}

.instagram-img {}

.communication__phone {}

.phone-img {}


@media (max-width: 1100px) {
  .communication__list {
    gap: 40px;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }


  .header__logo-img {
    max-width: initial;
    max-height: 50px;
  }
}

@media (max-width: 800px) {
  .header-container {
    margin: 30px 0px 15px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header__communication {
    margin-top: 30px;
  }
}
</style>../consts