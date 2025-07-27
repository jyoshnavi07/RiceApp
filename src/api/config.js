import axios from "axios";



// creating a reusable instance for all api call end points

export const apiClient=axios.create({
    // we write our url in env file 
    baseURL:import.meta.env.VITE_BACKEND_BASE_URL,
    headers:{
        "Content-type": "application/json"
    }
})


// generating the token
// interceptor used to modify the request or response before handle main logic
apiClient.interceptors.request.use(
    (config) => {
        let token=localStorage.getItem("token")
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config

    },
    (error)=> Promise.reject(error)
)



// HANDLING THE RESPONSE 
apiClient.interceptors.response.use(
    (response)=> response,
    (error)=>{
        if(error.response?.status ==401){  // unauthorized user
            localStorage.removeItem("token")
            localStorage.removeItem("user") //optional
            window.location.href="/login"
        }
        return Promise.reject(error)
    }
)


// generating dummy token stimulaiton (actually it will be generated in backend)

export const mockAuth={
    generateToken:(user)=>{
        return `mock_auth ${user.id} _%{Date.now()}`
    }
}