

import React from "react";
import styles from '../../styles/ServicesDetail.module.scss'
import Image from 'next/image'

const ServicesDetail = _ => (
    <div>
        <section id="art" className={`section ${styles.details}`} id="art"> 
            <h3 className={`title ${styles.title}`}>Mandala Art</h3>
            <span className={`separator ${styles.separator}`}> </span>
            <div className={styles.image__container}>
                <Image
                    className="videoplaceholder"
                    src="/png/videocover.png"
                    alt="Art Service image"
                    width={312}
                    height={300}
                />
            </div>
            <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
                Receba seu portal dimensional na sua casa. As mandalas sob encomenda são itens exclusivos feitos com base numa conversa de uma hora realizada contigo, aonde vamos cons conhecer e eu posso perceber sua energia. Vou compreender o que você está sentindo, vivendo, o que deseja atrair. É um processo de anamnese, aonde nem sempre as cores que você mais gosta serão as mais indicadas para o momento em que você está vivenciando. 
            </p>
            <br />
            <p className={`paragraph ${styles.paragraph}`}>
                Assim, esta conversa ajuda a orientar a minha intuição para materializar seu portal dimensiona usando a Geometria Sagrada, o poder dos números, das formas e cores. Você receberá, alé da mandala, uma descrição completa das energias da mesma, além de indicaão de quais espaços da casa são mais indicados para colocar seu portal energético na sua casa com base no Feng Shui.       
            </p>
            <br />
            <p className={`paragraph ${styles.paragraph} ${styles.fstart}`}>Invista na quallidade energética do seu lar.</p>
            <div className={`btn ${styles.spacer}`}>Compre Agora</div>
        </section>

        <section id="courses" className={`section ${styles.details}`} >
            <h3 className={`title ${styles.title}`}>Video Aula</h3>
            <span className={`separator ${styles.separator}`}> </span>
            <div className={styles.image__container}>
                <Image
                    className="videoplaceholder"
                    src="/png/videocover.png"
                    alt="Art Service image"
                    width={312}
                    height={300}
                />
            </div>
            <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
                O método de ensino foi desenvolvido por mim para funcionar com a maior comodidade para a sua rotina em tempos de pandemia e isolamento social. Existe uma enorme quantidade de aulas divididas em blocos de 4 vídeos que serão montadas conforme seu interesse, necessidade ou nível técnico. Cada aula possui um desafio a ser cumprido e somente após a finalização do desafio é que o próximo vídeo pode ser acessado. 
            </p>
            <br />
            <p className={`paragraph ${styles.paragraph}`}>
                Faço acompanhamento via whatsApp de todo o processo, dando sugestões e apoio na evolução. As aulas são pensadas para ensinar formas e efeitos com lápis de cor e alguns outros materiais com o intuito de auxiliar no aprimoramento de um estilo próprio do artista, de maneira que seu estilo seja sempre único!
            </p>
            <div className={`btn ${styles.spacer}`}>Compre Agora</div>
        </section>

        <section id="reading" className={`section ${styles.details}`}>
            <h3 className={`title ${styles.title}`}>Leitura e Interpretação</h3>
            <span className={`separator ${styles.separator}`}> </span>
            <div className={styles.image__container}>
                <Image
                    className="videoplaceholder"
                    src="/png/videocover.png"
                    alt="Art Service image"
                    width={312}
                    height={300}
                />
            </div>
            <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
                Você pode ainda não perceber, mas as mandalas falam muito sobre as energias do artista quando este estava desenhando. As mandalas para serem lidas e interpretadas devem ser mandalas feitas pelo consulente para si mesmo. A partir desta leitura, indico que tipo de formas, cores e práticas precisam ser incorporadas para equilibrar as energias, caso estas estejam desequilibradas e retirar conselhos para como lidar com a situação vivida.
            </p>
            <br />
            <p className={`paragraph ${styles.paragraph}`}>
                Se você já desenha por encomenda, ou para presentear as pessoas, essa é uma oportunidade de valorizar sua arte. Encomende já sua leitura. Você receberá uma descrição aprofundada das energias da mandala, levando em consideração as cores, formas, geometrias, números e sua disposição na mandala. Utilizo conhecimentos da numerologia, geometria sagrada, Yin e Yang e Feng Shui para construir um relatório completo para você! Com este relatório você poderá enviar junto com a mandala a descrição das energias que ela manifesta, fazendo uma interpretação pessoal de como aquele relatório dialoga com a vida da pessoa a quem a mandala se destina. Este relatório será um guia, mas sua intuição, no final, é quem faz o maior trabalho!
            </p>
            <div className={`btn ${styles.spacer}`}>Compre Agora</div>
        </section>

        <section id="selfknowledge" className={`section ${styles.details}`}>
            <h3 className={`title ${styles.title}`}>Autoconhecimento</h3>
            <span className={`separator ${styles.separator}`}> </span>
            <div className={styles.image__container}>
                <Image
                    className="videoplaceholder"
                    src="/png/videocover.png"
                    alt="Art Service image"
                    width={312}
                    height={300}
                />
            </div>
            <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
                São cursos realizados ao vivo por Conferência em formato de workshop. Com um ou dois dias de duração, foram pensados para +rp+iciar o aprofundamento da compreensão energética das Mandalas como tecnologias de cura. Para compreender esta Tecnologia é preciso, como com qualquer tecnologia, compreender seu funcionamento-. Os elementos que compõem a tecnologia e, principalmente, o seu uso. Temas dos Eventos:
            </p>
            <ul className={`paragraph ${styles.paragraph}`}>
                <li>Numerologia e mandala´</li>
                <li> Geometria Sagrada e física quântica</li>
                <li>Cores na Mandala</li>
                <li>O para teoria das cores</li>
                <li>O para a fraternidade branca</li>
                <li>O para tradição chinesa</li>
                <li>O em conexão com os chakras</li>
            </ul>
            <p className={`paragraph ${styles.paragraph}`}>
                Estes eventos incluem apostila, vídeo extra promocional (técnica de desenho relacionada à temática), e acompanhamento da aprendizagem por whatsapp.        </p>
            <div className={`btn ${styles.spacer}`}>Compre Agora</div>
        </section>

    </div>
);

export default ServicesDetail;


