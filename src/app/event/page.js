import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardEvent from "@/components/CardEvent/CardEvent";

export default function Event() {
  const dataCalendar = [
    {
      date: "5/12/2023",
      title: "Foire aux légume",
      description: "vente de fruit et légume retrouver mon stand",
    },
    {
      date: "12/08/2023",
      title: "Journée de l'énergie",
      description: "découvrer les énergie solaire et chauffe eau",
    },
    {
      date: "30/11/2023",
      title: "Journée sportive",
      description: "venez découvrir notre randonnée ",
    },
    {
      date: "5/12/2023",
      title: "Foire aux légume",
      description: "vente de fruit et légume retrouver mon stand",
    },
    {
      date: "12/08/2023",
      title: "Journée de l'énergie",
      description: "découvrer les énergie solaire et chauffe eau",
    },
    {
      date: "30/11/2023",
      title: "Journée sportive",
      description: "venez découvrir notre randonnée ",
    },
    {
      date: "5/12/2023",
      title: "Foire aux légume",
      description: "vente de fruit et légume retrouver mon stand",
    },
    {
      date: "12/08/2023",
      title: "Journée de l'énergie",
      description: "découvrer les énergie solaire et chauffe eau",
    },
    {
      date: "30/11/2023",
      title: "Journée sportive",
      description: "venez découvrir notre randonnée ",
    },
  ];
  return (
    <main className="flex relative min-h-screen flex-col w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <div className=" flex flex-wrap gap-4 min-h-screen bg-base-200">
        {dataCalendar.map((element,index) => {
          return (
            <CardEvent
              date={element.date}
              title={element.title}
              description={element.description}
              isAdmin={false}
              key={index}
            />
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
