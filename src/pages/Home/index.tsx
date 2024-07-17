import Hero from '../../components/Home/Hero';
import CV from '../../components/Home/CV';

export default function Home() {
  return (
    <main className={'grid grid-cols-2 min-h-screen font-mono'}>
      <Hero />
      <CV />
    </main>
  );
}
