import axios from 'axios';

const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const isServer =  typeof window === 'undefined'

let baseURL = "http://localhost:8000/api"
if (!development)
    baseURL = "http://localhost:8000/api"

    const API = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
            "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" 
            }
    })
    
    API.interceptors.request.use(async config => {
    
        if (isServer) {
    
            const { cookies } = (await import('next/headers'))
                , token = cookies().get('token')?.value
    
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`
            }
        }
        else {
    
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`
            }
        }
    
        return config
    })
    
    export default API