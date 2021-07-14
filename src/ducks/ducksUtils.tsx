/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Kernun                                                     *
\************************************************************/

import { all, call } from 'redux-saga/effects';

import { singleUser } from './users/usersInterfaces';
import { singlePost } from './posts/postsInterfaces';

//For the sake of simplicity using any on effects,
const workerWrapper = function* (effect: any) { //eslint-disable-line
    try {
        yield all([ effect ]);
    } catch (error) {
        console.error(error); //eslint-disable-line
    }
};
//For the sake of simplicity using any on effects,
const wrapSaga = (effect: any) =>  //eslint-disable-line
    call(workerWrapper, effect);

//For the sake of simplicity using any on effects,
const combineSagas = (...sagas: Array<any>) => //eslint-disable-line
    function* () { //eslint-disable-line
        const effects = Array.prototype.concat.apply([], sagas).filter(effect => effect);
        for (const effect of effects) {
            if (!effect['@@redux-saga/IO']) {
                console.log('effect', effect); // eslint-disable-line no-console
                throw new TypeError(effect + ' is not a redux saga effect');
            }
        }
        yield all(effects.map(wrapSaga));
    };

export default combineSagas;

//For the sake of simplicity
export const transformIntoNormalizedVersion = (data: any) => { //eslint-disable-line
    const byId: any = {}; //eslint-disable-line
    for (const index in data) {
        byId[data[index].id] = data[index];
    }
    return {
        ids: data.map((item: singlePost | singleUser) => item.id),
        byId: byId
    };
};
