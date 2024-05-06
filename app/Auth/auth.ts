import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "@auth/core/providers/credentials";
export const { handlers: {GET, POST}, auth, signIn, signOut} = NextAuth({
	providers: [
		// CredentialsProvider({
		// 	name: "Credentials",
		// 	credentials: {
		// 		email: {
		// 			label: "Email",
		// 			type: "email",
		// 		},
		// 		password: { label: "Password", type: "password" },
		// 	},
		// 	async authorize(credentials, req) {
		// 		const resp = await fetch(`${process.env.BASE_URL}user/login/`, {
		// 			method: "POST",
		// 			headers: {
		// 				Accept: "application/json",
		// 				"Content-Type": "application/json",
		// 			},
		// 			body: JSON.stringify({
		// 									email: "vannraruos@gmail.com",
		// 									password: "Qwerty@123",
		// 			}),
		// 		});
		// 		const res = await resp.json();

		// 		console.log("Data from login:", res);

		// 		// res.accessGitToken = undefined;
		// 		if (resp.ok && res){
		// 			return {
		// 				name: res.refresh_token, email: res.access_token,
		// 			};
		// 		}
		// 		if (!res.ok) {
		// 			throw new Error(JSON.stringify(res));
		// 		}
		// 		return null
		// 	}
		// }),

		GithubProvider({
			clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
			clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
		}),


	],

	callbacks: {
		async session({ session, token, user }) {
			console.log('Session:', session);
			console.log('Token:', token.email);
			console.log('User:', user);

			// Send properties to the client, like an access_token and user id from a provider.
			// session.accessToken = token.accessToken
			// session.user.id = token.id

			return session
		}
	}
})

