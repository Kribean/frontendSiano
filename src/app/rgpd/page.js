import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Navbar2 from "@/components/Navbar2/Navbar2";

export default function RGPD() {

  return (
    <main className="flex relative min-h-screen flex-col w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <div className=" flex flex-wrap min-h-screen bg-base-200 m-[20px] text-neutral">
<h1 className="text-neutral text-xl lg:text-5xl font-bold">RGPD</h1>
<p className="text-neutral m-[10px]">
En tant que plateforme respectueuse des droits des utilisateurs et des entreprises, Siano s'engage à se conformer au Règlement Général sur la Protection des Données (RGPD) de l'Union européenne et à garantir la confidentialité et la sécurité des données personnelles. La présente politique de protection des données décrit comment nous recueillons, utilisons, stockons et protégeons les données personnelles des utilisateurs et des entreprises sur notre plateforme.
</p>
<ol className="list-decimal break-words w-full m-[20px]">
  <li className="text-neutral">
    <p className="text-neutral">Collecte et utilisation des données personnelles :</p>
    <p className="text-neutral">Nous collectons les données personnelles des utilisateurs et des entreprises lors de leur inscription sur notre plateforme. Ces données peuvent inclure le nom, le prénom, l'adresse e-mail, le numéro SIREN de l'entreprise et toute autre information pertinente pour l'utilisation de nos services. Les données personnelles sont utilisées dans le cadre de l'administration de la plateforme, pour faciliter les échanges entre les utilisateurs et les entreprises, et pour évaluer l'éligibilité aux labels et aux critères de qualité.</p>
  </li>
  <li className="text-neutral">
    <p className="text-neutral">Conservation des données :</p>
    <p className="text-neutral">Les données personnelles des utilisateurs et des entreprises sont conservées de manière sécurisée et ne sont pas conservées plus longtemps que nécessaire pour atteindre les objectifs pour lesquels elles ont été collectées. Les entreprises sont invitées à fournir des informations annuelles sur l'évolution de leur entreprise, mais ces données ne sont utilisées que pour les évaluations internes et pour attribuer les labels.</p>
  </li>
  <li className="text-neutral">
    <p className="text-neutral">Partage des données :</p>
    <p className="text-neutral">Les données personnelles des utilisateurs ne sont pas partagées avec des tiers sans leur consentement préalable. Cependant, les entreprises acceptent que certaines informations, telles que le nom de l'entreprise et le matricule SIREN, soient partagées avec les consommateurs pour faciliter l'accès aux évaluations et aux informations relatives à l'entreprise.</p>
  </li>
  <li className="text-neutral">
    <p className="text-neutral">Sécurité des données :</p>
    <p className="text-neutral">Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger les données personnelles contre tout accès non autorisé, toute divulgation ou toute altération. Les données personnelles sont traitées de manière confidentielle et seuls les employés et les collaborateurs autorisés ont accès à ces informations.</p>
  </li>
  <li className="text-neutral">
    <p className="text-neutral">Droits des utilisateurs :</p>
    <p className="text-neutral">Les utilisateurs et les entreprises ont le droit d'accéder, de rectifier, de supprimer ou de limiter l'utilisation de leurs données personnelles conformément à la législation en vigueur sur la protection des données. Ils ont également le droit de retirer leur consentement à tout moment et de s'opposer au traitement de leurs données personnelles dans certaines circonstances.</p>
  </li>
  <li className="text-neutral">
    <p className="text-neutral">Contact et exercice des droits :</p>
    <p className="text-neutral">Pour toute demande relative à la protection des données ou pour exercer vos droits en vertu du RGPD, vous pouvez contacter l'équipe de Siano via l'adresse e-mail : caraibe.simulation@gmail.com. Nous nous engageons à répondre à vos demandes dans les délais prévus par la réglementation en matière de protection des données.</p>
  </li>
</ol>
<p className="text-neutral">
En utilisant notre plateforme, les utilisateurs et les entreprises acceptent la présente politique de protection des données et consentent à la collecte, l'utilisation et la conservation de leurs données personnelles conformément aux termes énoncés ci-dessus. Nous nous réservons le droit de modifier cette politique de protection des données à tout moment. Toute modification sera notifiée aux utilisateurs et aux entreprises par des moyens appropriés.
</p>
      </div>
      <Footer />
    </main>
  );
}
