import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";
import FeedbackCompany from "@/components/FeedbackCompany/FeedbackCompany";
import Footer from "@/components/Footer/Footer";

export default function CompanySession() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Navbar />
      <Navbar2 />
      <div className="flex flex-col w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">

          <div className="card w-[90%] lg:w-96 bg-base-100 shadow-xl m-5 bg-primary">
          <button className="card-body w-full">
            <h2 className="card-title text-primary-content">Ma situatio den</h2>
            <p className="text-primary-content">
              Nouveau employé, stagiaires, vente réussies? Dite le nous pour
              faire avancer le pays
            </p>
          </button>
        </div>

        <div className="card w-[90%] lg:w-96 bg-base-100 shadow-xl m-5 bg-secondary">
          <button className="card-body">
            <h2 className="card-title text-secondary-content">Ma situation</h2>
            <p className="text-secondary-content">
              Nouveau employé, stagiaires, vente réussies? Dite le nous pour
              faire avancer le pays
            </p>
          </button>
        </div>

          </div>

<FeedbackCompany/>

        </div>

        <div className="card w-[90%] bg-base-100 shadow-xl m-5 bg-info">
          <button className="card-body">
            <h2 className="card-title text-info-content">Ma situation</h2>
            <p className="text-info-content">
              Nouveau employé1, stagiaires, vente réussies? Dite le nous pour
              faire avancer le pays
            </p>
          </button>
        </div>

      </div>
      <Footer />
    </main>
  );
}
