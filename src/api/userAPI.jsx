import instance from "./instance";

export const addUser = (user) =>{
    const url ="/users";
    return instance.post(url, user);
}