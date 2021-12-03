import instance from "./instance";

export const singin = (user) => {
    const url = '/signin';
    return instance.post(url,user); 
}