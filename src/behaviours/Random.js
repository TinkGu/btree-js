import Behaviour from './Behaviour';
import { ACTION_RESULT } from '../constant';
import { randomInt } from '../utils';

export default class Random extends Behaviour {
    actionStart() {
        let length = this.actions.length;
        this.runningIndex = length > 0 ? randomInt(0, length-1) : 0;
    }

    actionRun() {
        return this.actions[this.runningIndex].tick();
    }
}
