import './globals.css' //Importa o cc no layout pq é ele que engloba a page relacionada a ele, e todos os seus filhos, então o css é aplicado a todos os filhos.

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
