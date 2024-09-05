import { fetcher } from '@/helpers/utils';
import { headers } from 'next/headers';
import Header from '@/components/Header';
import './globals.scss';
import Preheader from '@/components/Preheader';
import Footer from '@/components/Footer';
import Fv144 from '../../public/assets/favicons/fv144.png';
import Fv96 from '../../public/assets/favicons/fv96.png';
export const metadata = {
  title: 'USD Charonne',
  description: 'Club de basket - Paris 20',
  icons: {
    icon: Fv96.src,
    shortcut: Fv96.src,
    apple: Fv144.src,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: Fv144.src,
    },
  },
};
const maintenance = false;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dataPreheader = await fetcher('/annonces', {
    next: { revalidate: 0 },
  });
  const heads = headers();

  return (
    <html lang="fr">
      <body>
        {!maintenance ? (
          <>
            <Preheader data={dataPreheader?.data} />
            <Header />
            {children}
            <Footer />
          </>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
