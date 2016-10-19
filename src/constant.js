export const ACTION_STATE = {
    READY: 0,
    TICKING: 1,
}

export const ACTION_RESULT = {
    PENDING: 0,
    FAILED: 1,
    SUCCESS: 2,
}

export const ACTION_TYPE = {
    ACTION: 0,
    SEQUENCE: 1,
    PARALLEL: 2,
    SELECTOR: 3,
    RANDOM: 4,
}
