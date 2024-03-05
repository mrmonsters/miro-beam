import React, { PropsWithChildren } from 'react';
import Script from 'next/script';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/mirotone@^5/dist/styles.css" />
      </head>
      <body>
        <Script src="https://miro.com/app/static/sdk/v2/miro.js" strategy="beforeInteractive" />
        <div id="root">
        {children}
        </div>
      </body>
    </html>
  );
}
