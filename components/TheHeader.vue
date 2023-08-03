<template>
  <header class="header">
    <section class="header-container">
      <h1 class="header__logo">
        <a href="https://ifixandrepair.com/"><img class="header__logo-img" src="/images/logo 1.png" alt=""></a>
      </h1>
      <nav class="header__communication communication">
        <ul class="communication__list">
          <li class="communication__geolocation"><a href="https://ifixandrepair.com/locations"><img
                src="/images/Google_Maps_icon_(2020) 1.png" alt="" class="geolocation-img"></a></li>
          <li class="communication__facebook"><a href="https://facebook.com/ifixandrepair">
              <img src="/images/Facebook_f_logo_(2021) 1.png" alt="" class="facebook-img">
            </a></li>
          <li class="communication__instagram"><a href="https://instagram.com/ifixandrepairofficial"><img
                src="/images//Instagram_logo_2016 1.png" alt="" class="instagram-img"></a></li>
          <li class="communication__phone"><a href="https://ifixandrepair.com/contact"><img src="/images/Phone.png" alt=""
                class="phone-img"></a></li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<style>
.header {}

.header-container {
  margin: 70px 0px 55px 0px;
  display: flex;
  justify-content: space-around;
}

.header__logo {
  margin: 0px;
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
</style>