import api from "@/lib/api";
import type { Post } from "./posts.types";

export const getPosts = async () => {
  const response = await api.get<Post[]>("/posts");
  return response.data;
};

export const getPost = async (postId: Post["id"]) => {
  const response = await api.get<Post>(`/posts/${postId}`);
  return response.data;
};
