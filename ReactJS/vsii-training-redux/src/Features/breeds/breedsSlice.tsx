import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Breed {
  id: string;
  attributes: {
    name: string;
    description: string;
    life: {
      max: string;
      min: string;
    };
    male_weight: {
      max: string;
      min: string;
    };
    female_weight: {
      max: string;
      min: string;
    };
    hypoallergenic: boolean;
  };
  relationships: {
    group: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}

interface BreedsState {
  breeds: Breed[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BreedsState = {
  breeds: [],
  status: "idle",
  error: null,
};

// Xử lý API
export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
  const response = await fetch("https://dogapi.dog/api/v2/breeds");
  if (!response.ok) {
    throw new Error("Somthing wrong");
  }
  const breed = await response.json();
  return breed.data as Breed[];
});

const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.breeds = action.payload;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Somthing went wrong";
      });
  },
});

export default breedsSlice.reducer;
