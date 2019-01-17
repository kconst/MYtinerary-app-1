import { POST_COMMENT, FETCH_COMMENT } from "./types";
import axios from "axios";

export const postComment = ourcomment => dispatch => {
  axios.post("/api/postComment", ourcomment).then(response =>
    dispatch({
      type: POST_COMMENT,
      payload: response.data
    })
  );
};

export const fetchComment = id => dispatch => {
  console.log("fetch comment activity");
  console.log(id);
  axios.get(`/api/postComment/${id}`).then(response => {
    console.log(response.data);
    dispatch({
      type: FETCH_COMMENT,
      payload: response.data
    });
  });
};

// /api/postComment/${id}
// export const fetchComment = (userName, id, city, title, comment) => ({
// const newComment = {
// id: id,
//     userName: userName,
//     city: city,
//     title: title,
//     comment: comment
// }
// newComment.date = new Date().toISOString();

// })
