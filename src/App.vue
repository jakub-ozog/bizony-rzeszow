<script setup>
import NavbarMain from './components/NavbarMain.vue'
import Footer from './components/FooterMain.vue'
import { RouterView } from 'vue-router'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'


const cookieClickedAccept = () => {
  console.log('Zaakceptowano cookies')
  localStorage.setItem('cookie:accepted', 'true')
}

const cookieClickedDecline = () => {
  console.log('Odrzucono cookies')
  localStorage.setItem('cookie:accepted', 'false')
}

const cookieClickedPostpone = () => {
  console.log('Odsunięto decyzję')
}

const cookieRemovedCookie = () => {
  console.log('Cookie usunięte')
}

const cookieStatus = (status) => {
  console.log('Status ciasteczek:', status)
}
</script>

<template>
  <div>
    <NavbarMain />
    <main>
      <router-view />

      <vue-cookie-accept-decline :debug="false" :disableDecline="false" :showPostponeButton="false"
        @clicked-accept="cookieClickedAccept" @clicked-decline="cookieClickedDecline"
        @clicked-postpone="cookieClickedPostpone" @removed-cookie="cookieRemovedCookie" @status="cookieStatus"
        elementId="myPanel1" position="bottom-left" ref="myPanel1" transitionName="slideFromBottom" type="floating">
        <template #postponeContent>&times;</template>

        <template #message>
          Ta strona używa plików cookie, aby zapewnić najlepsze doświadczenie 🍪
        </template>

        <template #declineContent>Odrzuć</template>
        <template #acceptContent>OK!</template>
      </vue-cookie-accept-decline>

      <ScrollTop />
    </main>
    <Footer />
  </div>
</template>
