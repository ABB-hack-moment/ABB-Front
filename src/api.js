import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

//export const get_cafes = () => api.get("/cafe/view-map");

export const get_aeds = () => api.get("/aed/view-all");

// export const auth = (data) => axios.post("/hackathon/api/auth", data);

// export const save = (data, token) =>
//   axios.post("/hackathon/api/save", data, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
