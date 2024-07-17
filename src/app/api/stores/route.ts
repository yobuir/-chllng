import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export const GET = async (req: NextRequest) => {
    const cookieStore = cookies() 
    const accessToken =cookieStore.get('accessToken')?.value 
    if (!accessToken) { 
        return new Response(`Unauthorized`,{
                    status: 401,});
    }

    const url = new URL(`https://api.mark8.awesomity.rw/store`);

    const options = {
        method: req.method,
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    };

 try {
        const response = await fetch(url.toString(), options);
        const data = await response.json();
        
        return new Response(JSON.stringify(data));
    } catch (error) {
        if (error instanceof Error) {
            
            return new Response(`Failed to fetch product\n ${error.message}`,{
                    status: 500,
                });
        } else { 
            return new Response(`An unknown error occurred\n ${error}`,{
                    status: 500,
                });
        }
    }
}
