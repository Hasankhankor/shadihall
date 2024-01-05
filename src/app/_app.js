import '../styles/globals.css'
import { Providers } from './Provider';
import { ChakraProvider } from '@chakra-ui/react';
import AuthContextProvider from '../context/AuthContextProvider';
import Footer from '../components/Footer';
import React ,{ useState , useEffect } from "react"

import GuestContextProvider from "../context/GuestContext";
import Script from 'next/script';
import LoadingScreen from '../Components/pre_loader/loadingScreen';

function MyApp({ Component, pageProps }) {

  // ************pre loader start*************

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    },2000);
  }, []);
  // ************pre loader end*************


  return (
<>
    {loading?
      (<ChakraProvider>
      <AuthContextProvider>
          <GuestContextProvider>
      <Component {...pageProps} />
      {/* <ToastContainer align={"center"} position={"top"} id="toast-comp-3"/> */}
      <Footer />
        </GuestContextProvider>
      </AuthContextProvider>
    </ChakraProvider>):( <LoadingScreen /> )
    }
  </>




	);
}

export default MyApp;