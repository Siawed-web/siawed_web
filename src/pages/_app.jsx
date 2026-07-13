import "../styles/globals.scss";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router, { useRouter } from "next/router";
import Head from "next/head";


import { ToastContainer } from "react-toastify";
import Layout from "@/components/layout/layout";
import { FONTS } from "@/styles/fonts";
import LoadingScreen from "@/components/ui/loading_screen/loading_screen";


export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const isHome = router.pathname === "/";

  useEffect(() => {
    // ----------- Progress ----------------------
    const handleStart = (...params) => NProgress.start(params);
    const handleStop = () => NProgress.done();

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);
    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    };
  }, []);

  useEffect(() => {
    // Determine if we need to show the loader based on the initial route
    const delay = router.pathname === "/" ? 1400 : 0;
    
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Initialize AOS *after* the loader disappears
      // This ensures animations are visible to the user
      Aos.init({
        duration: 1000,
        once: false,
      });
    }, delay);

    return () => clearTimeout(timer);
  }, []); // Run once on mount

  // Refresh AOS on route changes to ensure new page elements animate properly
  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => {
        Aos.refresh();
      }, 100);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`${FONTS.font1} `}>
        {/* Loader is an overlay, layout renders behind it ensuring perfect SEO */}
        {isHome && loading && <LoadingScreen />}

        
        
        {router.pathname.startsWith('/admin') ? (
          <>
            <Component {...pageProps} />
            <ToastContainer position="bottom-right" />
          </>
        ) : (
          <Layout>
            <Component {...pageProps} />
            <ToastContainer position="bottom-right" />
          </Layout>
        )}
      </main>
    </>
  );
}
