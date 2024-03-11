import { Blogitem } from "@/components/blog/Blogitem"
import { blogMocks } from "@/listblog"

export default function Home() {
  return (
    <div>
      {blogMocks.map(blog => <Blogitem key={blog.id} blog={blog} />)}
    </div>
  )
}
