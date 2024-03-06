import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ThemeModeScript } from "flowbite-react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <ThemeModeScript/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
