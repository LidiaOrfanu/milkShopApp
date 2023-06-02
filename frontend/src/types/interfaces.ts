export interface IMilkProdInfo {
    prodId: string;
    name: string;
    type: string;
    storage: number;
  }

export const milkTypes = [
    "Cashew",
    "Pea",
    "Walnut",
    "Rice",
    "Coconut",
    "Soy",
    "Hemp",
    "Almond",
    "Oat",
    "Whole",
    "Macadamia",
  ];

  export interface IStoreProps {
    store : IMilkProdInfo[]
    data : IMilkProdInfo[]
  }