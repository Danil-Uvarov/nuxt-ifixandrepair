<template>
  <Head>
    <title>{{ title }}</title>
    <Meta name="description" :content="content" />
  </Head>

  <div class="page-wrapper">
    <TheHeader></TheHeader>
    <Baner></Baner>
    <Contacts></Contacts>
    <Shop></Shop>
    <Devices></Devices>
    <Steps></Steps>
    <Footer></Footer>
  </div>
</template>
<script lang="ts" setup>
import TheHeader from '~/components/TheHeader.vue';
import Baner from '~/components/Baner.vue'
import Contacts from '~/components/Contacts.vue';
import Shop from '~/components/Shop.vue';
import Devices from '~/components/Devices.vue';
import Steps from '~/components/Steps.vue';
import Footer from '~/components/Footer.vue'

import { ref } from 'vue';
const content = "Find Repair Services for iPhone, Google, Samsung, Motorola, Macs, Laptops, and even Blackberries. We Repair All Kind of Electronics."
const title = ref('Device Repairs - iFixandRepair')
</script>
<style></style>
