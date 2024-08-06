// app/layout.js
import { MantineProvider } from '@mantine/core';
import '../styles/globals.css';



export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
