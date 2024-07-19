import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";

const getPost = (id) => {
    const post = ref(null);
    const error = ref('');

    const load = async () => {
        try {
            const docRef = doc(db, 'product_posts', id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                post.value = { id: docSnap.id, ...docSnap.data() };
            } else {
                error.value = 'Post not found';
            }
        } catch (err) {
            error.value = 'Could not fetch data';
        }
    };

    return { post, error, load };
}

export default getPost;
