import instance from "./instance";

export const getModels = () => {
    const url = "/model";
    return instance.get(url);
}