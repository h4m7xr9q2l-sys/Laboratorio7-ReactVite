import Cards from "./Cards";
import { useState } from "react";

const Listas = () => {
    const frutas = [
        { id: 1, nombre: 'Fresa',imagen: 'Fresa.svg' },
        { id: 2, nombre: 'Mango', imagen: 'mango.svg' },
        { id: 3, nombre: 'Sandia', imagen: 'sandia.svg' },
    ];

    const [total ,setTotal]=useState(0);
    const [busqueda, setBusqueda] =useState("");
    const frutasFiltradas = frutas.filter((fruta)=> fruta.nombre.toLowerCase().includes(busqueda.toLowerCase()));

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
                border: '1px solid #144b21',
                borderRadius: '7px',
                backgroundColor: 'rgb(158, 208, 175)',
                borderColor: 'rgb(14, 108, 44)',
            }}
             type="text" placeholder="Ingrese el nombre de la fruta que busca" 
             onChange={(e)=>{
                setBusqueda(e.target.value);
             }} />

            <div style={{display: 'flex',}} >
                {frutasFiltradas.length === 0 && <p style={{color: 'rgb(232, 16, 128)',
                    fontSize: '20px',
                    fontWeight: 'bold',
                }}>No se encontraron frutas con el nombre: {busqueda}</p>}
                {frutasFiltradas.map((fruta) => {
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
