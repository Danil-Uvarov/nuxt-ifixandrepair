<template>
  <section class="devices">
    <h2 class="devices-template">
      Choose your <strong>devices</strong>
    </h2>
    <nav class="devices__items-block">
      <ul class="devices__items-list">
        <li class="device__item">
          <div class="divice__item-block">
            <img src="/images/smartphone 1.png" alt="" class="device-img">
            <h5 class="device-name">iphone</h5>
          </div>
        </li>
        <li class="device__item">
          <div class="divice__item-block">
            <img src="/images/smartphone2 1.png" alt="" class="device-img">
            <h5 class="device-name">Samsung</h5>
          </div>
        </li>
        <li class="device__item">
          <div class="divice__item-block">
            <img src="/images/other-smartphones 1.png" alt="" class="device-img">
            <h5 class="device-name">Smartphone</h5>
          </div>
        </li>
        <li class="device__item">
          <div class="divice__item-block">
            <img src="/images/tablet 1.png" alt="" class="device-img">
            <h5 class="device-name">Tablet</h5>
          </div>
        </li>
        <li class="device__item">
          <div class="divice__item-block">
            <img src="/images/macbook 1.png" alt="" class="device-img">
            <h5 class="device-name">Computer</h5>
          </div>
        </li>
        <li class="device__item">
          <div class="divice__item-block">
            <img src="/images/game-console 1.png" alt="" class="device-img">
            <h5 class="device-name">Gaming console</h5>
          </div>
        </li>
        <li class="device__item">
          <div class="divice__item-block">
            <img src="/images/drone 1.png" alt="" class="device-img">
            <h5 class="device-name">D J I Drone</h5>
          </div>
        </li>
        <li class="device__item">
          <div class="divice__item-block">
            <img src="/images/smartwatch 1.png" alt="" class="device-img">
            <h5 class="device-name">Other</h5>
          </div>
        </li>
      </ul>
    </nav>
  </section>
</template>
<script setup lang ="ts"></script>
<style>
.devices {
  margin-top: 120px;
  margin-bottom: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.devices-template {
  align-items: center;
  margin: 0px;
  display: block;
  font-weight: 400;
  font-size: 48px;
  position: relative;
}

.devices-template::after {

  content: "";
  margin-left: 15px;
  width: 29px;
  height: 3px;
  position: absolute;
  bottom: -20px;
  background: #dfa530;
  left: 50%;

}

.devices-template:before {
  margin-left: -15px;
  content: "";
  background: #d3d3d3;
  width: 30px;
  left: 50%;
  height: 3px;
  position: absolute;
  bottom: -20px;
}

.devices-template strong {
  font-weight: 500;
  font-size: 48px;
}

.devices__items-block {
  margin-top: 56px;
  max-width: 1467px;
}

.devices__items-list {
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

}



.device__item {
  box-shadow: 5px 10px 10px 5px #F7F7F7;
  border-radius: 9px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 326px;
  width: 100%;
}

.divice__item-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0px;
}

.device-img {
  width: 170px;
  height: 170px;
  object-fit: contain;
}

.device-name {
  max-width: 326px;
  margin: 0px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  display: flex;
  justify-content: center;
}

@media (max-width: 1120px) {
  .devices {
    padding: 20px;
    margin-top: 60px;
    margin-bottom: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>