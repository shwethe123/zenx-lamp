<template>
    <div class="details">
      <!-- <h1>Hello</h1> -->
      <SinglePost :post="post"></SinglePost>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import getPost from '@/composables/detailPost'; // Ensure the path is correct
  import SinglePost from '@/components/SinglePost.vue';
  import { ref, onMounted } from 'vue';
  
  export default {
    components: { SinglePost },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const { post, error, load } = getPost(props.id);
  
      onMounted(load);
  
      return { post, error };
    }
  };
  </script>
  
  <style>
.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-size: 30px;
  /* color: rgb(167, 167, 167); */
  font-weight: 500;
}
  </style>
  