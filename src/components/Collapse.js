import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

export default function Collapse() {
  return (
    <div>
      <div className="text-center">
        <h1 className="mobile:text-xl font-bold mobile:py-5 tablet:text-2xl">
          Jenis-jenis Kucing di Dunia
        </h1>
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex flex-row justify-between bg-gray-100 w-full rounded mobile:px-2 py-2">
              <div>jksdhfus</div>
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
                      Ucing Hideung
                    </h1>
                  </div>
                  <div className="mx-auto">
                    <img
                      src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-gray-500">
                    <p className="pt-2">Asal negara : Amerika</p>
                    <p>Karakter : Galaka, Pikasebeln</p>
                    <p className=" text-justify py-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus corrupti voluptatum vel molestias beatae
                      mollitia totam deserunt laborum? Saepe nihil soluta
                      pariatur aperiam tenetur laboriosam, repellat itaque enim
                      ea magnam hic temporibus optio praesentium omnis quam
                      magni architecto illum nesciunt, rerum est error a
                      corporis suscipit! Quos quasi incidunt quod.
                    </p>
                  </div>
                  <div>
                    <a
                      href=""
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
    </div>
  );
}
