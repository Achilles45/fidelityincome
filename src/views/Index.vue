<template>
  <div class="home">
    <Topbar />
    <Navbar />
    <Herosection />
    <Intro />
    <Process />
    <Pricing />
    <Hero />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Herosection from '@/components/Herosection.vue'
import Intro from '@/components/Intro.vue'
import Process from '@/components/Process.vue'
import Pricing from '@/components/Pricing.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  components:{
    Topbar,
    Navbar,
    Herosection,
    Intro,
    Process,
    Pricing,
    Hero,
    Footer
  }
}
</script>
