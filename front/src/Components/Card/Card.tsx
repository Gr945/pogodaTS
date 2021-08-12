import React from 'react';
import './Card.css'

function Card({card}:{card:any}) {
  return (
    
    <div className="card" style={{width:'18rem', marginTop:'15px'}}>
      <div className="list-group list-group-flush name">
        <h5 className="card-title">{card.name},{card.country}</h5>
      </div>
      <div className="card-body icon">
        <img src={"http://openweathermap.org/img/w/"+card.icon+".png"} className="card-img-top" alt={card.icon}/>
        <div className="list-group list-group-flush temp">
          {(card.temp-273).toString().slice(0,4)+'℃'}   
        </div>
      </div>
       <ul className="list-group list-group-flush">
         <li className="list-group-item">visibility: {card.visibility/1000} км</li>
         <li className="list-group-item">speed: ↖{card.speed} m/s SSE</li>
        </ul>
       <ul className="list-group list-group-flush">
          <li className="list-group-item">темп макс:   {(card.temp_max-273).toString().slice(0,4)+'℃'} </li>
          <li className="list-group-item">темп мин:   {(card.temp_min-273).toString().slice(0,4)+'℃'}</li>
       </ul>
   </div>
    
  );
}

export default Card;
