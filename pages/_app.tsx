import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Capybaba Deluxe</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            orange: [
              "#fff5e6",
              "#ffe8cc",
              "#ffd8a8",
              "#ffc078",
              "#ffa94d",
              "#ff922b",
              "#fd7e14",
              "#f76707",
              "#e8590c",
              "#d9480f",
            ],
          },
          primaryColor: "orange",
          colorScheme: "light",
        }}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
