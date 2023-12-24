import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";
import { sendRequest } from "@/utils/api";
import { Category } from "@mui/icons-material";
import { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
    secret: process.env.NO_SECRET,
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
    ],
    callbacks: {
      async jwt({ token, user, account, profile, trigger }){
        if(trigger === "signIn" && account?.provider === "github"){
          // TODO
          const res = await sendRequest<IBackendRes<JWT>>({
            url: "http://localhost:8000/api/v1/auth/socail-media",
            method: "POST",
            body: { type: "GITHUB", username: user.email },
          });
          if(res.data){
            token.access_token = res.data?.access_token
          }
        }
        return token;
      },
      session({ session, token, user }){
        
        // session.user.hoidanit = "token.address";
        return session;
      }
    }
  }

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }