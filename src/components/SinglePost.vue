<template>
    <div>
      <div class="detail-container">
        <div v-if="post" class="detail-content">
          <div class="detail-image-container">
            <img class="detail-image" :src="post.images" :alt="post.mm_name" />
          </div>
          <div class="detail-info">
            <p class="detail-code-name">{{ post.code_name }}</p>
            <p class="detail-mm-name">{{ post.mm_name }}</p>
            <h4 class="detail-size"><i class='bx bxs-edit-alt'></i>{{ post.product_size }}</h4>
            <p class="detail-description"><i class='bx bxs-edit-alt'></i>{{ post.product_detail }}</p>
            <p class="detail-example"><i class='bx bxs-edit-alt'></i>{{ post.example_text }}</p>
          </div>
        </div>
      </div>
      <div class="contact-info">
        <p>မိတ်ဆွေကြိုက်နှစ်သက်ပါက အောက်ပါ Phone/Viber နံပါတ်ဖြင့် မှာယူနိူင်ပါသည်။</p>
        <h3>Phone - 09457002063</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: false
      }
    }
  };
  </script>
  
  <style scoped>
  :root {
    --text-color: #333;
    --bg-color: #f9f9f9;
    --main-color: #ff6f61;
    --secondary-color: #fff;
    --font-family: 'Helvetica Neue', Arial, sans-serif;
  }
  
  body {
    font-family: var(--font-family);
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .detail-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .detail-content {
    display: flex;
    flex-direction: column;
    background: var(--secondary-color);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    max-width: 800px;
    width: 100%;
  }
  
  .detail-image-container {
    width: 100%;
    overflow: hidden;
  }
  
  .detail-image {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .detail-info {
    padding: 20px;
  }
  
  .detail-info p {
    margin: 10px 0;
  }
  
  .detail-code-name, i {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--main-color);
  }
  
  .detail-mm-name {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .detail-size,
  .detail-description,
  .detail-example {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .contact-info {
    margin-top: 20px;
    text-align: center;
    font-size: 1rem;
    background: var(--secondary-color);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info p,
  .contact-info h3 {
    margin: 10px 0;
  }
  
  .contact-info h3 {
    color: var(--main-color);
    font-size: 1.2rem;
  }
  
  @media (min-width: 768px) {
    .detail-content {
      flex-direction: row;
    }
  
    .detail-image-container {
      width: 50%;
    }
  
    .detail-info {
      width: 50%;
      padding: 40px;
    }
  }
  
  @media (max-width: 768px) {
    .detail-info {
      padding: 20px;
    }
    .detail-content{
      padding-top: 40%;
    }
    .detail-image {
      height: auto;
    }
  
    .contact-info {
      padding: 10px;
    }
  }
  </style>
  