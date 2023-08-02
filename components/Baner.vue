<template>
  <section class="baner">
    <a href="https://ifixandrepair.com/repair-services/?store=yes" class="baner-serch">
      <h2 class="baner__button">Help My Device</h2>
    </a>
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
  background-image: url("/images/baner.png");
}

.baner-serch {
  width: 100%;
  max-width: 474px;
  text-decoration: none;
}

.baner__button {

  padding: 37px 0px;
  background-color:
    #1BD3E0;
  border-radius: 27px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #fff;
}

@media(max-width:650px) {
  .baner {
    padding-top: 57px;
    padding-bottom: 57px;
  }
}
</style>