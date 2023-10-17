import axios from ax

var BASE_API_URL = 'https://northwind.vercel.app/api';

export const  BaseService = {
    getAll: async (entityUrl) => {
        var responseData = [];
        axios.get(`${BASE_API_URL}`).then(res => {
            responseData = res.data();
        })
    },
    getById: async (entityUrl) => {

    },
    add: async (entityUrl) => {

    },
    delete: async (entityUrl) => {
        
    }
}