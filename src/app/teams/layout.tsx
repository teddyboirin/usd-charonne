import Header from '@/components/Header';
export const metadata = {
  title: 'Next.js',
  description: 'Teams',
};

export default function TeamsLayout({
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
