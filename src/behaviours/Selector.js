import Behaviour from './Behaviour';
import { ACTION_RESULT } from '../constant';

export default class Selector extends Behaviour {
    actionRun() {
        if(this.runningIndex >= this.actions.length) {
            return ACTION_RESULT.FAILED;
        }

        let result = this.actions[this.runningIndex].tick();

        switch (result) {
            case ACTION_RESULT.SUCCESS:
                return ACTION_RESULT.SUCCESS;
            case ACTION_RESULT.FAILED:
                this.runningIndex ++;
                return ACTION_RESULT.PENDING;
            default:
                return ACTION_RESULT.PENDING;
        }
    }
}
