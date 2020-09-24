import Head from 'next/head'
import React from "react"
import App from '../components/AppButton'
import AppButton from '../components/App'
import AppForm from '../components/AppForm'

export default function Index() {
   
  return (
          <div>
            
              <Head>
                  <title>NextJS-API-Routes-App</title>
              </Head>

              <h1>
                <App />
              </h1>

              <h1>
                <AppButton />
              </h1> 

              <h1>
                <AppForm />
              </h1>               
            </div> 
  )
}
