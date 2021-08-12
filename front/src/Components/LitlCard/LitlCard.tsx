import React from 'react';
import './LitlCard.css'
import { useDispatch, useSelector} from 'react-redux';
import {deleteSitySagaAC, dropSagaAC, drogStartSagaAC} from '../../Redux/ActionCreators'
import { SitysType, State } from '../../Redux/types';

function LitlCard({card}:{card:any}) {
  const drogStartSity = useSelector((state: State) => state.startDrog);

 
  const dispatch = useDispatch()

  const deleteCard = (id:string) => {
    dispatch(deleteSitySagaAC(id))
  }



  function startDrag (e:any, car:any) {
    dispatch( drogStartSagaAC (car))
    console.log('start', car)
    }

  function leaveDrag (e:any) {

}

function endDrag (e:any) {
  e.target.style.background = 'white'
}

function overDrag (e:any) {
  e.preventDefault()
  e.target.style.background = 'lightbraun'
}

function drop (e:any, cardEnd:SitysType) {
e.preventDefault()
dispatch(dropSagaAC( drogStartSity._id, drogStartSity.order, card._id,card.order))

}



  return (
    <div
     className="divCard card" style={{width:'300px', cursor:'grab'}}>
      <img 
      draggable={true} 
      onDragStart={(e)=> startDrag(e,card)}     //слушатель когда берем
      onDragLeave={(e)=> leaveDrag(e)}         //срабатывает если вышли за пределы др карты
      onDragEnd={(e) => endDrag(e)}           //конец
      onDragOver={(e) => overDrag(e)}          //если находимся над др обьектом
      onDrop={(e) => drop(e,card)}       
      style={{width:'30px', height:'30px', marginTop:'3px'}} 
        src=" https://img.icons8.com/fluency/2x/move.png" />
      <h4 className="card-title">{card.name},{card.country}</h4>
      <img style={{width:'22px', height:'22px', marginTop:'3px'}} onClick={() => deleteCard(card._id)}
        src="https://img1.freepng.ru/20180711/w/kisspng-computer-icons-clip-art-delete-image-icon-5b45dc968044a7.2494180515313051105254.jpg" />
    </div>
  );
}

export default LitlCard;
