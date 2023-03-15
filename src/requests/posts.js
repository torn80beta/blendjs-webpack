import { instance } from '../services/api';

export async function getPostsById(userId) {
  try {
    const posts = await instance.get(`/posts/user/${userId}`);
    return posts;
  } catch (error) {
    console.log(error.message);
  }
}

export async function searchPostsByKeyWord(query) {
  try {
    const posts = await instance.get(`/posts/search?q=${query}`);
    return posts;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getAllPosts() {
  try {
    const allPosts = await instance.get('/posts');
    return allPosts;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePost(postId, body) {
  try {
    const updatedPost = await instance.patch(`/posts/${postId}`, {
      headers: { 'Content-Type': 'application/json' },
      body: body,
    });
    return updatedPost;
  } catch (error) {
    console.log(error.message);
  }
}
