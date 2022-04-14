import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "semantic-ui-css/semantic.min.css";
import { MoralisProvider } from "react-moralis";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import Head from "next/head";
import ErrorBoundary from "@/containers/error/ErrorBoundary";
import ErrorFallback from "@/containers/error/ErrorFallback";
import "mapbox-gl/dist/mapbox-gl.css";

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {

  

  return (
    <>
      <Head>
        <title>Whatabyte - Decentralized Food Order</title>
        <meta
          name="description"
          content="Order food with your crypto coin and token"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <MoralisProvider
              appId={process.env.NEXT_PUBLIC_APP_ID}
              serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
              initializeOnMount="false"
            >
              <Component {...pageProps} />
            </MoralisProvider>
          </RecoilRoot>
        </QueryClientProvider>
      {/* </ErrorBoundary> */}
    </>
  );
}

export default MyApp;
