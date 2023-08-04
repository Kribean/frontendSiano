"use client";
import Link from "next/link";
export default function Navbar2(props) {
  return (
    <>
      <div className="navbar w-full bg-base-100 justify-center">

        <div className="navbar-center">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><Link href="/company-session">Page d'accueil</Link></li>
  <li><Link href="/product">Mes produits</Link></li>
  <li><Link href="/customer-contact">Mes clients</Link></li>
  <li><Link href="/profile">Mon profil</Link></li>
</ul>
        </div>

      </div>
    </>
  );
}
