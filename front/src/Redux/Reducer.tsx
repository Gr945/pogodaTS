import {State, ActionsSity, SitysType} from './types/index'

const initState:State = {
  sitys:[],
  poisk:'',
  startDrog:{
    _id:'',
    name:'',
    icon:'',
    country:'',
    temp:0,
    tempMin:0,
    tempMax:0,
    speed:0,
    visibility:'',
    order:0
  }
}

export const reducer = (
 state:State = initState,
  action: ActionsSity
) => {
  switch (action.type) {
    case 'DOUNLOAD_SITY':
      return {...state,sitys:action.payload}
    case 'ADD_SITY':
      return { ...state,sitys:[...state.sitys, action.payload] };
      case 'DELETE_SITY':
        return { ...state,sitys:state.sitys.filter( el => el._id !== action.payload) };
        case 'POISK_SITY':
          return { ...state,poisk:action.payload };
 case 'DROP_SITY':
   const {card1Id,
    order1, card2Id, order2} = action.payload
   return {...state,sitys: state.sitys.map(el => {
     if(el._id == card1Id){
         return {...el, order: order2}
       }
     if(el._id == card2Id){
    return { ...el, order:order1}
  }
  return el
   })}

   case'START_DROG':
   return {...state, startDrog:action.payload}
    default:
      return {...state};
  }
};
