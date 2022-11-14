import axios from "axios";

export const getPeople = () => axios.get("/api/people");
export const getPerson = (id) => axios.get("/api/people/" + id);
export const updatePerson = (id, data) => axios.put("/api/people/" + id, data);
