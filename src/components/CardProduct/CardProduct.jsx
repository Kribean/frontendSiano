import { deleteMyProducts } from "@/services/api"

export default function CardProduct(props)
{
  const deleteProductAndGetUpdate = ()=>{

    const info = localStorage.getItem("informationSiano");

    if(JSON.parse(info))
    {
      deleteMyProducts(JSON.parse(info).token,props.idProduct)
      .then((data)=>{
        if(data.ok)
        {
          return data.json();
        }
        throw new Error("not succeed delete")
      })
      .then((data)=>{props.setProducts(data)})
      .catch((error)=>{console.log("error occur on fetch delete")})
    }
  }
    return(
<div className="card w-96 h-fit m-5 bg-neutral text-neutral-content">
  <div className="card-body">
    <h2 className="card-title">{props.name}</h2>
    <p>📱 🍔 👟 📚 🎁 🏋️‍♂️ 🌸 🏠 🚗 ✏️</p>
    {!props.productIsAService&&    <p>  Nombre de {props.name} disponible(s):
    <span className="badge badge-warning mx-2">{props.quantity}</span></p>}
    <div className="w-full h-[100px] break-all overflow-hidden">
    <p>Description: {props.description} </p>
    </div>
    <p>Prix: {props.price} &#8364; </p>
    <div className="card-actions justify-end">
      <button onClick={deleteProductAndGetUpdate} className="btn btn-error">Supprimer</button>
    </div>
  </div>
</div>
    )
}