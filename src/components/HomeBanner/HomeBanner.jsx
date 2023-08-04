import Image from "next/image";
import Link from "next/link";

export default function HomeBaner()
{
    return(
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <Image  
      src="man-woman.svg"
      width={350}
      height={350}
      alt="illustration siano" />
    <div>
      <h1 className="text-neutral text-5xl font-bold">Bienvenue sur Siano!</h1>
      <p className="text-neutral py-6">Siano est une plateforme innovante dédiée à la croissance des entreprises locales et à l'épanouissement économique des Antilles. En mobilisant activement la population antillaise, nous encourageons la croissance des entreprises locales, créant ainsi de nouvelles opportunités d'emploi et contribuant au développement économique de notre région.</p>
      <Link href="/logorsign" className="btn btn-primary m-2">Entreprise</Link>
      <Link href="/consumer" className="btn btn-primary m-2">Client</Link>
    </div>
  </div>
</div>
    )
}