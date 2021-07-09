/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Kernun                                                     *
\************************************************************/

import { all, call } from 'redux-saga/effects';




const workerWrapper = function* (effect: any ) { //For the sake of simplicity using any on effects,
    try {
        yield all([ effect ]);
    } catch (error) {
        console.error(error);
    }
};

const wrapSaga = (effect: any ) => //For the sake of simplicity using any on effects,
    call(workerWrapper, effect);


const combineSagas = (...sagas: Array<any>) => //For the sake of simplicity using any on effects,
    function* () {
        const effects = Array.prototype.concat.apply([], sagas).filter(effect => effect);
        for (const effect of effects) {
            if (!effect['@@redux-saga/IO']) {
                console.log('effect', effect); // eslint-disable-line no-console
                throw new TypeError(effect + ' is not a redux saga effect');
            }
        }
        console.log(effects[0])
        yield all(effects.map(wrapSaga));
    };

export default combineSagas;


export const transformIntoNormalizedVersion = (data: any) => {
    const byId: any = {}
    for(const index in data) {
        byId[data[index].id]= data[index]
    }
    return {
        ids: data.map((item: any) => item.id),
        byId: byId
    }
}
