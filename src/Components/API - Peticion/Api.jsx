// import React from "react";
// import CardU from "../Card/CardU";
// import { useSelector, useDispatch } from "react-redux";
// import { nuevasTarjetas } from "../../Redux/Actions";


// const NuevasCardU = async ( eliminarCard ) => {
//     const dispatch = useDispatch();
//     const characters = useSelector((state) => state.characters)
    

//     let generadorTarjetas = characters.map((character) => (
//         <CardU
//             key={character.id}
//             name={character.name}
//             gender={character.gender}
//             species={character.species}
//             image={character.image}
//             onClick={() => eliminarCard(character.id)}
//         />
//     ));

//     dispatch(nuevasTarjetas(generadorTarjetas))
    
//     console.log("Se envio la base de datos de tarjetas al estado global");
// };

// export default NuevasCardU;