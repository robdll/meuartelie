import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicesHeader from "../components/ServicesHeader";
import ServicesDetail from "../components/ServicesDetail";
import Subscribe from "../components/Subscribe";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar></Navbar>
      <ServicesHeader></ServicesHeader>
      <ServicesDetail></ServicesDetail>
      <ContactForm></ContactForm>
      <Subscribe></Subscribe>
      <Footer></Footer>
      <div className="footer__rights">
        {t("footerTermsTitle")}
        <br />
        {t("footerTermsSubtitle") + new Date().getFullYear()}
      </div>
    </div>
  );
}
