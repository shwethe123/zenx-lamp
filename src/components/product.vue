<template>
    <div>
      <main>
        <div v-if="error">{{ error }}</div>
        <div v-else class="product_box">
          <!-- <h2 class="section-heading">Product Menu</h2> -->
          <div class="menu--list">
            <div class="menu--item" v-for="post in posts" :key="post.id">
              <router-link :to="{name:'Detail',params:{id:post.id}}">
              <img :src="post.images" :alt="post.mm_name" />
                <div class="tex_box">
                  <h5>{{ post.code_name }}</h5>
                  <h5>{{ post.mm_name }}</h5>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import getPost from '../composables/getPost';
  
  export default {
    setup() {
      const { posts, error, load } = getPost();
      // console.log(posts);
  
      onMounted(() => {
        load();
      });
  
      return { posts, error };
    },
  };
  </script>
  
  <style>
  :root {
    --text-color: #000000;
    --bg-color: #e5e5e5;
    /* --main-color: #f29494; */
    --main-color: #f29494;
    --second-color: #fff;
    --other-color: #868686;
    --p-font: 1rem;
  }
  
  body {
    background: var(--bg-color);
    color: var(--text-color);
  }
  
  .section-heading {
    margin: 50px;
  }
  main {
    padding-top: 10%;
    text-align: center;
  }
  
  
  .menu--list {
    display: flex;
    flex-wrap: wrap;
    gap: 26px;
    justify-content: center;
    padding: 1rem;
  }
  
  .menu--item {
    width: 254px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    padding: 10px 13px;
    border-radius: 10px;
    color: var(--text-color);
    transition: transform 0.3s ease;
    background: var(--second-color);
  }
  
  .tex_box {
    margin: 20px 0 10px 0;
  }
  .menu--item img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .menu--item h5 {
    margin-top: 10px;
    font-size: 1rem;
    color: var(--main-color);
  }
  
  .menu--item:hover {
    transform: translateY(-5px) scale(1.05);
  }
  
  /* Responsive styles */
  @media (max-width: 1600px) {
    .section-heading {
      font-size: 1.8rem;
    }
  }
  
  @media (max-width: 1230px) {
    .menu--list {
      padding: 6px;
    }
  
    .section-heading {
      font-size: 1.6rem;
    }
  
    .menu--item h5 {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 1070px) {
    .section-heading {
      font-size: 1.4rem;
    }
  
    .menu--list {
      padding-top: 40px;
    }
  
    .menu--item {
      width: 200px;
      padding: 7px 9px;
    }
  
    .menu--item h5 {
      font-size: 0.8rem;
    }
  }
  
  
  @media (max-width: 600px) {
    .menu--item {
      width: calc(100% - 20px);
    }
    .product_box {
    margin-top: 30px;
    }
    .menu--item h5 {
      font-size: 0.8rem;
    }
  }
  
  /* @media (max-width: 600px) {
    .section-heading {
      font-size: 1.2rem;
    }
  
    .menu--item {
      width: 100px;
      padding: 6px 8px;
    }
  
    .menu--item h5 {
      font-size: 0.7rem;
    }
  } */
  </style>
  