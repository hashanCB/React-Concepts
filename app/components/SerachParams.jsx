"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Pet from "./Pet";
import useBreed from "./useBreed";
import PetResult from "./PetResult";

const ANIMALS = ["dog", "cat", "bird", "reptile", "rabbit"];
const SerachParams = () => {
  const [location, setlocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreed(animal);

  useEffect(() => {
    getpets();
  }, []);

  const getpets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
      {
        cache: "no-cache",
      }
    );
    const respons = await res.json();
    setPets(respons.pets);
  };
  return (
    <div>
      <form
        className=" bg-slate-500 flex flex-col max-w-80"
        onSubmit={(e) => {
          e.preventDefault();
          getpets();
        }}
      >
        <label htmlFor="location">
          <input
            id="location"
            value={location}
            placeholder="Location"
            name="location"
            onChange={(e) => setlocation(e.target.value)}
          />
        </label>

        <lable htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option></option>
            {ANIMALS.map((animal, index) => (
              <option value={animal} key={index}>
                {animal}
              </option>
            ))}
          </select>
        </lable>

        <label htmlFor="breed">
          <select
            id="breed"
            disabled={!breeds.length}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option></option>
            {breeds.map((breed, index) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>

      <div>
        <PetResult petsx={pets} />
        {/* {pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))} */}
      </div>
    </div>
  );
};

export default SerachParams;
