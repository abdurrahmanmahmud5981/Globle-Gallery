import { useEffect, useState } from "react";
import Country from "./Country";
import Modal from "./Modal";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [detailsOfCountry, setDetailsOfCountry] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    fetchCountries();
  });

  const handleDetailsOfCountry = (country) => {
    const countryCurrencies = Object.entries(country?.currencies || {}).map(
      (currency) => {
        const [code, { name, symbol }] = currency;
        return { code, name, symbol };
      }
    );
    setDetailsOfCountry({
      ...Country,
      flag: country?.flags?.svg,
      currencies: countryCurrencies,
    });
  };

  return (
    <>
      {/* modal */}
      {isModalOpen && (
        <div
          className=" fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center z-50 "
          onClick={""}
        >
          <div
            className=" bg-gray-200 p-5 rounded-lg max-w-xl h-1/2 shadow-lg "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h1>I am modal </h1>
              <button onClick={""}>close </button>
            </div>
          </div>
        </div>
      )}
      {/*  */}
      <div className="max-w-screen-xl mx-auto my-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
          {countries.length > 0 ? (
            countries.map((e) => (
              <Country
                key={e.cca3}
                country={e}
                handleDetailsOfCountry={handleDetailsOfCountry}
              />
            ))
          ) : (
            <h2 className=" text-xl text-red-500 font-semibold">
              No Country Found......
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Countries;
