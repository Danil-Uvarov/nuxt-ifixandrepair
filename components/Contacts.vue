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
            <img src="/images/phone-call-auricular-symbol-in-black_icon-icons.com_56483 1.png" alt=""
              class="contact__phone-img">
            <p>Contact Details</p>
          </div>
          <div class="contact-number"><a href="tel:+79547346202">954-734-6202</a> </div>
          <div class="contact-email"><a href="mailto:Galleria@ifixandrepair.com">Galleria@ifixandrepair.com</a></div>
        </div>
        <div class="contacts__time-working-block">
          <div class="time__working-title-block">
            <img src="/images/clock-with-white-face_icon-icons.com_72804 1.png" alt="" class="time__working-img">
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
.google-navigation {}

.contacts {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 95px;
  margin-bottom: 79px;
}

.contacts__description-wrapper {
  max-width: 730px;
  padding: 0px 10px;
}

.contacts-title {
  margin: 0px;
  padding: 0px;
  position: relative;

  font-weight: 400;
  font-size: 48px;
}

.contacts-title strong {
  font-weight: 600px;
  font-size: 48px;
}

.contacts-title::before {
  content: "";
  background: #dddddd;
  width: 30px;
  left: 20px;
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
  left: 50px;
}


.contacts__description-block {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding-left: 20px;
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
  margin-top: 8px;
}

.contact-email a {
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
  color: #000
}

.contact__phone-img {}

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

.time__working-img {}

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
  font-weight: 300;
  font-size: 20px;
}

@media (max-width: 1120px) {
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 10px;
    max-width: 1474px;

  }

  .google-navigation {
    padding: 0px 20px;
    margin-top: 20px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }


  .contacts__description {}
}

@media (max-width: 720px) {
  .contacts {
    padding: 0px 20px;
  }

  .contacts__description-block {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 20px;

  }

  .google-navigation {
    margin: 0 auto;
    width: 300px;
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

  .contact__time-list {
    margin: 0px;
    padding: 0px;
    list-style: none;
    gap: 10px;
    display: flex;
    justify-content: space-between;
  }

  .contact__time-link {
    font-weight: 300;
    font-size: 18px;
  }


}
</style>
