"use client"

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FormStep from "@/components/LogInComponents/FormStep";
import ChartStep from "@/components/LogInComponents/ChartStep";
import { useState } from "react";
export default function LogIn() {
 
const [goToChart,setGoToChart] = useState(false)
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
{goToChart?<ChartStep/>:
<FormStep setGoToChart={setGoToChart}/>}

      <Footer />
    </main>
  );
}
