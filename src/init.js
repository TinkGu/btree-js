import Action from './Action';
import { Behaviour, Sequence, Parallel, Random, Selector } from './behaviours';
import { ACTION_TYPE } from './constant';

export default function init(config={}, store={}) {
    switch (config.type) {
        case ACTION_TYPE.ACTION:
            return new Action(config, store);
        case ACTION_TYPE.SEQUENCE:
            return new Sequence(config, store);
        case ACTION_TYPE.PARALLEL:
            return new Parallel(config, store);
        case ACTION_TYPE.RANDOM:
            return new Random(config, store);
        case ACTION_TYPE.SELECTOR:
            return new Selector(config, store);
        default:
            console.log('error');
    }
}
