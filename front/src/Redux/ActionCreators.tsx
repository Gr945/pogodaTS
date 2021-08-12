import {addSitySagaAction, addSityAction,
   dounloadSitysSagaAction, dounloadSitysAction, SitysType,
   deleteSitysSagaAction,deleteSitysAction,
   poiskSitySagaAction,poiskSitysAction,
   dropSitySagaAction,dropSitysAction, drogStartSagaAction, drogStartAction} from "./types/index"


//add sity Action Creators
export const addSitySagaAC = (name: string): addSitySagaAction => ({
  type: "ADD_SITY_SAGA",
  payload:
   name
  
});

export const addSityAC = (newSity:SitysType): addSityAction => ({
  type: "ADD_SITY",
  payload: newSity,
});


//dounload sitys in back Action Creators
export const dounloadSitySagaAC = (): dounloadSitysSagaAction => ({
  type:'DOUNLOAD_SITY_SAGA'
  
});

export const dounloadSityAC = (arr:SitysType[]): dounloadSitysAction => ({
  type: 'DOUNLOAD_SITY',
  payload:arr,
});

//delete

export const deleteSitySagaAC = (id:string): deleteSitysSagaAction => ({
  type:'DELETE_SITY_SAGA',
  payload:id
  
});

export const deleteSityAC = (_id:string): deleteSitysAction => ({
  type: 'DELETE_SITY',
  payload:_id,
});

//poisk

export const poiskSitySagaAC = (name:string): poiskSitySagaAction => ({
  type:'POISK_SITY_SAGA',
  payload:name
  
});

export const poiskSityAC = (name:string): poiskSitysAction => ({
  type: 'POISK_SITY',
  payload:name,
});

//drop

export const dropSagaAC = (card1Id:string,
  order1:number, card2Id:string, order2:number): dropSitySagaAction => ({
  type:'DROP_SITY_SAGA',
  payload:{card1Id,
    order1, card2Id, order2}
  
});

export const dropAC = (card1Id:string,
  order1:number, card2Id:string, order2:number): dropSitysAction => ({
  type: 'DROP_SITY',
  payload:{card1Id,
    order1, card2Id, order2}
});


//start drog
export const drogStartSagaAC = (card:SitysType): drogStartSagaAction => ({
  type:'START_DROG_SAGA',
  payload:card
  
});

export const drogStartAC = (card:SitysType): drogStartAction => ({
  type:'START_DROG',
  payload:card
  
});
