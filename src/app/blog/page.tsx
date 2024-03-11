import { Blogmenu} from "@/components/blog/Blogmenu";

export default function Blogblog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Blogmenu/>
      {children}
    </div>
  );
}
