import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Footer from '../../UI/Footer';

export default function CV() {
  return (
    <div className={'bg-secondary text-primary p-6 flex flex-col gap-6'}>
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}
