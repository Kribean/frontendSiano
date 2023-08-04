import Image from "next/image";
import Link from "next/link";

export default function CardProduct(props)
{
    return(
<div className="card w-96 h-[400px] bg-neutral text-neutral-content">
  <div className="card-body">
    <h2 className="card-title">{props.name}</h2>
    {!props.productIsAService&&    <p>  Nombre de {props.name} 
    <span className="badge badge-secondary mx-2">{props.quantity}</span></p>}
    <div className="w-full h-[100px] break-all overflow-hidden">
    <p>Description: {props.description} </p>
    </div>
    <p>Prix: {props.price} euros </p>
    <div className="card-actions justify-end">
      <button className="btn btn-error">Supprimer</button>
    </div>
  </div>
</div>
    )
}