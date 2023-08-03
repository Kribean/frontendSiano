import Image from "next/image";

export default function CardCompany(props) {
  return (
    <div className="card w-full lg:w-96 h-[250px] bg-base-100 shadow-xl">
      <figure className="w-full h-[100px] relative">
        <Image
          src="/caribean-tribe.png"
          alt="illustration caribéenne"
          width={500}
          height={50}
          style={{objectFit: "cover"}}
        />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">{props.companyTitle}</h2>
        </div>
      </figure>
      <div className="card-body h-[150px]">
        <h3 className="card-title truncate">
            Produit: {props.companyProducts}
        </h3>
       <p className="truncate break-all text-ellipsis overflow-hidde">Description entreprise ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff dddddddddddddddddddddddddddddddddddddddddddddddd ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff dddddddddddddddddddddddddddddddddddddddddddddddd ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff dddddddddddddddddddddddddddddddddddddddddddddddd</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
