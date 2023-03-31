import Pet from './Pet'
const Results=({pets})=>{
    return(
        <div className="results">
           {!pets.length ? (
             <h1>No pet Found</h1>

           ): (
            pets.map((pet) => (
                <Pet
                  animal={pet.animal}
                  id={pet.id}
                  name={pet.name}
                  breed={pet.breed}
                  images={pet.images}
                  location={`${pet.city}, ${pet.state}`}
                  key={pet.id}
                />
              ))
           )}


        </div>
    )
}
export default Results;