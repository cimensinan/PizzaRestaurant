import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-9rem)] md:h-[calc(100vh-15rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-4 sm:p-8 md:h-[70%]"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-2/3 lg:w-1/2`}>
            <h1 className="uppercase font-bold text-3xl whitespace-nowrap sm:whitespace-normal">{category.title}</h1>
            <p className="text-sm my-5">{category.desc}</p>
            <button
              className={`hidden xl:block text-${
                category.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md`}
              style={{ backgroundColor: category.color }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
