import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get('refreshToken')?.value;
  const accessToken = req.cookies.get('accessToken')?.value;

  if (!accessToken && refreshToken) {
    try {
      const url = new URL('/auth/get-new-access-token', process.env.NEXT_PUBLIC_API_URL).toString();
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'refresh-token': refreshToken,
        },
      });

      const data = await response.json();
          
    
      if (response.ok && data.status === 0) {
        const newAccessToken = data.data.accessToken;
        const newRefreshToken = data.data.refreshToken;

        const res = NextResponse.next();
        res.cookies.set('accessToken', newAccessToken);
        res.cookies.set('refreshToken', newRefreshToken);

        return res;
      } else {
        return NextResponse.redirect(new URL('/auth/login', req.url).toString());
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/auth/login', req.url).toString());
    }
  }

  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL('/auth/login', req.url).toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/','/saved','/product', '/product/:id*'],
};
