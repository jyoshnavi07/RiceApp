import { apiClient,mockAuth } from "./config";

// fuc=nction to handle login api
export const loginUser=async(email,password)=>{
    try{
        let res=await apiClient.get('/users',{
            params: {email}
        })

        // checking the user 
        console.log(res)
        // checking aleady the user email or user exist in the database
        let user = res.data.find(u=> u.email==email && u.password==password)

        // if user not exist throw an error
        if(!user){
            throw new Error("user email and password not found")
        }

        // geenrate the token if user exist
        let token=mockAuth.generateToken(user)

        // save the token and user in local storage
        localStorage.setItem('token',token)
        localStorage.setItem('user',JSON.stringify(user))
        return{user,token}
    }catch{
        return error
    }
}

// fuc=nction to handle register api
export const registerUser= async(newUser)=> {
    try{
         // checking already the user exist inthe db or not
        let res=await apiClient.get('/users',{
            params:{email:newUser.email}
        })
        console.log("User check response:", res.data); // Add this


        if(res.data.length>0){
            throw new Error("user already exist")
        }

        // creating new user
        let saveUser=await apiClient.post('/users',newUser)

        // geenrate the token if user exist
        let token=mockAuth.generateToken(saveUser.data)

        // save the token and user in local storage
        localStorage.setItem('token',token)
        localStorage.setItem('user',JSON.stringify(saveUser.data))

        return {user:saveUser.data,token}

    }catch(error){
        throw error
    }


}
// fuc=nction to handle logout api
export const logoutUser=()=>{
    localStorage.removeItem=('token')
    localStorage.removeItem=('user')
}