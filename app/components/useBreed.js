import React, { useEffect, useState } from "react";

const localCache = {};
const useBreed = (animal) => {
  const [breeds, setBreeds] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreeds([]);
    }
    if (localCache[animal]) {
      setBreeds(localCache[animal]);
    } else {
      requestBreeds();
    }
    async function requestBreeds() {
      setBreeds([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const data = await res.json();
      localCache[animal] = data.breeds || [];
      setBreeds(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breeds, status];
};

export default useBreed;
