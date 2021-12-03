import instance from "./instance";

export const listProduct = () => {
    const url = "/products";
    return instance.get(url);
}

export const getProduct = (id) => {
    const url = "/products/"+ id;
    return instance.get(url);
}

export const createProduct = (product) => {
    const url="/products";
    return instance.post(url,product);
}

export const deleteProduct = (id) => {
    const url = "/products/" + id;
    return instance.delete(url);
}