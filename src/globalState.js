import { combineReducers } from "redux";
const ADD_POINTS = 'ADD_POINTS';
const RESET_POINTS = 'RESET_POINTS';
const BACK_POINTS = 'BACK_POINTS';
const ADD_INCIDENCE = 'ADD_INCIDENCE';
const REMOVE_INCIDENCE = 'REMOVE_INCIDENCE';
const RESET_INCIDENCE = 'RESET_INCIDENCE';
const ADD_GENRE = 'ADD_GENRE';
const ADD_DATA = 'ADD_DATA';

export function addPoints(points) {
    return {
        type: ADD_POINTS,
        points,
    }
}

export function resetPoints() {
    return {
        type: RESET_POINTS,
    }
}

export function backPoints() {
    return {
        type: BACK_POINTS,
    }
}

export function addIncidence(state) {
    return {
        type: ADD_INCIDENCE,
        state: state,
    }
}

export function removeIncidence() {
    return {
        type: REMOVE_INCIDENCE,
    }
}

export function resetIncidence() {
    return {
        type: RESET_INCIDENCE,
    }
}

export function addGenre(genre) {
    return {
        type: ADD_GENRE,
        genre: genre
    }
}

export function addData(data) {
    return {
        type: ADD_DATA,
        data: data
    }
}

const defaultPoints = ([]);
const defaultRecurrence = ([]);
const defaultData = ({
    genre:'',
    data:{},
});

function points(state=defaultPoints, action) {
    switch (action.type) {
        case ADD_POINTS:
            return [...state, action.points];
        case RESET_POINTS:
            return [];
        case BACK_POINTS:
            return state.slice(0, state.length - 1);
        default:
            return state;
    }
}

function incidence(state=defaultRecurrence, action) {
    switch (action.type) {
        case ADD_INCIDENCE:
            return [...state, action.state];
        case REMOVE_INCIDENCE:
            return state.slice(0, state.length - 1);
        case RESET_INCIDENCE:
            return [];
        default:
            return state;
    }
}

function data(state=defaultData, action) {
    switch (action.type) {
        case ADD_GENRE:
            return {
                ...state,
                genre: action.genre
            }
        case ADD_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

const vbgApp = combineReducers({
    points,
    incidence,
    data
});

export default vbgApp;