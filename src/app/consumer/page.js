import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Consumer() {
  return (
    <main className="flex relative min-h-screen flex-col w-full text-neutral">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Link href={"https://play.google.com/store/apps/details?id=com.kayak.siano"} target="_blank">
          <Image
            src="/Google-Play-Logo.png"
            alt="logo google play"
            className="max-w-sm rounded-lg shadow-2xl"
            width={400}
            height={400}
            priority
          />
          </Link>
          <div>
            
            <h1 className="text-xl lg:text-5xl font-bold">
              ça y'est!</h1>
            <p className="py-6">
              Découvrez toutes les entreprises locales du territoire en cliquant ici! 
            </p>
            <Link className="btn btn-info" href={"https://play.google.com/store/apps/details?id=com.kayak.siano"} target="_blank">
              Télécharger Application Siano 
            </Link>
            <p className="text-md font-bold">
              Note: notre application est pour l'instant disponible que pour <span className=" text-warning">Android</span> 
            </p>
          </div>
          
        </div>
      </div>
      <Footer />
    </main>
  );
}
