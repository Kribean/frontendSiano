import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Consumer() {
  return (
    <main className="flex relative min-h-screen flex-col w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/Google-Play-Logo.png"
            alt="logo google play"
            className="max-w-sm rounded-lg shadow-2xl"
            width={400}
            height={400}
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">ça arrive!</h1>
            <p className="py-6">
              Bientôt notre application sera disponible sur android
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
