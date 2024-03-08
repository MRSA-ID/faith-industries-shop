import { AppProps } from "next/app";
// import "../styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { motion, AnimatePresence } from "framer-motion"
import PlausibleProvider from "next-plausible";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import { Inter } from "next/font/google";
import { type FC, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { flowbiteTheme } from "../ts/theme";
import "../styles/globals.css";
import type { NextPageWithLayout } from '@/ts/NextPageWithLayout'
import { useRouter } from "next/router";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const NEXT_PUBLIC_WEBSITE_DOMAIN = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;
if (NEXT_PUBLIC_WEBSITE_DOMAIN == null) {
  throw new Error("NEXT_PUBLIC_WEBSITE_DOMAIN is not set");
}

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = React.useState(() => new QueryClient());
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  return (
    <>
      <div 
      className={
        twMerge("bg-gray-50 dark:bg-gray-900", inter.className)
        }
      >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <PlausibleProvider domain={NEXT_PUBLIC_WEBSITE_DOMAIN}>
          <Flowbite theme={{ theme: flowbiteTheme }}>
            {getLayout(
              <AnimatePresence mode="wait" initial={true}>
              <motion.div key={router.pathname}>
                <Component {...pageProps} />
              </motion.div>
              <motion.div
                className="slide-in bg-gray-50 dark:bg-gray-900"
                initial={{scaleY:0}}
                animate={{scaleY:0}}
                exit={{scaleY: 1}}
                transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}
              ></motion.div>
              <motion.div
                className="slide-out bg-gray-50 dark:bg-gray-900"
                initial={{scaleY:1}}
                animate={{scaleY:0}}
                exit={{scaleY: 0}}
                transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}
              ></motion.div>
              </AnimatePresence>
            )}
          </Flowbite>
        </PlausibleProvider>
      </QueryClientProvider>
      </div>
    </>
  );
};

export default App;
