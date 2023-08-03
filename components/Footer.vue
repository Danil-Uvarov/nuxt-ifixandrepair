<template>
  <footer class="footer__wrapper">
    <section class="footer__container">
      <div class="primary__footer ">
        <div class="primary__block-logo">
          <a href="https://ifixandrepair.com/"><img src="/images/logo 1.png" alt=""></a>
          <p class="primary-slogan">Broken? Not Anymore.</p>
        </div>
        <nav class="primary__navigation">
          <ul class="navigation__list">
            <li class="navigation__link"><a href="https://ifixandrepair.com/locations">Locations</a></li>
            <li class="navigation__link"><a href="https://ifixandrepair.com/about">About</a></li>
            <li class="navigation__link"><a href="https://ifixandrepair.com/contact/">Contact us</a></li>
          </ul>
          <ul class="navigation__social-list">
            <li class="navigation__social-link"><a href="https://facebook.com/ifixandrepair" class="social-block"><img
                  src="/images/footerFacebook.png" alt="">
                <p>Facebook</p>
              </a>
            </li>
            <li class="navigation__social-link"><a href="https://instagram.com/ifixandrepairofficial"
                class="social-block"><img src="/images/footerInstagramm.png" alt="">
                <p>Instagram</p>
              </a>
            </li>
            <li class="navigation__social-link">
              <a href="https://www.google.com/maps/search/iFixandRepair/" class="social-block"><img
                  src="/images/footerGoogle.png" alt="">
                <p>Google</p>
              </a>
            </li>
          </ul>
        </nav>
        <div class="email"><span>Email:</span><a href="mailto:info@ifixandrepair.com">info@ifixandrepair.com</a></div>
      </div>
      <h6 class="footer__secondary">
        Copyright 2023 iFixandRepair by <strong>iFixandRepair </strong>| All Rights Reserved
      </h6>
    </section>
  </footer>
</template>
<script setup lang ="ts"></script>
<style>
.footer__wrapper {
  margin-top: 140px;
  display: flex;
  justify-content: center;
}

.footer-container {
  display: flex;
  flex-direction: column;

}

.primary__footer {
  display: flex;
  gap: 53px;
}

.primary__block-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.primary-slogan {
  margin: 0px;
  margin-top: 57px;
  font-weight: 500px;
  font-size: 22px;
  color: #737375;
}

.primary__navigation {
  margin: 0px;
  padding: 0px;
  display: flex;
  gap: 24px;
}



.navigation__list {
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.navigation__link {
  list-style: none;

}

.navigation__link a {
  text-decoration: none;
  font-weight: 400;
  font-size: 22px;
  color: #737375;
}

.navigation__social-list {
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  gap: 24px;
}

.navigation__social-link {
  list-style: none;
}

.social-block {
  text-decoration: none;
  display: flex;
  margin: 0px;
  padding: 0px;
  align-items: center;
  gap: 8px;
}

.navigation__social-link img {
  width: 26px;
  height: 26px;
  object-fit: contain;
}

.navigation__social-link p {
  margin: 0px;
  font-weight: 400;
  font-size: 22px;
  color: #737375;
}

.email {}

.email span {
  font-weight: 400;
  font-size: 22px;
  color: #737375;
}

.email a {
  margin-left: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 22px;
  color: #737375;
}

.footer__secondary {
  margin-top: 160px;
  font-weight: 500;
  font-size: 20px;
  color: #737375;
}

.footer__secondary strong {
  margin: 0px;
  padding: 0px;
  margin-bottom: 128px;
  font-weight: 600;
  font-size: 20px;
  color: #737375;
}

@media(max-width: 1200px) {
  .footer__wrapper {
    margin-top: 40px;
    padding: 20px;
    display: flex;
    justify-content: center;
  }

  .primary-slogan {
    margin-top: 27px;
    font-weight: 500px;
    font-size: 22px;
    color: #737375;
  }

  .footer__secondary {
    text-align: center;
    margin-top: 60px;
    font-weight: 500;
    font-size: 20px;
    color: #737375;
  }

  .primary__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .primary__block-logo {
    display: flex;

    flex-direction: column;
    align-items: center;
  }
}
</style>
