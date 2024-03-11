import { Blogitem } from "./Blogitem";
import { blogMocks } from "@/listblog";

export function Menu() {
  return (
    <div className="w-[300px] bg-white-600 overflow-y-auto" style={{ height: "calc(100vh - 100px)" }}>
      {blogMocks.map((blog) => (
        <Blogitem key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
