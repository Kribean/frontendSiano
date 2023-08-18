import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function LogOrSign() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between w-full text-neutral">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center">
          <Image
            src="man-woman.svg"
            width={350}
            height={350}
            alt="illustration siano"
          />
          <Link href="/login" className="btn btn-secondary m-5">
            Se connecter à mon compte entreprise
          </Link>
          <Link href="/signin" className="btn btn-primary m-5">
            Créer un compte entreprise
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
