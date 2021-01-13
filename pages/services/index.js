import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServicesHeader from '../components/ServicesHeader'
import ServicesDetail from '../components/ServicesDetail'
//import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meuartelie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar></Navbar>
      <ServicesHeader></ServicesHeader>
      <ServicesDetail></ServicesDetail>
      {/*}
      <Subscribe></Subscribe>
      <ContactForm></ContactForm>*/}
      <Footer></Footer>
      <div className="footer__rights"> 
        Todos os direitos reservados por Cintya Flores
        <br />
        Meu Arteliê 2021
      </div>

      {/*}
        <footer className={styles.footer}>
    </footer>*/}
    </div>
  )
}
