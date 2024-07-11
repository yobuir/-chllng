// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get('refreshToken')?.value;
  const accessToken = req.cookies.get('accessToken')?.value;
  if (!accessToken && refreshToken) {
    
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/get-new-access-token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'refresh-token': refreshToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 0) {
          const newAccessToken = data.data.accessToken;
          const newRefreshToken = data.data.refreshToken;

          const res = NextResponse.next();
          res.cookies.set('accessToken', newAccessToken);
          res.cookies.set('refreshToken', newRefreshToken);

          return res;
        } else { 
          return NextResponse.redirect('/auth/login');
        }
      })
      .catch(() => { 
        return NextResponse.redirect('/auth/login');
      });
  }

  if (!accessToken && !refreshToken) {
    return NextResponse.redirect('/auth/login');
  }

  return NextResponse.next();
}
 
export const config = {
  matcher: ['/'],
};
