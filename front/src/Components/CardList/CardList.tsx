import React,{useEffect} from 'react';
import { State } from '../../Redux/types/index';
import { useDispatch, useSelector } from 'react-redux';
import './CardList.css'
import Card from '../Card/Card'
import {dounloadSitySagaAC} from '../../Redux/ActionCreators'

function CardList() {
const dispatch = useDispatch()
  const dounloadSitys = () => {
   dispatch(dounloadSitySagaAC())
  }
  useEffect(()=>{
    dounloadSitys()
  },[dispatch])


  const state = useSelector((state: State) => state);

  const sortArr = state.sitys.filter(el => 
    el.name.toUpperCase().includes(state.poisk.toUpperCase()))

  return (
    <div className="glavDiv">
     {state.sitys.length ? sortArr.sort((a,b) => a.order - b.order).map(el => <Card key={el._id} card={el}/>)
      : <div >список пуст</div>}
    </div>
  );
}

export default CardList;
