import Behaviour from './Behaviour';
import { ACTION_RESULT } from '../constant';

export default class Parallel extends Behaviour {
    actionRun() {
        if(this.runningIndex >= this.actions.length) {
            return ACTION_RESULT.SUCCESS;
        }

        if(this.actions[this.runningIndex].tick() !== ACTION_RESULT.PENDING) {
            this.runningIndex ++;
        }

        return ACTION_RESULT.PENDING;
    }
}
