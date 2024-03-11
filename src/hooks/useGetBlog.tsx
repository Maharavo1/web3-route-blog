import { Blog , blogMocks} from "@/listblog";
export function useGetBlog(id: Blog["id"]) {
  return blogMocks.find((blog) => blog.id == id);
}
