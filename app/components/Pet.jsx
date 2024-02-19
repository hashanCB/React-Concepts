import Link from "next/link";
import React from "react";
Link;

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = `http://pets-images.dev-apis.com/pets/none.jpg`;
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link href={`/pages/info/${id}`} className="relative block">
      <div className=" flex items-center gap-3 bg-emerald-500 max-w-80 mb-3 ml-3 mt-3 rounded-lg p-3 shadow-lg">
        <div>
          <img className=" w-20 rounded-full" src={hero} alt={name} />
        </div>
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Pet;
