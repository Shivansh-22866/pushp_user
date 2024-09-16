import Image from "next/image";
import Collections from "../components/Collections";
import ProductList from "../components/ProductList";
import Stories from "../components/Stories";

export default function Home() {
  return (
    <div className="bg-[#FFFFCF]">
      <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections/>
      <Stories />
      <ProductList/>
    </div>
  );
}
