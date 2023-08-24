"use client";

import { addProduct } from "@/services/api";

export default function ModalProduct(props) {
  const createProduct = () => {
    const info = localStorage.getItem("informationSiano");

    if (JSON.parse(info)) {
      const body = {
        description: props.description,
        name: props.nom,
        productIsAService: props.productIsAService,
        quantity: props.quantity,
        price: props.price,
      };

      addProduct(body, JSON.parse(info).token)
        .then((data) => {
          if (data.ok) {
            return data.json();
          }
          throw new Error("cannot find products");
        })
        .then((data) => {
          props.setProducts(data);
          props.handleCloseModal();
        })
        .catch((error) => {
          console.log("fetch doesn't work: ", error);
        });
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Editer produit</h3>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Nom du produit ou du service</span>
            </label>
            <input
              maxLength={"20"}
              type="text"
              value={props.nom}
              onChange={(event)=>{props.setNom(event.target.value)}}
              placeholder="Taper le nom"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              maxLength={"150"}
              rows="4"
              value={props.description}
              onChange={(event)=>{props.setDescription(event.target.value)}}
              placeholder="Description obligatoire"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Prix en euros </span>
            </label>
            <div className="flex flex-row justify-center item-center">
              <input
                type="number"
                maxLength={"6"}
                value={props.price || 0}
                onChange={(event) => props.setPrice(event.target.value)}
                className="input input-bordered w-[100px]"
              />
              <p className="text-neutral text-bold text-xl ml-5">&#8364;</p>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Vendez-vous un service?</span>
            </label>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">
                  {props.productIsAService ? "Oui" : "Non"}
                </span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={() =>
                    props.setProductIsAService(!props.productIsAService)
                  }
                  checked={props.productIsAService}
                />
              </label>
            </div>
          </div>

          {!props.productIsAService && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantité disponible</span>
              </label>
              <input
                value={props.quantity || 0}
                onChange={(event) => {
                  props.setQuantity(parseInt(event.target.value));
                }}
                type="number"
                className="input input-bordered w-[100px]"
              />
            </div>
          )}
          <div className="flex flex-row gap-4 justify-end m-5">
            <button className="btn btn-primary" onClick={createProduct}>
              Créer
            </button>
            <button className="btn btn-error" onClick={props.handleCloseModal}>
              Fermer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}