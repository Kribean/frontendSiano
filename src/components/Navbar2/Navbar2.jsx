"use client";
import Link from "next/link";
export default function Navbar(props) {
  return (
    <>
      <div className="navbar w-full bg-base-100 justify-center">

        <div className="navbar-center">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <li><Link href="">Mes produits</Link></li>
  <li><Link href="">Mes clients</Link></li>
  <li><Link href="">Rechercher des clients</Link></li>
  <li><Link href="">Mon, profil</Link></li>
</ul>
        </div>

      </div>
    </>
  );
}
