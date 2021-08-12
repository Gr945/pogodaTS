import { call, put, takeEvery} from 'redux-saga/effects';
import {fetchAddSitySaga} from './fetchAddSitySaga'
import {addSityAC, dounloadSityAC, deleteSityAC, poiskSityAC, 
  dropAC,drogStartAC} from './ActionCreators'
import {SitysType} from './types/index'
import {fetchAddSityBack} from './fetchAddSityBack'
import {fetchDounloadSitysSaga} from './fetchDounloadSitysSaga'
import {fetchDeleteSitySaga} from './fetchDeleteSitySaga'
import {fetchDropSitySaga} from './fetchDropSitySaga'

//add
export function* workerAddSity(action: {
  type: string;
  payload: string;
}) {
  try {
   
   const data:SitysType =  yield call(fetchAddSitySaga, action.payload);

    const backSity:SitysType = yield call(fetchAddSityBack,data)
 
   
    yield put(addSityAC(backSity));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}
//dounload
export function* workerDounloadSity(action: {
  type: string
}) {
  try {
   const dounloadSitysBack:SitysType[] =  yield call(fetchDounloadSitysSaga);
    yield put(dounloadSityAC(dounloadSitysBack));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}


//delete

export function* workerDeleteSity(action: {
  type: string,
  payload: string;
}) {
  try {
   const delSity:string =  yield call(fetchDeleteSitySaga,action.payload);
    yield put(deleteSityAC(delSity));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}


//poisk

export function* workerPoiskSity(action: {
  type: string,
  payload: string;
}) {
  try {
  
    yield put(poiskSityAC(action.payload));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

//drop

export function* workerDropSity(action: {
  type: string,
  payload: {card1Id:string,
    order1:number, card2Id:string, order2:number};
}) {
  try {
    const dropBack:boolean =  yield call(fetchDropSitySaga,action.payload.card1Id,
      action.payload.order1,
      action.payload.card2Id,action.payload.order2);
      if(dropBack){
    yield put(dropAC(action.payload.card1Id,action.payload.order1,action.payload.card2Id,action.payload.order2));
  }else{alert(false)}
}catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}
export function* workerDrogStartSity(action: {
  type: string,
  payload: SitysType}) {
  try {
    yield put(drogStartAC(action.payload));

}catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}
export function* watcher() {
  yield takeEvery('ADD_SITY_SAGA', workerAddSity);
  yield takeEvery('DOUNLOAD_SITY_SAGA', workerDounloadSity);
  yield takeEvery('DELETE_SITY_SAGA', workerDeleteSity);
  yield takeEvery('POISK_SITY_SAGA', workerPoiskSity);
  yield takeEvery('DROP_SITY_SAGA', workerDropSity);
  yield takeEvery('START_DROG_SAGA', workerDrogStartSity);
}
