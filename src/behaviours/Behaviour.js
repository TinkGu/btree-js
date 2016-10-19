import Action from '../Action';
import init from '../init';

export default class Behaviour extends Action {
    constructor(config={}, store) {
        super({ props: config.props || {} }, store);
        this.runningIndex = 0;
        this.actions = config.actions.map(action => init(action, store));
    }

    actionStart() {
        // this.runningIndex = 0;
    }

    actionEnd() {
        this.actions.forEach(action => action.reset())
    }
}
