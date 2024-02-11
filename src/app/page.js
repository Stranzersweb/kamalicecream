import Footer from "@/Components/Footer";
import HomePageContent from "@/Components/HomePageContent";
import BestSellers from "@/Components/Products";
import Services from "@/Components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomePageContent/>
      <BestSellers/>
      <Services/>
      <Footer/>

    </main>
  );
}
