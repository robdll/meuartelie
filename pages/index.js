import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useSyncLanguage } from 'ni18n'

export default function Home() {
  const { t } = useTranslation('translations');
  const router = useRouter()
  useSyncLanguage(router.locale)

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Project></Project>
      <Services></Services>
      <Testimonial></Testimonial>
      <Subscribe></Subscribe>
      <Footer></Footer>
      <div className='footer__rights'>
        {t('footer.copyrights')}
        <br />
        Meu Arteliê {new Date().getFullYear()} 
      </div>
    </div>
  );
}
