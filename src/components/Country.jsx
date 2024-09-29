import { useState } from "react";
import Modal from "./Modal";



const Country = ({ country,handleDetailsOfCountry }) => {
  // console.log(handleDetailsOfCountry(country))
  const[modal,setModal] = useState({})
  function handleBtnClick(e){
    e.target.innerText = "visited"
    e.target.setAttribute("disabled",true)

  //  console.log(country.name.common)
    // my_modal_5.showModal()
    // console.log(my_modal_5[0])
    console.log(country)
    setModal({...Country})
  }
  // console.log(country?.region !== 'Europe' ? "true": 'Country Not found' );
  return (
    <>
      
        <div className="card glass ">
          <figure>
            <img
              src={country.flags.png}
              alt={country?.name?.alt}
              className="w-full h-52 "
            />
          </figure>

          <div className="card-body px-6 pb-6 ">
            <h2 className="card-title">{country?.name?.common}</h2>
            <h3><span className=" font-semibold">Capital</span> : {country?.capital}.</h3>
            <h3><span className=" font-semibold">Population</span> : {country?.population}</h3>
            <div className="card-actions">
              <button onClick={handleBtnClick} className="btn bg-primary text-secondary hover:text-primary hover:bg-secondary w-full " >Details</button>
            </div>
          </div>
          {/* <Modal key={country.cca3}country={modal}/> */}
        </div>
      
    </>
  );
};

export default Country;
