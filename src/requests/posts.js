import { instance } from '../services/api';

export async function getPostsById(userId) {
  try {
    const posts = await instance.get(`/posts/user/${userId}`);
    return posts;
  } catch (error) {
    console.log(error.message);
  }
}
