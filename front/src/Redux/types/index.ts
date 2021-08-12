import {ActionSitysType} from '../Actions'

export interface SitysType {
  _id:string,
  name:string,
  icon:string,
  country:string,
  temp:number,
  tempMin:number,
  tempMax:number,
  speed:number,
  visibility:string,
  order:number
}


export interface State {
  sitys:SitysType[],
  poisk:string,
  startDrog:SitysType
}


interface ActionSity {
  type: ActionSitysType;
}

export interface addSityAction extends ActionSity {
  type: 'ADD_SITY';
  payload: SitysType
}

export interface addSitySagaAction extends ActionSity {
  type: 'ADD_SITY_SAGA';
  payload: string
  
}
//dounload
export interface dounloadSitysAction extends ActionSity {
  type: 'DOUNLOAD_SITY';
  payload: SitysType[]
}

export interface dounloadSitysSagaAction extends ActionSity {
  type: 'DOUNLOAD_SITY_SAGA';
  
}
//delete
export interface deleteSitysAction extends ActionSity {
  type: 'DELETE_SITY';
  payload: string
}

export interface deleteSitysSagaAction extends ActionSity {
  type: 'DELETE_SITY_SAGA';
  payload:string
}
//poisk

export interface poiskSitysAction extends ActionSity {
  type: 'POISK_SITY';
  payload: string
}

export interface poiskSitySagaAction extends ActionSity {
  type: 'POISK_SITY_SAGA';
  payload:string
}
//drogBack

export interface dropSitysAction extends ActionSity {
  type: 'DROP_SITY';
  payload: {card1Id:string,
  order1:number, card2Id:string, order2:number}
}

export interface dropSitySagaAction extends ActionSity {
  type: 'DROP_SITY_SAGA';
  payload:{card1Id:string,
  order1:number, card2Id:string, order2:number}
}

//start drog

export interface drogStartAction extends ActionSity {
  type: 'START_DROG';
  payload: SitysType
}

export interface drogStartSagaAction extends ActionSity {
  type: 'START_DROG_SAGA';
  payload:SitysType
}


export type ActionsSity = addSityAction |dounloadSitysAction 
| deleteSitysAction |poiskSitysAction | dropSitysAction |drogStartAction
