<template>
  <section class="contacts">
    <div class="contacts__description-wrapper">
      <h2 class="contacts-title">Get in touch with <span>The Galleria at Ford Lauderdare</span> store</h2>
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
          <div class="contact-number">954-734-6202 </div>
          <div class="contact-email">Galleria@ifixandrepair.com</div>
        </div>
        <div class="contacts__time-working-block">
          <div class="time__working-title-block">
            <img src="/images/clock-with-white-face_icon-icons.com_72804 1.png" alt="" class="time__working-img">
            <div class="time__working-title">Open Hours</div>
          </div>
          <nav class="contacts__time-working">
            <ul class="contact__time-list">
              <li class="contact__time-link">Monday</li>
              <li class="contact__time-link">11:00 AM - 7:00 PM</li>
            </ul>
            <ul class="contact__time-list">
              <li class="contact__time-link">Tuesday</li>
              <li class="contact__time-link">11:00 AM - 7:00 PM</li>
            </ul>
            <ul class="contact__time-list">
              <li class="contact__time-link">Wednesday</li>
              <li class="contact__time-link">11:00 AM - 7:00 PM</li>
            </ul>
            <ul class="contact__time-list">
              <li class="contact__time-link">Thursday</li>
              <li class="contact__time-link">11:00 AM - 7:00 PM</li>
            </ul>
            <ul class="contact__time-list">
              <li class="contact__time-link">Friday</li>
              <li class="contact__time-link">1:00 AM - 8:00 PM</li>
            </ul>
            <ul class="contact__time-list">
              <li class="contact__time-link">Saturday</li>
              <li class="contact__time-link">11:00 PM - 8:00 PM</li>
            </ul>
            <ul class="contact__time-list">
              <li class="contact__time-link">Sunday</li>
              <li class="contact__time-link">12:00 PM - 6:00 PM</li>
            </ul>

          </nav>
        </div>
      </div>

    </div>
    <iframe class="google-navigation"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.836919705086!2d-80.11544822580353!3d26.136859777118104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d901cf478d556f%3A0x15cccb01ecbb6015!2z0JPQsNC70LvQtdGA0LjRjyDRjdGCINCk0L7RgNGCLdCb0L7QtNC10YDQtNC10LnQuw!5e0!3m2!1sru!2sru!4v1690925424653!5m2!1sru!2sru"
      width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>
</template>

<script setup lang ="ts"></script>
<style>
.google-navigation {
  padding-right: 20px;
  width: 725px;
  height: 439px;
}

.contacts {
  display: flex;
  margin: 0 auto;
  margin-top: 95px;
  max-width: 1474px;
  margin-bottom: 79px;
}

.contacts__description-wrapper {}

.contacts-title {
  position: relative;
  text-align: center;
  font-weight: 400;
  font-size: 48px;
}

.contacts-title span {
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
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}

.contacts__description {
  max-width: 320px;
}

.contact-location {
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
  font-weight: 400;
  font-size: 20px;
  margin-top: 12px;
}

.contact-email {
  font-weight: 300;
  font-size: 20px;
  margin-top: 8px;
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
  margin-right: 57px;
  padding: 0px;
  display: flex;
  flex-direction: column;
}

.contact__time-list {
  margin: 0px;
  margin-top: 4px;
  padding: 0px;
  list-style: none;
  gap: 43px;
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

  }

  .google-navigation {

    margin: 0 auto;
    width: 400px;
    height: 200px;
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

}
</style>
