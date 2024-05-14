import { fetcher } from '@/helpers/utils';
import { headers } from "next/headers";
import Header from '@/components/Header';
import './globals.scss';
import Preheader from '@/components/Preheader';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'USD Charonne',
  description: 'Club de basket - Paris 20',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dataPreheader = await fetcher('/annonces', {
    next: { revalidate: 3600 },
  });
  const heads = headers()
  
  return (
    <html lang="fr">
      <body>
        <Preheader data={dataPreheader?.data} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
