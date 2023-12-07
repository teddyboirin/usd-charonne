import Header from '@/components/Header';
export const metadata = {
  title: 'Next.js',
  description: 'Histoire',
};

export default function HistoireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
