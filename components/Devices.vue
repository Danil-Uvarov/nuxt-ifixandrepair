<template>
  <section class="devices">
    <h2 class="devices-template">
      Shiise your <strong>devices</strong>
    </h2>

    <nav class="devices__items-block">
      <ul class="devices__items-list">
        <a href="https://ifixandrepair.com/iphone-repairs">
          <li class="device__item">
            <img src="../public/images/smartphone 1.png" alt="" class="device-img">
            <h5 class="device-name">Iphone</h5>
          </li>
        </a>
        <a href="https://ifixandrepair.com/samsung-repairs">
          <li class="device__item">
            <img src="../public/images/smartphone2 1.png" alt="" class="device-img">
            <h5 class="device-name">Samsung</h5>
          </li>
        </a>
        <a href="https://ifixandrepair.com/smartphone-repairs">
          <li class="device__item">
            <img src="../public/images/other-smartphones 1.png" alt="" class="device-img">
            <h5 class="device-name">Smartphone</h5>
          </li>
        </a><a href="https://ifixandrepair.com/tablet-repairs">
          <li class="device__item">
            <img src="../public/images/tablet 1.png" alt="" class="device-img">
            <h5 class="device-name">Tablet</h5>
          </li>
        </a>
        <a href="https://ifixandrepair.com/computer-repairs">
          <li class="device__item">
            <img src="../public/images/macbook 1.png" alt="" class="device-img">
            <h5 class="device-name">Computer</h5>
          </li>
        </a>
        <a href="https://ifixandrepair.com/game-console-repairs">
          <li class="device__item">
            <img src="../public/images/game-console 1.png" alt="" class="device-img">
            <h5 class="device-name">Gaming console</h5>
          </li>
        </a>
        <a href="https://ifixandrepair.com/drone-repairs">
          <li class="device__item">
            <img src="../public/images/drone 1.png" alt="" class="device-img">
            <h5 class="device-name">D J I Drone</h5>
          </li>
        </a>
        <a href="https://ifixandrepair.com/other-repairs">
          <li class="device__item">
            <img src="../public/images/smartwatch 1.png" alt="" class="device-img">
            <h5 class="device-name">Other</h5>
          </li>
        </a>
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
  gap: 37px;
}



.device__item {
  box-shadow: 5px 10px 10px 5px #d3d3d3;
  border-radius: 9px;
  list-style: none;
  align-items: center;
  padding: 15px 78px 26px 78px;
}

.devices__items-list a {
  text-decoration: none;
}

.device-img {}

.device-name {
  margin: 0px;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  display: flex;
  justify-content: center;
}

@media (max-width: 1120px) {
  .devices {
    margin-top: 60px;
    margin-bottom: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>