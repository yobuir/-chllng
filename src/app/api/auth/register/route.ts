import { NextApiRequest, NextApiResponse } from "next"

interface RegisterRequestBody {
    email: string;
    password: string;  
    firstName:string;
    lastName:string;
    phoneNumber: string;
}
 

export const POST = async (req:any, res:NextApiResponse) => {
  const { email, password,firstName,lastName,phoneNumber } = await req.json() as RegisterRequestBody;

const options = {
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: email, password: password, firstName:firstName,lastName:lastName,phoneNumber:phoneNumber})
  };
 
  try {
        const response = await fetch(`${process.env.BASE_URL}/auth/signup`, options);

    const data = await response.json();   
    return new Response(JSON.stringify(data));
  } catch (error) {  
    return new Response(`Failed to create user in \n ${error}`,{
        status: 500,
    });
  }
}