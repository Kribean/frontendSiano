import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Se connecter</h1>
      <p className="py-6">Bienvenue sur notre page de connexion Siano - Un pont virtuel pour relier les entreprises locales et la communauté des Antilles vers un développement économique solide ! 🌴🚀💼</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mot de passe</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <p className="text-neutral">Mot de passe perdu? contactez nous</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <Link href="/company-session" className="btn btn-primary">Se connecter</Link>
        </div>
      </div>
    </div>
  </div>
</div>
      <Footer/>
    </main>
  );
}
