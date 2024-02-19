import React from "react";
import Pet from "./Pet";
const PetResult = ({ petsx }) => {
  console.log(petsx);
  return (
    <div>
      {!petsx.length ? (
        <h1>No pets found</h1>
      ) : (
        petsx.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default PetResult;
