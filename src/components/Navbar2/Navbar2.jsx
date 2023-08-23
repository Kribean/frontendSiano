"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar2(props) {
  const router = useRouter();
  
  const closeSession = ()=>{
    localStorage.removeItem('informationSiano');

    return router.push('/')
  }
  return (
    <>
      <div className="navbar w-full bg-base-100 justify-center">
        <div className="navbar-center">
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li className="lg:m-5">
              <Link href="/company-session">Page d'accueil</Link>
            </li>
            <li className="lg:m-5">
              <Link href="/product">Mes produits</Link>
            </li>
            <li className="lg:m-5">
              <Link href="/customer-contact">Mes clients</Link>
            </li>
            <li className="lg:m-5">
              <Link href="/profile">Mon profil</Link>
            </li>
            <li className="m-5">
              <button onClick={closeSession} className="btn btn-error">se déconnecter</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
