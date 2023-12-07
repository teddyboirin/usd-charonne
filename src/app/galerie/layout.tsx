import Header from '@/components/Header';
export const metadata = {
  title: 'Next.js',
  description: 'Galerie',
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}
