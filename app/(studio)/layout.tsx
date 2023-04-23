export const metadata = {
  title: 'FreeCodeCamp next-sanity',
  description: 'Learning project from FreeCodeCamp Next + Sanity',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
