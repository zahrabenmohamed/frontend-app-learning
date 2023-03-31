async function fetchSearch({queryKey}){
     const {location , animal , breed}=queryKey[1];
     const res=await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
     )
     if (!res.ok)
     throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);
 
   return res.json();
}
export default fetchSearch;