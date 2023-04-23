import getPages from '@/sanity/utils/getPages';
import Link from 'next/link';
import '../globals.css';

export const metadata = {
  title: 'FreeCodeCamp next-sanity',
  description: 'Learning project from FreeCodeCamp Next + Sanity',
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="container mx-auto max-w-3xl px-4 py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-lg font-bold text-transparent"
          >
            Ivan Smirnov
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map(page => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline ">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
