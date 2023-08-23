import Image from "next/image";

export default function CardCompany({company}) {
  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
      <figure className="w-full h-[100px] relative">
        <Image
          src="/caribean-tribe.png"
          alt="illustration caribéenne"
          className="w-full"
          width={500}
          height={50}
          style={{objectFit: "cover"}}
        />
                <div className="absolute flex flex-col top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                {company.label=="A+"&&<div className="badge badge-success">Excellente entreprise</div>}
                {company.label=="A"&&<div className="badge badge-success">Entreprise fortement recommandée</div>}
                {company.label=="B"&&<div className="badge badge-info">Entreprise bien vue</div>}
                {company.label=="C"&&<div className="badge badge-secondary">Entreprise prometteuse</div>}
          <h2 className="text-white text-2xl font-bold">{company.companyName}</h2>
        </div>
      </figure>
      <div className="card-body ">
        <h3 className="card-title truncate">
            Produit:
        </h3>
        {company.listOfProduct.map((element,index)=>{return <div key={index} className="badge badge-neutral">{element}</div>})}
       <p className="truncate break-all text-ellipsis overflow-hidde">Description: {company.description}</p>
       <p  className="text-neutral" >Adresse: {company.adress}</p>
                  <p  className="text-neutral" >Téléphone: {company.phoneNumber}</p>
                  <p  className="text-neutral" >Mail: {company.email}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
}
