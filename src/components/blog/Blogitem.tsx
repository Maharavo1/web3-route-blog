import { Blog } from "@/listblog";
import Image from "next/image";
import Link from "next/link";
type itemProps = {
  blog: Blog;
  showImage?: boolean;
  showContent?: boolean;
};

export function Blogitem({ blog, showContent, showImage }: itemProps) {
  return (
    <Link href={`blog/${blog.id}`}>
      <div className="w-full  mx-auto p-5 max-w-[400px] rounded-lg bg-gray-500 my-2">
        <p className="text-center">
          <span className="font-bold">ID</span>: {blog.id}
        </p>
        <p className="text-center">{blog.title}</p>
        {showContent && (
          <div>
           
            <Link href={`blog/${blog.id}/image`} className="text-center my-2 text-white underline font-bold">
              Show image
            </Link>
          </div>
        )}
        {showImage && (
          <Image src={blog.image} alt="bllogImage" height={400} width={500} />
        )}
      </div>
    </Link>
  );
}
