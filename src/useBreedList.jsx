import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

const localCache = {};

export default function useBreedList(animal) {
 const results=useQuery(["breeds",animal],fetchBreedList)

  return [results?.data ?.breeds ?? [],results.status]; //if this exist give me if not do not give me an error ES2021
}
//post is more secure 
