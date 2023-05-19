import { NextRequest, NextResponse } from "next/server";

const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

export function middleware(req: NextRequest) {
    const token  = req.cookies.get('token')?.value

    if (!token) {
        return  NextResponse.redirect(signInUrl,{
            headers: {
                'Set-Cookie': `redirect_to=${req.nextUrl}; Path=/; HttpOnly; max-age=20;`,            
            }
            
        })
        
    }

    return NextResponse.next()

}

export const config = {
    matcher: "/memories/:path*",
}