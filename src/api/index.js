import axios from "axios";

const url = "http://localhost:5000/posts";
const urlHeroku = "https://mern-practice-daser.herokuapp.com/posts";

export const fetchPosts = () => axios.get(urlHeroku);
export const createPost = (newPost) => axios.post(urlHeroku, newPost);
export const deletePost = (id) => axios.delete(`${urlHeroku}/${id}`);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${urlHeroku}/${id}`, updatedPost);
export const likePost = (id) => axios.patch(`${urlHeroku}/${id}/likePost`);
