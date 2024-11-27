import {NextResponse} from "next/server";
import {getProfile} from "@/utils/utils";

export const middleware = async (request) => {
    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith('/user')){
        //check authentication
        const token = request.cookies.get('token')?.value;
        if(!token){
            return NextResponse.redirect(new URL("/auth/login", request.url));
        }
        //verify token
        const {success, user} = await getProfile(token);
        if(!success){
            return NextResponse.redirect(new URL("/auth/login", request.url));

        }


    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}