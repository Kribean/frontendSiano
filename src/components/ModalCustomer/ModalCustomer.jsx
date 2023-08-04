"use client"
import CardCustomerAnonym from "../CardCustomer/CardCustomerAnonym"

export default function ModalCustomer(props){


    return(
        <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Trouver des clients</h3>

<div className="flex flex-wrap gap-2 m-4">
<CardCustomerAnonym name="jhon"/>
<CardCustomerAnonym name="jane"/>
<CardCustomerAnonym name="doe"/>
</div>



<div className="flex flex-row gap-4 justify-end m-5">
            <button className="btn btn-error" onClick={props.handleCloseModal}>Fermer</button>
</div>
          </div>
        </div>
        </>
    )
}