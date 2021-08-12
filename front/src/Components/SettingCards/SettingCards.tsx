import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../Redux/types/index';
import './SettingCards.css'
import {addSitySagaAC} from '../../Redux/ActionCreators'
import { Container } from 'react-bootstrap';
import LitlCard from '../LitlCard/LitlCard';
import {dounloadSitySagaAC} from '../../Redux/ActionCreators'
function SettingCards() {
  const state = useSelector((state: State) => state);
 
  const dispatch = useDispatch()
  const addSity = (event:any) => {
    event.preventDefault()
   dispatch(addSitySagaAC(event.target.name.value))
   event.target.name.value=''
  }

  const dounloadSitys = () => {
    dispatch(dounloadSitySagaAC())
   }
  useEffect(()=>{
    dounloadSitys()
  },[dispatch])


  const sortArr = state.sitys.filter(el => 
    el.name.toUpperCase().includes(state.poisk.toUpperCase()))

  return (

  <Container>
     <div className='bivCard'>
       {sortArr.sort((a,b) => a.order - b.order).map(el => <LitlCard  key={el._id} card={el}/>)}
    </div>
  
    <form className='divInput' onSubmit={(e) => addSity(e)}>
          <div className="row mb-3 litl">
              <input placeholder='введите город'
                required
                name="name"
                type="string"
                className="form-control"
                id="inputEmail3"
              />
            </div>
          <button className="btn litl btn-primary animate__animated animate__lightSpeedInRight">
            Добавить
          </button>
        </form>
 </Container>
  );
}

export default SettingCards;
