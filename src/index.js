import { ACTION_RESULT, ACTION_TYPE } from './constant';
export { default as init } from './init';
export { ACTION_RESULT };

export function createAction(config={}) {
    return (props={}) => ({
        ...config,
        props: { ...config.defaultProps, ...props },
        type: ACTION_TYPE.ACTION,
    });
}

export const sequence = (createFunc) => createBehaviour(ACTION_TYPE.SEQUENCE, createFunc);
export const parallel = (createFunc) => createBehaviour(ACTION_TYPE.PARALLEL, createFunc);
export const random = (createFunc) => createBehaviour(ACTION_TYPE.RANDOM, createFunc);
export const selector = (createFunc) => createBehaviour(ACTION_TYPE.SELECTOR, createFunc);

function createBehaviour(type, createFunc) {
    return (props={}) => ({
        type,
        actions: createFunc(props),
        props,
    });
}
