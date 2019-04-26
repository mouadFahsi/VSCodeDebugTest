import Axios, { AxiosError, AxiosResponse } from "axios";

export default class ApiService {
  private REST_URL = "https://jsonplaceholder.typicode.com/";

  public async getAllData() {
    try {
      const response = await Axios.get(`${this.REST_URL}photos`);
      return response;
    } catch (error) {
      const err = error as AxiosError;
      return err.response as AxiosResponse;
    }
  }

  public async getAlbum(id: any) {
    try {
      const response = await Axios.get(`${this.REST_URL}photos/${id}`);
      return response;
    } catch (error) {
      const err = error as AxiosError;
      return err.response as AxiosResponse;
    }
  }
}
