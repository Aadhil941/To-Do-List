import {APIConstants} from "../Constants";

export const fetchWithBasic = async (
    url,
    params,
    method = APIConstants.HTTP_GET,
    headers = APIConstants.DEFAULT_HEADER,
  ) => {
  
    let options = {
      method,
      headers,
    };
  
    try
    {
      const response = await fetch(url, options);
      return Promise.resolve(response.json());
    }
    catch (error)
    {
      console.error("API Error : ", error);
      return Promise.reject(error);
    }
  }