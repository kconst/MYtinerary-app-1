import {ADD_COMMENT} from "./types";

export const addComment = (comment) =>  ({
    type: ADD_COMMENT,
    payload: comment

})