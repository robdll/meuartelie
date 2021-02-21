import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServicesHeader from '../components/ServicesHeader'
import ServicesDetail from '../components/ServicesDetail'
import Subscribe from '../components/Subscribe'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <ServicesHeader></ServicesHeader>
      <ServicesDetail></ServicesDetail>
      <ContactForm></ContactForm>
      <Subscribe></Subscribe>
      <Footer></Footer>
      <div className="footer__rights"> 
        Todos os direitos reservados por Cintya Flores
      <br />
        Meu Arteliê 2021
      </div>

    </div>
  )
}
