import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {

    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };

  }

  render() {

    const stylesheets = [...this.props.styleTags];
    const inlineCss = stylesheets.reduce((inlineStyles, currentStylesheet) => currentStylesheet
      ? `${inlineStyles}${currentStylesheet.props.dangerouslySetInnerHTML.__html}`
      : inlineStyles
    , '');

    return (
      <Html>
        <Head>
          <style amp-custom>
            {inlineCss}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );

  }
}