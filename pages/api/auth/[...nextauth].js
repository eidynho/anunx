import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials) {
        const res = await axios.post('http://localhost:3000/api/auth/signin', credentials)
        
        const user = res.data

        if (user) {
          console.log('CERTO')
          return user
        } else {
          console.log('ERRARARARARARARARRDO')
          throw '/auth/signin?i=1'
          //return null
        }

        
      }
    }),
  ],

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_TOKEN,
  },

  database: process.env.MONGODB_URI,
})