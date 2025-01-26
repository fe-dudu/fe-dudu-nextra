import { type DocumentProps, Head, Html, Main, NextScript } from 'next/document';

export default function Document(_props: DocumentProps) {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
