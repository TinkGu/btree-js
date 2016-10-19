import { ACTION_STATE, ACTION_RESULT } from './constant';
import { isFunc } from './utils';

export default class Action {
    constructor(config={}, store) {
        // const { actionRun, actionStart, actionEnd, props } = config;
        Object.assign(this, config, {
            // actionRun, actionStart, actionEnd, props,
            state: ACTION_STATE.READY
        });
        this.getStore = item => item ? store[item] : { ...store };
        this.setStore = items => {
            Object.keys(items).forEach(item => {
                store[item] = items[item];
            });
            return store;
        };
    }

    tick() {
        if(this.state === ACTION_STATE.READY) {
            if(isFunc(this.actionStart)){
                this.actionStart();
            }
        }

        let result = isFunc(this.actionRun) ? this.actionRun() : undefined;

        if(result !== ACTION_RESULT.PENDING) {
            if(isFunc(this.actionEnd)){
                this.actionEnd();
            }
            this.state = ACTION_STATE.READY;
        }

        return result;
    }

    reset() {
        if(this.state !== ACTION_STATE.READY) {
            if(isFunc(this.actionEnd)){
                this.actionEnd();
            };
            this.state = ACTION_STATE.READY;
        }
    }
}
