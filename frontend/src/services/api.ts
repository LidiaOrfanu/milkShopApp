import axios from "axios";
import { IMilkProdInfo } from "../types/interfaces";

export const fetchProducts = async () => {
  const response = await axios.get('http://localhost:5072/api/MilkProduct');
  const prods = response.data as IMilkProdInfo[];
  return prods;
};


export const fetchProductById = async (id : string) => {
    const response = await axios.get(`http://localhost:5072/api/MilkProduct/${id}`)
    const prod = response.data as IMilkProdInfo;
    console.log(prod);
    return prod;
}