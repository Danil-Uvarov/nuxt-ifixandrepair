<template>
  <section class="steps__wrapper">
    <h2 class="container__title">How to start <strong>your help?</strong></h2>
    <ul class="steps__container">
      <li class="step__list">
        <div class="step__block-img">
          <div class="step__img-wrapper">
            <img src="/images/step-navigation.png" alt="" class="step__link-img">
          </div>
          <div class="step-number">01</div>
        </div>
        <div class="step__link-name">
          Location Search
        </div>
        <div class="step__link-description">Write your Zip Code and find the nearest store of your location.
        </div>
      </li>
      <li class="step__list">
        <div class="step__block-img">
          <div class="step__img-wrapper">
            <img src="/images/step-phone.png" alt="" class="step__link-img">
          </div>
          <div class="step-number">02</div>
        </div>
        <div class="step__link-name">
          Device Selection
        </div>
        <div class="step__link-description">Select the device that you want
        </div>
      </li>
      <li class="step__list">
        <div class="step__block-img">
          <div class="step__img-wrapper">
            <img src="/images/step-selection.png" alt="" class="step__link-img">
          </div>
          <div class="step-number">03</div>
        </div>
        <div class="step__link-name">
          Selection
        </div>
        <div class="step__link-description">Choose your phones needs.
        </div>
      </li>
      <li class="step__list">
        <div class="step__block-img">
          <div class="step__img-wrapper">
            <img src="/images/step-contact.png" alt="" class="step__link-img">
          </div>
          <div class="step-number">04</div>
        </div>
        <div class="step__link-name">
          Contact Info
        </div>
        <div class="step__link-description">In order to contact you, it’s
          important to have your info.
        </div>
      </li>
    </ul>
    <h6 class="step__descripion-text">After that, one of our expert technicians will contact you to schedule an
      appointment
      for your help. You won’t have to worry about it again.
    </h6>
    <div class="block__images">
      <img src="/images/steps-shop.png" alt="">
      <img src="/images/steps-reception.png" alt="">
      <img src="/images/steps-racks.png" alt="">
      <img src="/images/steps-working.png" alt="">
    </div>
  </section>
</template>
<script setup lang ="ts">

</script>
<style>
.steps__wrapper {
  padding-top: 65px;
  padding-bottom: 140px;
  background-color: #F5F5FF;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.container__title {
  padding: 0px;
  margin: 0px;
  font-weight: 400;
  font-size: 48px;
  position: relative;
  text-align: center;
}

.container__title strong {
  font-weight: 500;
  font-size: 48px;
}

.container__title::after {
  content: "";
  margin-left: 15px;
  width: 29px;
  height: 3px;
  position: absolute;
  bottom: -20px;
  background: #dfa530;
  left: 50%;
}

.container__title::before {
  margin-left: -15px;
  content: "";
  background: #d3d3d3;
  width: 30px;
  left: 50%;
  height: 3px;
  position: absolute;
  bottom: -20px;
}

.steps__container {
  flex-wrap: wrap;
  margin-top: 148px;
  display: flex;
  justify-content: center;
  gap: 38px;
}

.step__list {
  width: calc(100% / 4 - 3 * 38px / 4);
  max-width: 336px;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.step-number {
  z-index: 3;
  top: 0px;
  right: 0px;
  position: absolute;
  font-weight: 700;
  font-size: 24px;
  border-radius: 50%;
  padding: 15px;
  background-color: #fff;
}

.step__block-img {
  list-style: none;
  position: relative;

}

.step__img-wrapper {
  border-radius: 50%;
  padding: 40px;
  background-color: #ffff;
}

.step__link-img {
  width: 100%;
  max-width: 99px;

}

.step__link-name {
  text-align: center;
  margin-top: 20px;
  list-style: none;
  font-weight: 400;
  font-size: 32px;
  color: #000;
}

.step__link-description {
  text-align: center;
  margin-top: 20px;
  list-style: none;
  font-weight: 400;
  font-size: 20px;
  color: #737375;
  text-align: center
}

.step__descripion-text {
  margin: 0px;
  padding: 0px 20px;
  margin-top: 114px;
  text-align: center;
  margin-bottom: 67px;
  font-weight: 400;
  font-size: 18px;
  color: #737375;
}

.block__images {
  display: flex;
  justify-content: center;
  gap: 11px;
}

.block__images img {
  width: calc(100% / 4 - 3 * 11px / 4);
  height: auto;
  max-width: 443px;

}



@media(max-width: 700px) {
  .steps__wrapper {
    padding-top: 35px;
    padding-bottom: 60px;
    background-color: #F5F5FF;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .steps__container {
    flex-wrap: wrap;
    margin-top: 68px;
    display: flex;
    justify-content: center;
    gap: 38px;
  }

  .step__list {
    width: calc(100%/2 - 1 * 38px / 2);
  }

  .step__img-wrapper {
    border-radius: 50%;
    padding: 30px;
    background-color: #ffff;
  }

  .step__link-img {
    width: 50px;
  }

  .step-number {
    z-index: 3;
    top: 0px;
    right: 0px;
    position: absolute;
    font-weight: 700;
    font-size: 20px;
    border-radius: 50%;
    padding: 10px;
    background-color: #fff;
  }

  .step__link-name {
    text-align: center;
    margin-top: 20px;
    list-style: none;
    font-weight: 400;
    font-size: 28px;
    color: #000;
  }

  .step__link-description {
    text-align: center;
    margin-top: 20px;
    list-style: none;
    font-weight: 400;
    font-size: 18px;
    color: #737375;
    text-align: center
  }

  .block__images {
    flex-wrap: wrap;
    gap: 2px;

  }

  .block__images img {
    width: calc(100%/2 - 1 * 2px /2);

  }

}
</style>