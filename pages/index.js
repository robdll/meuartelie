import Head from 'next/head'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import InstagramFeed from './components/InstagramFeed'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Meuartelie </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO EDIT DESCRIPTION */}
        <meta name="description" content="MeuArtelie a mandala world" />
      </Head>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Project></Project>
      <Services></Services>
      <Testimonial></Testimonial>
      <Subscribe></Subscribe>
      <InstagramFeed feed={props.data}></InstagramFeed>
      <Footer></Footer>
      <div className="footer__rights"> 
        Todos os direitos reservados por Cintya Flores
        <br />
        Meu Arteliê 2021
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://v1.nocodeapi.com/meuartelie/instagram/jXuHsEtPDAnjfZZp?limit=5`)
  const data = await res.json()
  return { props: {data} }
}