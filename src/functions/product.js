import axios from "../axios/config";


export const getProducts = async (sort, order, page, perPage = 4) =>
    await axios.post(`/products`, {
        sort,
        order,
        page,
        perPage,
    });

export const getProductsCount = async () => await axios.get(`/products/total`);
