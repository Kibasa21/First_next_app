import Header from '@/components/header'; //Esse @ faz com que o caminho seja relativo a pasta src, nesse caso a pasta first-next-app
import Link from 'next/link';

export default function Home() {//Esse page.js é executado no servidor, no momento que a página é carregada não no cliente. Next.js faz isso para melhorar a performance.
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href='/about'>About us</Link></p>
    </main>
  );
}
