import '../styles/globals.css'
import { Providers } from './Provider';
import AuthContextProvider from '../context/AuthContextProvider';
import Footer from '../components/Footer';
import React ,{ useState , useEffect } from "react"
// import LoadingScreen from '../components/pre_loader/loadingScreen';
// import {ToastContainer} from 'react-nextjs-toast';
import GuestContextProvider from "../context/GuestContext";
import Script from 'next/script';


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
			<Script src="https://cdn.tailwindcss.com" />
			{loading ? (
				<Providers>
					<AuthContextProvider>
						<GuestContextProvider>
							<Component {...pageProps} />
							{/* <ToastContainer align={"center"} position={"top"} id="toast-comp-3"/> */}
							<Footer />
						</GuestContextProvider>
					</AuthContextProvider>
				</Providers>
			) : (
			alert("helooo ")
			)}
		</>
	);
}

export default MyApp;