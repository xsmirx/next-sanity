import './globals.css';

export const metadata = {
  title: 'FreeCodeCamp next-sanity',
  description: 'Learning project from FreeCodeCamp',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
