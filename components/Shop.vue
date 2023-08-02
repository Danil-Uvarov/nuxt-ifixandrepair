<template>
  <section class="shop">
    <img src="../public/images/store_front 1.png" alt="" class="shop-img">
    <section class="shop__title">
      <h3 class="title-main">Our iFixandRepair center located in Fort Lauderdale, Florida is your best option.
      </h3>
      <article class="chop-description">We Can help with Anything.
        We care for you and that includes having the best and more reliable technicians to perform your helps, and between
        you and us, they are pretty good at it.
        If you have experienced a bad time with your device bring it to us, our technicians will help that part that is
        giving you problems. Even if it is a more uncommon problem that requires board help, we have experts for that too.
      </article>
    </section>
  </section>
</template>
<script setup lang ="ts"></script>
<style>
.shop {
  background-color: rgb(121, 210, 227);
  padding: 180px 0px;
  display: flex;
  justify-content: space-around;
}

.shop-img {
  object-fit: contain;
  max-width: 792px;
  max-height: 488px;
}



.shop__title {
  max-width: 720px;
}

.title-main {
  font-weight: 700;
  font-size: 48px;
  color: #ffff;
}

.chop-description {
  margin-top: 38px;
  font-size: 24px;
  font-weight: 500;
  color: #ffff;
}

@media (max-width: 1120px) {
  .shop {
    background-color: rgb(121, 210, 227);
    padding: 80px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 720px) {
  .title-main {
    font-weight: 700;
    font-size: 28px;
    color: #ffff;
  }

  .shop-img {
    object-fit: contain;
    max-width: 582px;
    max-height: 278px;
  }

  .chop-description {
    margin-top: 38px;
    font-size: 24px;
    font-weight: 500;
    color: #ffff;
  }
}
</style>