import React, { useState } from 'react'
import { Card ,Button, Divider,Form, Typography,Input} from "antd";
const{Title,Text}=Typography
import { loginUser,registerUser } from '../../api/authApi';

const Login = () => {
    let [isLogin,setisLogin]=useState(true)

    // functon to handle login user and register user
    const handleFinish=async(values)=>{
        console.log("Form values submitted:", values);        
        try {
            if (isLogin) {
                // login logic
                let response= await loginUser(values.email,values.password)
                if(response.token){
                    localStorage.setItem("token",response.token)
                    localStorage.setItem("user",JSON.stringify(response.user))

                    // role base login...
                }

            }else{
                // register login
                // adding role (dealer, admin or customer) to the new user
                let newUser = {
                    ...values,//username,email, password
                    role:"public",  //add default role
                    isActive:true

                }
                await registerUser(newUser)

            }
        } catch (error) {
            console.log("error", error.message || "")
            
        }
    } 


  return (
    <div className='login-bg d-flex justify-content-center align-items-center'>
    <Card className='p-4 rounded shadow-lg w-100' style={{ maxWidth: 300 }}>
        <div className='text-center mb-3'>
            <Title level={3}>{isLogin? "Login to RiceWorls": "Register to Riceworls"}</Title>
            <Text type="secondary ">{isLogin? "sign in to shop the best rice": "Create your accout to get start"}</Text>
        </div>

        {/* form layouts start */}
        <Form layout='vertical' onFinish={handleFinish}>
            {!isLogin &&(
                // username start
                <>
                    <Form.Item  name="username" label="FullName" rules={[{ required: true, message: 'Please input your Username!' }]} >
                        <Input prefix={<i class = "bi bi-person" />} placeholder="Username" />
                    </Form.Item>
                </>)}
                {/* username end */}
                {/* email and password feild start */}
                <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your Email!' }]} >
                    <Input prefix={<i class = "bi bi-envelope" />} placeholder="email" />
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]} >
                    <Input prefix={<i class = "bi bi-lock" />} placeholder="password" />
                </Form.Item>
                {/* email and password feild end */}
 
                <Button type='primary' block htmlType="submit">{isLogin? "Login": "Register"} </Button>
    </Form>
    {/* form layouts end */}
        <Divider orientation='center'className='border-success'>OR</Divider>
        <Button type='link' block onClick={()=>setisLogin(!isLogin)} className='text-success fw-bold text-capitalize'>
            {!isLogin? "Already you have an account": "Don't have an account Register"}
        </Button>

    </Card>

    </div>
  )
}

export default Login