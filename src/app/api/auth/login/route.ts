import { NextApiRequest, NextApiResponse } from "next"

export const POST = async (req:any, res:NextApiResponse) => {
  const { email, password } = await req.json();

const options = {
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: email, password: password})
  };
 
  try {
        const response = await fetch(`${process.env.BASE_URL}/auth/login`, options);

    const data = await response.json();   
    return new Response(JSON.stringify(data));
  } catch (error) {  
    return new Response(`Failed to log user in \n ${error}`,{
        status: 500,
    });
  }
}