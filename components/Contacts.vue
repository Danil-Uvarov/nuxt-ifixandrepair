<template>
  <section class="contacts">
    <div class="contacts__description-wrapper">
      <h2 class="contacts-title">Get in touch with <strong>The Galleria at Ford Lauderdare</strong> store</h2>
      <div class="contacts__description-block">
        <div class="contacts__description">
          <p class="contact-location"><span>The Galleria at Fort Lauderdale</span>
            2318 E Sunrise Blvd, Ste 2222A
            Fort Lauderdale Florida 33304
            United States</p>
          <div class="contact__phone">
            <img src="/images/icon-phone-call.png" alt="" class="contact__phone-img">
            <p>Contact Details</p>
          </div>
          <div class="contact-number"><a href="tel:+79547346202">954-734-6202</a> </div>
          <div class="contact-email"><a href="mailto:Galleria@ifixandrepair.com">Galleria@ifixandrepair.com</a></div>
        </div>
        <div class="contacts__time-working-block">
          <div class="time__working-title-block">
            <img src="/images/icon-clock.png" alt="" class="time__working-img">
            <h3 class="time__working-title">Open Hours</h3>
          </div>
          <ul class="contacts__time-working">
            <li class="contact__time-list">
              <span class="contact__time-link">Monday</span>
              <span class="contact__time-link">11:00 AM - 7:00 PM</span>
            </li>
            <li class="contact__time-list">
              <span class="contact__time-link">Tuesday</span>
              <span class="contact__time-link">11:00 AM - 7:00 PM</span>
            </li>
            <li class="contact__time-list">
              <span class="contact__time-link">Wednesday</span>
              <span class="contact__time-link">11:00 AM - 7:00 PM</span>
            </li>
            <li class="contact__time-list">
              <span class="contact__time-link">Thursday</span>
              <span class="contact__time-link">11:00 AM - 7:00 PM</span>
            </li>
            <li class="contact__time-list">
              <span class="contact__time-link">Friday</span>
              <span class="contact__time-link">11:00 AM - 8:00 PM</span>
            </li>
            <li class="contact__time-list">
              <span class="contact__time-link">Saturday</span>
              <span class="contact__time-link">11:00 PM - 8:00 PM</span>
            </li>
            <li class="contact__time-list">
              <span class="contact__time-link">Sunday</span>
              <span class="contact__time-link">12:00 PM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <iframe class="google-navigation"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.836919705086!2d-80.11544822580353!3d26.136859777118104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d901cf478d556f%3A0x15cccb01ecbb6015!2z0JPQsNC70LvQtdGA0LjRjyDRjdGCINCk0L7RgNGCLdCb0L7QtNC10YDQtNC10LnQuw!5e0!3m2!1sru!2sru!4v1690925424653!5m2!1sru!2sru"
      width="725" height="439" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  </section>
</template>

<script setup lang ="ts"></script>
<style>
.google-navigation {
  max-width: 725px;
  width: 50%;
  margin: 0px;
}

.contacts {
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: center;
  padding: 95px 20px 79px 20px;

}

.contacts__description-wrapper {
  width: 100%;
  padding: 0 20px;
  width: 50%;
  max-width: 720px;
}

.contacts-title {
  width: 100%;
  margin: 0px;
  padding: 0px;
  position: relative;
  font-weight: 400;
  font-size: 48px;
}

.contacts-title strong {
  font-weight: 600;
  font-size: 48px;
}

.contacts-title::before {
  content: "";
  background: #dddddd;
  width: 30px;
  left: 0px;
  height: 3px;
  position: absolute;
  bottom: -20px;
}

.contacts-title::after {
  content: "";
  background: #dddddd;
  width: 29px;
  height: 3px;
  position: absolute;
  bottom: -20px;
  background: #dfa530;
  left: 30px;
}


.contacts__description-block {
  margin-top: 30px;
  display: flex;
  gap: 36px;
}

.contacts__description {
  max-width: 320px;
}

.contact-location {
  margin: 0px;
  padding: 0px;
  font-weight: 300;
  font-size: 20px;
  color: #000;
}

.contact-location span {
  font-weight: 500;
  font-size: 20px;
  color: #000;
}

.contact__phone {
  display: flex;
  gap: 8px;
  margin-top: 24px;
}



.contact__phone p {
  margin: 0px;
  padding: 0px;
  font-weight: 500;
  font-size: 24px;
  color: #000;
}

.contact-number {
  margin-top: 12px;
}

.contact-number a {
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  color: #000;
}

.contact-email {
  width: 100%;
  margin-top: 8px;
}

.contact-email a {
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
  color: #000
}

.contact__phone-img {
  width: 100%;
  max-width: 37px;
}


.contacts__time-working-block {
  display: flex;
  flex-direction: column;
}

.time__working-title-block {
  display: flex;
  align-items: center;
}

.time__working-title {
  padding: 0px;
  margin: 0px;
  display: flex;
  margin-left: 20px;
  font-weight: 500;
  font-size: 25px;
  color: #000;
}

.time__working-img {
  width: 100%;
  max-width: 36px;
}

.contacts__time-working {
  margin: 0px;
  margin-top: 18px;
  padding: 0px;
  display: flex;
  flex-direction: column;
}

.contact__time-list {
  margin: 0px;
  padding: 0px;
  list-style: none;
  gap: 40px;
  display: flex;
  justify-content: space-between;
}

.contact__time-link {
  white-space: nowrap;
  font-weight: 300;
  font-size: 20px;
}

@media () {
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto 20px;
    max-width: 1474px;

  }

  .google-navigation {

    margin-top: 20px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }


  .contacts__description {}
}

@media (720) {
  .contacts {
    padding: 0px 20px 20px 20px;
  }

  .contacts__description-block {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;

  }

  .google-navigation {
    width: 100%;
    height: 150px;
  }

  .contacts-title {
    text-align: center;
  }

  .contacts-title::before {
    content: "";
    background: #dddddd;
    width: 30px;
    left: 50%;
    height: 3px;
    position: absolute;
    bottom: -20px;
    margin-left: -15px;
  }

  .contacts-title::after {
    content: "";
    background: #dddddd;
    width: 30px;
    left: 50%;
    height: 3px;
    position: absolute;
    bottom: -20px;
    background: #dfa530;
    margin-left: 15px;
  }

  .contacts__time-working-block {
    align-items: center;
  }

  .contact__time-list {
    margin: 0px;
    padding: 0px;
    list-style: none;
    gap: 10px;
    display: flex;

  }

  .contact__time-link {
    font-weight: 300;
    font-size: 18px;
  }

  .contacts__description {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

}
</style>
