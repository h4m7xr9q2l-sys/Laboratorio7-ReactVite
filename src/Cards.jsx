import { useState } from 'react';
const Cards = ({ nombre , imagen, onLike}) => {
  const [likes ,setLikes]= useState(0);

  const handleClick = ()=>{
    setLikes(likes + 1)
    onLike();
  }
   
  return (
    <div style={{ border:'1px solid #ccc', 
      padding: '20px',
      margin: '10px',
      borderRadius: '5px',
      alignItems: 'center',
      textAlign: 'center',
      borderColor: 'rgb(49, 87, 193)',


    }}> 
      <img src={imagen} alt={nombre} width="130px" height="130px" />
      <h3>{nombre}</h3>
      <button style ={{
        width: '100px',
        padding: '7px',
        margin: '10px',
        backgroundColor: 'rgba(11, 55, 27, 0.83)',
        border: 'none',
        borderRadius: '5px',
        color: 'white', 
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      onClick={handleClick}
      >

        Like {likes}
      </button>
      {likes >=3 && <p style={{color: 'rgba(196, 21, 21, 0.92)',}}>¡Me encanta esta fruta!</p>}
    </div>
  );
};

export default Cards;
