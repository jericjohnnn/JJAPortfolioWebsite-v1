<template>
  <div>
    <HeroBanner id="hero" @selectedSection="scrollToSection" />
    <AboutMe class="hidden lg:block" />
    <GetToKnowMe id="about" />
    <MySkills />
    <MyWorks id="works" />
    <ContactMe id="contact" />
    <FooterSection @selectedSection="scrollToSection" />
  </div>
</template>
<script setup>
import HeroBanner from '@/components/HeroBanner.vue'
import AboutMe from '@/components/AboutMe.vue'
import GetToKnowMe from '@/components/GetToKnowMe.vue'
import MySkills from '@/components/MySkills.vue'
import MyWorks from '@/components/MyWorks.vue'
import ContactMe from '@/components/ContactMe.vue'
import FooterSection from '@/components/FooterSection.vue'

const scrollToSection = (section) => {
  const componentSection = document.getElementById(section)
  componentSection.scrollIntoView({ behavior: 'smooth' })
}
</script>
