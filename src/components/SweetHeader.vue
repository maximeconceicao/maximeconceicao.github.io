<template>
  <header class="header">
    <div class="about">
      <div class="about__avatar">
        <img src="../assets/me.png" alt="" class="about__avatar-me" />
      </div>
      <div class="about__text">
        <h1 class="flap">Hey I'm Max</h1>
        <h2 class="flap">And I'm a Web Dev</h2>

        <div class="about__buttons">
          <a href="https://github.com/maximeconceicao"
            ><i class="bi-github"></i
          ></a>
          <a href="https://www.instagram.com/maximeconceicao/">
            <i class="bi-instagram"></i
          ></a>
          <a href="https://fr.linkedin.com/in/maxime-conceicao-6b8505197"
            ><i class="bi-linkedin"
          /></a>
          <router-link :to="{ name: 'game' }"
            ><span class="material-icons" style="font-size: 29px">
              sports_esports
            </span></router-link
          >
          <div></div>
          <a href="https://open.spotify.com/user/maxime.conceicao"
            ><i class="bi-spotify"
          /></a>
          <a href="mailto: maxime.conceicao@gmail.com"
            ><i class="bi-envelope-fill"
          /></a>
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "SweetHeader",

  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
};
</script>
