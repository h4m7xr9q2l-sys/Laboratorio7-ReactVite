import Cards from "./Cards";
import { useState } from "react";

const Listas = () => {
    const frutas = [
        { id: 1, nombre: 'Fresa',imagen: 'Fresa.svg' },
        { id: 2, nombre: 'Mango', imagen: 'mango.svg' },
        { id: 3, nombre: 'Sandia', imagen: 'sandia.svg' },
    ];

    const [total ,setTotal]=useState(0);

    return (
        <div style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h1>Total de likes de Frutas: {total}</h1>

            <input 
            style={{
                padding: '10px',
                marginBottom: '20px',
                width: '500px',
                border: '1px solid #ccc',
                borderRadius: '7px',
                backgroundColor: 'rgb(245, 245, 244)',
                borderColor: 'rgb(232, 52, 16)',
            }}
             tipe="text" placeholder="Ingrese el nombre de la fruta que busca" />

            <div style={{display: 'flex',}} >
                {frutas.map((fruta) => {
                    return (
                        <Cards 
                        key={fruta.id} 
                        nombre={fruta.nombre}
                        imagen={fruta.imagen}
                        onLike={()=> {
                            console.log("Like en Padre")
                            setTotal(total + 1)
                        }}
                        />
                    
                    );
                })}
            </div>
        </div>
    );
};

export default Listas;
