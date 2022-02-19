import React, { useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import Loading from "./loading/Loading";
import axios from "axios";
import { findAllByTestId } from "@testing-library/react";

export default function Collapse() {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds?limit=10")
      .then((response) => {
        const dataCat = response.data;
        // console.log(dataCat);
        setCat(dataCat);
        setLoading(false);
      });
  }, []);
  // console.log(cat);
  return (
    <div>
      <div className="text-center">
        <h1 className="mobile:text-xl font-bold mobile:py-5 tablet:text-2xl">
          Jenis-jenis Kucing di Dunia
        </h1>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div>
          {cat.map((listCat) => {
            return (
              <Disclosure key={listCat.id}>
                {({ open }) => (
                  <>
                    <div className="flex flex-row justify-between bg-gray-100 w-full rounded mobile:px-2 py-2 my-2">
                      <div>{listCat.name}</div>
                      <div className=" ">
                        <Disclosure.Button>
                          <div className="border-2 border-gray-800 mt-1">
                            {open ? <VscChevronUp /> : <VscChevronDown />}
                          </div>
                        </Disclosure.Button>
                      </div>
                    </div>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel>
                        <div className="flex flex-col">
                          <div>
                            <h1 className="mobile:text-lg font-semibold mobile:py-2 text-center">
                              {listCat.name}
                            </h1>
                          </div>
                          <div className="mx-auto">
                            <img
                              src={listCat.image.url}
                              alt={listCat.name}
                              className="laptop:h-96"
                            />
                          </div>
                          <div className="text-gray-500">
                            <p className="pt-2">
                              Asal negara : {listCat.origin}
                            </p>
                            <p>Karakter : {listCat.temperament}</p>
                            <p className=" text-justify py-2">
                              {listCat.description}
                            </p>
                          </div>
                          <div>
                            <a
                              href={listCat.wikipedia_url}
                              target="_blank"
                              className="py-3 underline cursor-pointer text-blue-600"
                            >
                              Kunjungi sumber data
                            </a>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      )}
    </div>
  );
}
