import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../Features/breeds/breedsSlice";
import { RootState, AppDispatch } from "../Store/rootReducer";

const Breeds: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const breeds = useSelector((state: RootState) => state.breeds.breeds);
  const status = useSelector((state: RootState) => state.breeds.loading);
  const error = useSelector((state: RootState) => state.breeds.error);

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

  return (
    <div className="container">
      <h1>Dog Breeds</h1>
      {status === "pending" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <ul>
          {breeds.map((breed) => (
            <li key={breed.id} style={{ listStyle: "none" }}>
              <h2>--{breed.attributes.name}--</h2>
              <p>{breed.attributes.description}</p>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Attributes</th>
                    <th scope="col">Max</th>
                    <th scope="col">Min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Life</td>
                    <td>{breed.attributes.life.max}</td>
                    <td>{breed.attributes.life.min}</td>
                  </tr>
                  <tr>
                    <td>Male_weight</td>
                    <td>{breed.attributes.male_weight.max}</td>
                    <td>{breed.attributes.male_weight.min}</td>
                  </tr>
                  <tr>
                    <td>Female_weight</td>
                    <td>{breed.attributes.female_weight.max}</td>
                    <td>{breed.attributes.female_weight.min}</td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Breeds;
