import { ref } from 'vue';
import { db } from '../firebase/config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

const getPost = () => {
  const posts = ref([]);
  const error = ref('');

  const load = async () => {
    try {
      const q = query(collection(db, 'product_posts'),orderBy('code_name'));
      const querySnapshot = await getDocs(q);
      posts.value = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    } catch (err) {
      error.value = 'Could not fetch data';
    }
  };

  return { posts, error, load };
};

export default getPost;
