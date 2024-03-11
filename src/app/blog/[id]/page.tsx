import { useGetBlog } from "@/hooks/useGetBlog";
import { Blogitem } from "@/components/blog/Blogitem";

export default function CheckBlog({
  params: { id },
}: {
  params: { id: string };
}) {
  const blog = useGetBlog(id);
  if (!blog) {
    return <div>404 </div>; 
  }
  return (
    <div>
        < Blogitem blog={blog} showContent />
    </div>
  )
}
