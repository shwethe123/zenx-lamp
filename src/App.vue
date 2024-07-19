<template>

  <header>
      <a href="#" class="logo"><i class='bx bxl-facebook-circle'></i>icon</a>

      <ul :class="['navlist', { open: isMenu }]">
          <router-link to="/">Home</router-link> 
          <router-link to="/Product">Products</router-link>
          <router-link to="/about">About</router-link>
          <!-- <router-link to="/Detail">Detail</router-link> -->
          <!-- <li><a href="#">SmartPhone</a></li> -->
          <!-- <router-link to="/Store">Store</router-link> -->
          <li><a href="#">Contact Us</a></li> 
      </ul>

      <div class="h-main">
          <a href="#" class="h-btn">Buy Now</a>
          <div class="bx bx-menu" id="menu-icon" @click="toggleMenu"></div>
          <div :class="darkModeIcon" id="darkmode" @click="toggleDarkMode"></div>
      </div>
  </header>
<nav>
  <!-- <router-link to="/"></router-link>  -->
  <!-- <router-link to="/about"></router-link> --> 
</nav>
<router-view/>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import ScrollReveal from 'scrollreveal';

export default {
  setup() {
      const isDarkmode = ref(false);
      const isMenu = ref(false);

      const toggleMenu = () => {
          isMenu.value = !isMenu.value;
      };

      const toggleDarkMode = () => {
          isDarkmode.value = !isDarkmode.value;

          if (isDarkmode.value) {
              document.body.classList.add('color');
          } else {
              document.body.classList.remove('color');
          }
      };

      const darkModeIcon = computed(() => (isDarkmode.value ? 'bx bx-sun' : 'bx bx-moon'));

      onMounted(() => {
          window.onscroll = () => {
              const menubar = document.querySelector('#menu-icon');
              const navlist = document.querySelector('.navlist');
              if (menubar && navlist) {
                  menubar.classList.remove('bx-x');
                  navlist.classList.remove('open');
              }
          };
      });

      return { toggleDarkMode, isMenu, toggleMenu, darkModeIcon };
  }
}
</script>

<!-- <style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
</style> -->
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-decoration: none;
}

:root {
  --text-color: #000000;
  --bg-color: #e5e5e5;
  /* --main-color: #f29494; */
  --main-color: #fc8282;
  --second-color: #fff;
  --other-color: #868686;
  --big-font: 5.5rem;
  --p-font: 1rem;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}

header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 27px 9%;
  transition: all ease 0.55s;
}

.logo {
  display: flex;
  align-items: center;
  color: var(--text-color);
  font-size: 40px;
  font-weight: bold;
}

.logo i {
  vertical-align: middle;
  color: var(--main-color);
  font-size: 35px;
  margin-right: 5px;
}

.navlist {
  display: flex;
  list-style: none;
}

.navlist a {
  font-size: var(--p-font);
  color: var(--text-color);
  font-weight: 600;
  margin: 0 35px;
  transition: all ease 0.55s;
}

.navlist a:hover {
  color: var(--main-color);
}

.navlist a:active {
  color: var(--main-color);
}

.navlist .router-link-active {
  color: var(--main-color);
}

.navlist .router-link-exact-active {
  color: var(--main-color);
}

.h-main {
  display: flex;
  align-items: center;
}

.h-btn {
  display: inline-flex;
  padding: 10px 25px;
  color: var(--bg-color);
  background: var(--main-color);
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  margin-right: 20px;
  transition: all ease 0.55s;
}

.h-btn:hover {
  background: transparent;
  border: 2px solid var(--text-color);
  color: var(--text-color);
}

#menu-icon {
  font-size: 40px;
  color: var(--text-color);
  z-index: 10001;
  cursor: pointer;
  margin: 15px;
  display: none;
}

#darkmode {
  font-size: 30px;
  cursor: pointer;
  color: var(--text-color);
  margin-left: 10px;
}

@media (max-width: 1600px) {
  header {
      padding: 13px 3%;
  }
}

@media (max-width: 1070px) {
  header {
      padding: 10px 3%;
      background: var(--second-color);
  }

  #menu-icon {
      display: initial;
  }

  .navlist {
      position: absolute;
      top: -700px;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      background: #000;
      transition: all ease 0.55s;
      text-align: left;
  }

  .navlist a {
      display: block;
      font-size: 23px;
      font-weight: 400;
      margin: 0.8rem 1.8rem;
      color: var(--second-color);
  }

  .navlist.open {
      top: 100%;
  }
}

@media (max-width: 600px) {
  .h-btn {
      padding: 6px 14px;
      margin-right: 8px;
  }

  .logo {
      font-size: 32px;
  }

  #menu-icon {
      margin-right: 5px;
  }
}

</style>