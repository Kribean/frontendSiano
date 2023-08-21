import HomeBaner from "@/components/HomeBanner/HomeBanner";
import Navbar from "@/components/Navbar/Navbar";
import CardCompany from "@/components/CardCompany/CardCompany";
import StatComponent from "@/components/StatComponent/StatComponent";
import Notification from "@/components/Notification/Notification";
import Footer from "@/components/Footer/Footer";

export default function Home() {

   const typeOfNotification=1
   const title="le titre"
   const description="la description est la"
   const appearUrl=false
   const url=""

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
<Notification
    typeOfNotification={typeOfNotification}
    title={title}
    description={description}
    appearUrl={appearUrl}
    url={url}/>
      <HomeBaner />

      <div className="flex flex-col w-full justify-start">
        <h2 className="font-bold text-lg lg:text-2xl ">
          Les meilleurs entreprises locales
        </h2>
        <div className="flex flex-wrap gap-4  p-[20px]">
          <CardCompany companyTitle="Pate en po" />
          <CardCompany companyTitle="Cool energy" />
        </div>
      </div>
      <div className="flex flex-col w-full justify-start">
        <h2 className="font-bold text-lg lg:text-2xl ">Les entreprises locales</h2>
        <div className="flex flex-wrap gap-4  p-[20px]">
          <CardCompany companyTitle="Fruit péyi" />
          <CardCompany companyTitle="Sport and Co" />
        </div>
      </div>

      <div className="flex flex-col w-full justify-start">
        <h2 className="font-bold text-lg lg:text-2xl ">Siano en quelques chiffres</h2>
        <div className="flex">
          <StatComponent />
        </div>
      </div>
      <Footer />
    </main>
  );
}
