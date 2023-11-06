import { http } from './http'

const API = {
    login: async (data) => await http.post("/users/authenticate", data),
    addProduct: async (data) => await http.post("/shoes/create", data),
    getBrand: async () => await http.get("/brands"),
    getListProduct: async () => await http.get("/shoes"),
    deleteProduct: async (id) => await http.delete(`/shoes/${id}`),
    getProductById: async (id) => await http.get(`/shoes/${id}`),
    updateProduct: async (id, data) => await http.put(`/shoes/${id}`, data),

    createOrder : async (data,token) => await http.post("/orders/create",data,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),

    getAllPayment: async () => await http.get("/orders/admin/get-all"),
    updatePayment: async (data) => await http.post("/orders/admin/update-status", data),
    getListBlog: async () => await http.get('/blogs'),
    addBlog: async (data, token) => await http.post("/blogs/create", data, {

        headers: {
            Authorization: `Bearer ${token}`
        }
    }),

    getPurchaseHistory: async (token) => await http.get("/orders",{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    ,
    deleteBlog: async (id) => await http.delete(`/blogs/${id}`),

    getPurchaseHistory: async (token) => await http.get('/orders/user',
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),

    getDetailPurchaseHistory : async (id) => await http.get(`/orders/detail/${id}`),

}

export default API