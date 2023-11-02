import { http } from './http'

const API = {
    login: async (data) => await http.post("/users/authenticate", data),
    addProduct: async (data) => await http.post("/shoes/create", data),
    getBrand: async () => await http.get("/brands"),
    getListProduct: async () => await http.get("/shoes"),
    deleteProduct: async (id) => await http.delete(`/shoes/${id}`),
    getProductById: async (id) => await http.get(`/shoes/${id}`),
    updateProduct: async (id, data) => await http.put(`/shoes/${id}`, data)
}

export default API