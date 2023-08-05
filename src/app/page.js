import HomeBaner from "@/components/HomeBanner/HomeBanner";
import Navbar from "@/components/Navbar/Navbar";
import CardCompany from "@/components/CardCompany/CardCompany";
import StatComponent from "@/components/StatComponent/StatComponent";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <div className="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          Lancement de l'application pour la mobilisation citoyenne caribéenne.
        </span>
      </div>
      <HomeBaner />

      <div className="flex flex-col w-full justify-start">
        <h2 className="font-bold text-2xl ">
          Les meilleurs entreprises locales
        </h2>
        <div className="flex flex-wrap gap-4  p-[20px]">
          <CardCompany companyTitle="Pate en po" />
          <CardCompany companyTitle="Cool energy" />
        </div>
      </div>
      <div className="flex flex-col w-full justify-start">
        <h2 className="font-bold text-2xl ">Les entreprises locales</h2>
        <div className="flex flex-wrap gap-4  p-[20px]">
          <CardCompany companyTitle="Fruit péyi" />
          <CardCompany companyTitle="Sport and Co" />
        </div>
      </div>

      <div className="flex flex-col w-full justify-start">
        <h2 className="font-bold text-2xl ">Siano en quelques chiffres</h2>
        <div className="flex">
          <StatComponent />
        </div>
      </div>
      <Footer />
    </main>
  );
}
