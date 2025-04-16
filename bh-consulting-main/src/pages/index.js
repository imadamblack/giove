import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i00 from '../../public/landing/00.png';
import i01 from '../../public/landing/01.png';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/04.png';
import i05 from '../../public/landing/10.png';
import i06 from '../../public/landing/06.png';
import i07 from '../../public/landing/07.png';
import i08 from '../../public/landing/08.png';
import i09 from '../../public/landing/09.png';
import i10 from '../../public/landing/10.png';
import i11 from '../../public/landing/11.png';
import clientes1 from '../../public/landing/nuestros-clientes-a.jpg';
import clientes2 from '../../public/landing/nuestros-clientes-b.jpg';
import clientes3 from '../../public/landing/nuestros-clientes-c.jpg';
import clientes4 from '../../public/landing/nuestros-clientes-d.jpg';
import clientes5 from '../../public/landing/nuestros-clientes-e.jpg';
import ico01 from '../../public/landing/ico01.png';
import ico02 from '../../public/landing/ico02.png';
import ico03 from '../../public/landing/ico03.png';
import ico04 from '../../public/landing/ico04.png';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Regístrate, da clic',
    description: 'Programa una consultoría y diagnóstico de tu negocio gratuitos',
  };

  return (
    <>
      <section
        className="relative min-h-[60rem] md:min-h-[72rem] w-full flex flex-col md:justify-end items-center bg-brand-1">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-[24rem] md:h-[60rem] bottom-0 absolute bg-gradient-to-t from-brand-1 md:from-brand-2 via-transparent md:via-brand-1 to-transparent md:opacity-60 z-10"/>
          <Image src={i00} layout="fill" className="object-cover object-right"/>
        </div>

        <div className="container mt-auto w-full text-center z-50 p-8">
          <h1
            className="md:w-2/3 mx-auto relative ft-8 text-white [text-shadow:_1px_1px_0_rgb(0_0_0_/_20%)] md:[text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Certificarte en ISO, FSSC, SQF y otras normas, no tendría que ser difícil si capacitas adecuadamente a tu
            equipo
          </h1>
          <p className="ft-3 mt-4 mb-0 text-white">Consultoría y capacitación especializada en normas y
            certificaciones internacionales</p>
          <div className="flex flex-col justify-center items-center mt-12 md:text-white">
            {/*<Link href="#contact">*/}
            {/*  <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>*/}
            {/*</Link>*/}
            <p className="-ft-2 md:text-left">{cta.description}</p>
            <p className="material-icons animate-bounce"><span className="ft-9">expand_more</span></p>
          </div>

        </div>
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-2 my-16">
        <div className="relative">
          <Image src={i02} layout="fill" objectFit="cover"/>
        </div>
        <div className="reading-container">
          <p className="ft-2">
            En BH Consulting Group te ayudamos a capacitar a tu equipo en normas y certificaciones como ISO, FSSC, SQF,
            BRCGS, entre otras;
            <br/><br/>
            para que generes más confianza con tus proveedores y clientes y te elijan a ti antes que a la competencia.
          </p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="Certificar tu empresa hoy es la diferencia entre perder contratos o liderar tu industria"
        image={i03}
      />
      <section className="my-16">
        <p className="reading-container">
          Te comparto tres razones para que inviertas en el crecimiento de tu empresa (no vas a necesitar más):
        </p>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8 text-brand-1 font-bold">Más y mejores clientes</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i03} className="object-cover"/>
            </div>
            <p className="order-3">Las empresas certificadas generan confianza y cumplen con los estándares que exigen
              grandes clientes y proveedores</p>
          </div>
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8 text-brand-1 font-bold">Ventaja competitiva real</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i04} className="object-cover"/>
            </div>
            <p className="order-3">Aseguras que tu empresa cumpla con normativas y se convierta en la opción obvia del
              mercado</p>
          </div>
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8 text-brand-1 font-bold">Retorno de tu inversión</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i05} className="object-cover"/>
            </div>
            <p className="order-3">Certificarte no son un gasto, es una inversión que te abre puertas a nuevos contratos
              y mercados más rentables</p>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Atributos"
        title="¿Por qué capacitar a tu equipo con nosotros?"
        image={i06}
      />
      <section className="container my-16">
        <p className="reading-container">
          Si vas a invertir en formación, asegúrate de que funcione. Aquí te comparto 4 razones para elegirnos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="w-full flex flex-col md:flex-row gap-8 items-stretch border-2 border-brand-1 rounded-3xl p-12">
            <div className="relative md:w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[40%] md:pt-[100%] m-auto">
                <Image src={ico01} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-full">
              <h3 className="ft-5 font-bold text-brand-1">Expertos en certificaciones internacionales</h3>
              <p>Capacitación en normas como ISO, FSSC, SQF, BRCGS y más, con alta demanda en sectores
                industriales</p>
            </div>
          </div>
          <div
            className="w-full flex flex-col md:flex-row gap-8 items-stretch border-2 border-brand-1 rounded-3xl p-12">
            <div className="relative md:w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[40%] md:pt-[100%] m-auto">
                <Image src={ico02} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-full">
              <h3 className="ft-5 font-bold text-brand-1">Acompañamiento más allá del curso</h3>
              <p>Seguimiento post-curso con grupos de WhatsApp y asesoría anual para reforzar el aprendizaje</p>
            </div>
          </div>
          <div
            className="w-full flex flex-col md:flex-row gap-8 items-stretch border-2 border-brand-1 rounded-3xl p-12">
            <div className="relative md:w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[40%] md:pt-[100%] m-auto">
                <Image src={ico03} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-full">
              <h3 className="ft-5 font-bold text-brand-1">Aprendizaje práctico y efectivo</h3>
              <p>Formato presencial con metodología ADEPT, diseñada para maximizar la retención y aplicación del
                conocimiento</p>
            </div>
          </div>
          <div
            className="w-full flex flex-col md:flex-row gap-8 items-stretch border-2 border-brand-1 rounded-3xl p-12">
            <div className="relative md:w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[40%] md:pt-[100%] m-auto">
                <Image src={ico04} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-full">
              <h3 className="ft-5 font-bold text-brand-1">Certificaciones que auditores respetan</h3>
              <p>Capacitación con certificación reconocida y validada en auditorías para garantizar cumplimiento
                normativo.</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-center mt-16 items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('specs')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Método"
        title="Un método que transforma la forma de aprender: ADEPT"
        image={i07}
      />
      <section className="px-8 my-16">
        <p className="reading-container">Enseñar normas con diapositivas interminables es cosa del pasado. Nuestra
          metodología ADEPT garantiza que tu equipo aprenda de manera fácil y pueda aplicar lo aprendido en su área de
          trabajo.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="w-full gap-8 items-stretch p-12">
            <div
              className="relative flex items-center justify-center w-[16rem] h-[16rem] m-auto p-16 mb-12 bg-brand-1 rounded-full">
              <p className="absolute top-12 font-bold text-white" style={{fontSize: '7rem !important'}}>A</p>
            </div>
            <div className="w-full text-center">
              <h3 className="ft-5 font-bold text-brand-1">Adaptabilidad</h3>
              <p>Capacitación en normas como ISO, FSSC, SQF, BRCGS y más, con alta demanda en sectores industriales</p>
            </div>
          </div>
          <div className="w-full gap-8 items-stretch p-12">
            <div
              className="relative flex items-center justify-center w-[16rem] h-[16rem] m-auto p-16 mb-12 bg-brand-1 rounded-full">
              <p className="absolute top-12 font-bold text-white" style={{fontSize: '7rem !important'}}>D</p>
            </div>
            <div className="w-full text-center">
              <h3 className="ft-5 font-bold text-brand-1">Dinámica</h3>
              <p>Aprender no es leer diapositivas. Usamos actividades prácticas para reforzar el conocimiento</p>
            </div>
          </div>
          <div className="w-full gap-8 items-stretch p-12">
            <div
              className="relative flex items-center justify-center w-[16rem] h-[16rem] m-auto p-16 mb-12 bg-brand-1 rounded-full">
              <p className="absolute top-12 font-bold text-white" style={{fontSize: '7rem !important'}}>E</p>
            </div>
            <div className="w-full text-center">
              <h3 className="ft-5 font-bold text-brand-1">Eficiencia</h3>
              <p>Máximo aprendizaje en el menor tiempo posible, sin afectar la operación diaria</p>
            </div>
          </div>
          <div className="w-full gap-8 items-stretch p-12">
            <div
              className="relative flex items-center justify-center w-[16rem] h-[16rem] m-auto p-16 mb-12 bg-brand-1 rounded-full">
              <p className="absolute top-12 font-bold text-white" style={{fontSize: '7rem !important'}}>P</p>
            </div>
            <div className="w-full text-center">
              <h3 className="ft-5 font-bold text-brand-1">Práctica</h3>
              <p>Menos teoría, más acción: ejercicios, simulaciones y casos reales</p>
            </div>
          </div>
          <div className="w-full gap-8 items-stretch p-12">
            <div
              className="relative flex items-center justify-center w-[16rem] h-[16rem] m-auto p-16 mb-12 bg-brand-1 rounded-full">
              <p className="absolute top-12 font-bold text-white" style={{fontSize: '7rem !important'}}>T</p>
            </div>
            <div className="w-full text-center">
              <h3 className="ft-5 font-bold text-brand-1">Transformación</h3>
              <p>No solo capacitamos, cambiamos la mentalidad y desempeño de tu equipo</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-16 items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('adept')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Capacitaciones"
        title="Nuestra oferta es ayudarte a certificarte en los siguientes rubros"
        image={i08}
      />
      <section className="container my-16">
        <div className="container grid grid-cols-1 gap-8">
          <div className="p-12 bg-brand-2 rounded-2xl">
            <h3 className="ft-2 text-white">Calidad</h3>
            <p className="-ft-2 text-white">ISO 9001, IATF 16949, ISO 22301, ISO 31000, BRCGS consumer products, BRCGS
              agents and brokers</p>
          </div>
          <div className="p-12 bg-brand-2 rounded-2xl">
            <h3 className="ft-2 text-white">Inocuidad</h3>
            <p className="-ft-2 text-white">FSSC 22000, FSSC 22000-Q, ISO 22000, BRCGS food safety, SQF, PCQI –
              Controles preventivos de alimentos para humanos FSPCA, BRCGS packaging materials, BRCGS storage and
              distribution, BRCGS audit one, GLOBALG.A.P., HACCP Codex alimentarius, HACCP ISO 22000, GFSI Global
              Markets Programme, Legislación USA para exportación de alimentos (FDA), Normas y leyes en alimentos</p>
          </div>
          <div className="p-12 bg-brand-2 rounded-2xl">
            <h3 className="ft-2 text-white">Medio Ambiente</h3>
            <p className="-ft-2 text-white">ISO 14001, ISO 50001, Normas y leyes nacionales en medio ambiente</p>
          </div>
          <div className="p-12 bg-brand-2 rounded-2xl">
            <h3 className="ft-2 text-white">Seguridad y Salud Ocupacional</h3>
            <p className="-ft-2 text-white">ISO 45001, Normas y leyes nacionales en seguridad y salud ocupacional</p>
          </div>
          <div className="p-12 bg-brand-2 rounded-2xl">
            <h3 className="ft-2 text-white">Tecnologías de la información</h3>
            <p className="-ft-2 text-white">ISO 27001, ISO 25001</p>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-16 items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('models')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Testimonios"
        title="Empresas que ya confiaron en nosotros"
        image={i09}
      />
      <section className="my-16">
        <div className="flex flex-col items-center justify-center md:mx-52 mx-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
            <div className="w-full flex flex-col bg-brand-2 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-4">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2 text-white">
                  Hemos probado varias capacitaciones antes, pero esta es la única donde el equipo realmente aplicó lo
                  aprendido. Estamos muy satisfechos con el resultado.
                </p>
                <div className="mt-auto">
                  <p className="ft-4 serif font-semibold text-white">Luis M.</p>
                  <p className="serif font-semibold text-brand-4">Director de Cumplimiento</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-2 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-4">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2 text-white">
                  Nuestro equipo pudo certificarse en la ISO 9001 sin estrés después de la capacitación con BH
                  Consulting. La metodología que utilizan hizo toda la diferencia, gracias por todo!
                </p>
                <div className="mt-auto">
                  <p className="ft-4 serif font-semibold text-white">María G.</p>
                  <p className="serif font-semibold text-brand-4">Gerente de Calidad</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-2 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-4">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2 text-white">
                  Nos ahorramos tiempo, dinero y dolores de cabeza. Capacitar al equipo con BH fue la mejor decisión.
                </p>
                <div className="mt-auto">
                  <p className="ft-4 serif font-semibold text-white">Ricardo P.</p>
                  <p className="serif font-semibold text-brand-4">Responsable de Seguridad Alimentaria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container grid grid-cols-1 gap-8">
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes1} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes2} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes3} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes4} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image src={clientes5} layout="fill" objectFit="contain"/>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>


      <Blockbuster
        overhead="Garantías"
        title="Capacitación con respaldo, confianza y resultados"
        image={i10}
      />
      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-12 bg-brand-1 flex items-center rounded-2xl">
            <p className="ft-2 text-white">15 años de experiencia nos respaldan</p>
          </div>
          <div className="p-12 bg-brand-1 flex items-center rounded-2xl">
            <p className="ft-2 text-white">Más de 14,000 profesionales capacitados</p>
          </div>
          <div className="p-12 bg-brand-1 flex items-center rounded-2xl">
            <p className="ft-2 text-white">Certificación reconocida en auditorías y cumplimiento
              normativo</p>
          </div>
          <div className="p-12 bg-brand-1 flex items-center rounded-2xl">
            <p className="ft-2 text-white">Garantía de satisfacción o reembolso</p>
          </div>
        </div>

        <div className="reading-container flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('guarantees')} className="button">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>

      </section>

      {/*<Blockbuster*/}
      {/*  overhead="Alianzas"*/}
      {/*  title="Ser parte de la evolución y mejora en la producción de nuestros clientes es nuestro mayor logro."*/}
      {/*  image={i16}*/}
      {/*/>*/}
      {/*<section className="container my-40 grid grid-cols-2 md:grid-cols-3 gap-20">*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo01} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo02} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo03} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo04} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo05} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo06} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí"
        image={i11}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-2 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-brand-1">
              Si ya leíste todo hasta acá, creo que es hora de ponernos en contacto
            </h2>
            <p className="ft-1 my-8">
              Déjanos tus datos para programar una consultoría gratuita sobre las necesidades de capacitación de tu
              negocio.
            </p>

            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
