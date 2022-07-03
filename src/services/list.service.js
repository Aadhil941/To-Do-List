import { fetchWithBasic } from "./base.service";
import {APIConstants} from "../Constants";


export const getAllListHandler = async () => {

    const url = 'https://jsonplaceholder.typicode.com/todos';
    return fetchWithBasic(
        url,
        null,
        APIConstants.HTTP_GET
    );
};

export const getListHandler = async (id) => {

    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    return fetchWithBasic(
        url,
        null,
        APIConstants.HTTP_GET
    );
};
