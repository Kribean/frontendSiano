import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Navbar2 from "@/components/Navbar2/Navbar2";

export default function Profile() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <Navbar2 />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Mon profil</h1>
            <p className="py-6">
              Bel bonjou! Nou ka espéré projè ta la ka édé'w! Si ou ni bagay pou
              di nou, pa ézité krié nou an lè rézo nou an 💻🌱🏢
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nom de l'entreprise</span>
                </label>
                <input
                  type="text"
                  placeholder="Nom de l'entreprise"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nom du chef d'entreprise</span>
                </label>
                <input
                  type="text"
                  placeholder="Nom du chef d'entreprise"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Prénom du chef d'entreprise
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Prénom du chef d'entreprise"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Téléphone (10 chiffres)</span>
                </label>
                <input
                  type="text"
                  placeholder="Téléphone"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Code Postal</span>
                </label>
                <input
                  type="text"
                  placeholder="Code Postal"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Siren</span>
                </label>
                <input
                  type="text"
                  placeholder="Siren"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien Facebook (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="Facebook"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien Twitter (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="Twitter"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien LinkedIn (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="LinkedIn"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien Whatsapp (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="Whatsapp"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Lien Instagram (facultatif)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Instagram"
                  className="input input-bordered"
                  disabled
                />
              </div>
              <button className="btn btn-primary" href="/login">
                {" "}
                Valider
              </button>
              <button className="btn btn-secondary" href="/login">
                {" "}
                Modifier
              </button>
              <button className="btn btn-error" href="/login">
                {" "}
                Supprimer mon compte
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
