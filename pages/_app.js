import { IdProvider } from "../context/idContext"

const MyApp = ({ Component, pageProps }) => {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  ) 
}

export default MyApp
