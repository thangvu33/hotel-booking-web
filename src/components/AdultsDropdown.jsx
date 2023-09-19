import React, { useContext } from "react";

import { RoomContext } from "../context/RoomContext";

import { Menu } from "@headlessui/react";

import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: "1 Adult" },
  { name: "2 Adult" },
  { name: "3 Adult" },
  { name: "4 Adult" },
];

const AdultsDropdown = () => {
  const {adults, setAdults} = useContext(RoomContext)
  return (
    <Menu as="div" className="w-full h-full bg-white relative">

      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {adults}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>

      <Menu.Items className="bg-white absolute w-full flex flex-col z-40 divide-y border shadow-lg">
        {lis.map((li, index) => {
          return (
            <Menu.Item
              className="h-12 w-full hover:bg-accent hover:text-white flex justify-center items-center cursor-pointer"
              onClick={() => setAdults(li.name)}
              key={index}
              as="li"
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
