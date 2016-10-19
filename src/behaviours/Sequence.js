import Behaviour from './Behaviour';
import { ACTION_RESULT } from '../constant';

export default class Sequence extends Behaviour {
    actionRun() {
        if(this.runningIndex >= this.actions.length) {
            return ACTION_RESULT.SUCCESS;
        }

        let result = this.actions[this.runningIndex].tick();

        switch (result) {
            case ACTION_RESULT.SUCCESS:
                this.runningIndex ++;
                return ACTION_RESULT.PENDING;
            case ACTION_RESULT.FAILED:
                return ACTION_RESULT.FAILED;
            default:
                return ACTION_RESULT.PENDING;
        }
    }
}
