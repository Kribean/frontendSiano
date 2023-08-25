"use client";
import Image from "next/image";
import Link from "next/link";
export default function Navbar(props) {
  return (
    <>
      <div className="navbar w-full bg-base-100 px-10">
        <div className="navbar-start">
          <div className="dropdown relative block lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="top-[-100px] lg:hidden menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/event" className="text-neutral">Evènements</Link>
              </li>
              <li>
                <Link href="/joboffer" className="text-neutral">Emploi</Link>
              </li>
            </ul>
          </div>
          <ul className="lg:flex lg:flex-row hidden lg:block"
            >
              <li>
                <Link href="/event" className="btn btn-neutral mx-[20px]">Evènements</Link>
              </li>
              <li>
                <Link href="/joboffer" className="btn btn-neutral mx-[20px]">Emploi</Link>
              </li>
            </ul>
        </div>
        <div className="navbar-center">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            <Image
              src="/logo-siano-black.png"
              alt="Siano Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
        <div className="navbar-end">
          <Link href="/consumer" className="btn btn-ghost btn-circle mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M0-240v-53q0-38.567 41.5-62.784Q83-380 150.376-380q12.165 0 23.395.5Q185-379 196-377.348q-8 17.348-12 35.165T180-305v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5 67.5 0 108.75 23.768T960-293v53H780Zm-480-60h360v-6q0-37-50.5-60.5T480-390q-79 0-129.5 23.5T300-305v5ZM149.567-410Q121-410 100.5-430.562 80-451.125 80-480q0-29 20.562-49.5Q121.125-550 150-550q29 0 49.5 20.5t20.5 49.933Q220-451 199.5-430.5T149.567-410Zm660 0Q781-410 760.5-430.562 740-451.125 740-480q0-29 20.562-49.5Q781.125-550 810-550q29 0 49.5 20.5t20.5 49.933Q880-451 859.5-430.5T809.567-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.351-60Q506-540 523-557.351t17-43Q540-626 522.851-643t-42.5-17Q455-660 437.5-642.851t-17.5 42.5Q420-575 437.351-557.5t43 17.5ZM480-300Zm0-300Z" />
            </svg>
          </Link>
          <Link href="/logorsign" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M160-740v-60h642v60H160Zm5 580v-258h-49v-60l44-202h641l44 202v60h-49v258h-60v-258H547v258H165Zm60-60h262v-198H225v198Zm-50-258h611-611Zm0 0h611l-31-142H206l-31 142Z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
