import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i01 from '../../public/landing/001-v2.png';
import i02 from '../../public/landing/002.png';
import i03 from '../../public/landing/003.png';
import i04 from '../../public/landing/04.png';
import i05 from '../../public/landing/005.png';
import i06 from '../../public/landing/006.png';
import i07 from '../../public/landing/007.png';
import i08 from '../../public/landing/008.png';
import i09 from '../../public/landing/009.png';
import i10 from '../../public/landing/010.png';
import i11 from '../../public/landing/011.png';
import i12 from '../../public/landing/012.png';
import i13 from '../../public/landing/013.png';
import i14 from '../../public/landing/014.png';
import i15 from '../../public/landing/015.png';
import i16 from '../../public/landing/016.png';
import i17 from '../../public/landing/017.png';

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
    main: 'Contacto, da clic',
    description: 'Ver más detalles',
  };

  return (
    <>
{/*------------------------------------------------------------------ */}
      <section
        className="relative min-h-[60rem] md:min-h-[72rem] w-full flex flex-col md:justify-end items-center bg-brand-1">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-[24rem] md:h-[60rem] bottom-0 absolute bg-gradient-to-t from-brand-1 md:from-brand-2 via-transparent md:via-brand-1 to-transparent md:opacity-60 z-10"/>
          <Image src={i01} layout="fill" className="object-cover object-center sm:object-[75%_50%] md:object-center"/>
        </div>

        <div className="container mt-auto w-full text-center z-50 p-8">
          <h1
            className="md:w-2/3 mx-auto relative ft-8 text-white [text-shadow:_1px_1px_0_rgb(0_0_0_/_20%)] md:[text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)] text-xl">
            Tu historia merece ser contada en oro y diamantes
          </h1>
          {/*<p className="ft-3 mt-4 mb-0 text-white">Consultoría y capacitación especializada en normas y
            certificaciones internacionales</p>*/}
          <div className="flex flex-col justify-center items-center mt-12 text-white">
            {/*<Link href="#contact">*/}
            {/*  <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>*/}
            {/*</Link>*/}
            <p className="-ft-2 md:text-left">{cta.description}</p>
            <p className="material-icons animate-bounce"><span className="ft-9">expand_more</span></p>
          </div>

        </div>
      </section>
{/*------------------------------------------------------------------ */}
      <section className="container grid grid-cols-1 md:grid-cols-2 my-16">
        <div className="relative min-h-[50vh]">
          <Image src={i02} layout="fill" objectFit="cover"/>
        </div>
        <div className="reading-container flex items-center justify-center">
          <p className="ft-2 ">
          Cada pieza que creamos es un reflejo de tu esencia. Diseñamos joyería personalizada con oro, plata y piedras preciosas certificadas, cuidando cada detalle para que tu joya trascienda generaciones.
          </p>
        </div>
      </section>
{/*------------------------------------------------------------------ */}
      <Blockbuster
        overhead="Proceso"
        title="Cada pieza de Giove es una obra de arte hecha para ti y solo para ti."
        image={i03}
      />
{/*------------------------------------------------------------------ */}
      <section className="my-16">
        {/* <p className="reading-container">
          Te comparto tres razones para que inviertas en el crecimiento de tu empresa (no vas a necesitar más):
        </p> */}
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
          <div className="flex flex-col justify-center items-center">
            <h3 className="order-1 md:order-2 mb-8 text-brand-1 font-bold">Conocemos tu historia</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={ico01} className="object-cover"/>
            </div>
            <p className="order-3 text-left">En una sesión privada, descubrimos la inspiración detrás de tu joya.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="order-1 md:order-2 mb-8 text-brand-1 font-bold">Diseñamos tu pieza</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={ico02} className="object-cover"/>
            </div>
            <p className="order-3 text-left">Desde bocetos hasta renders 3D, perfeccionamos cada detalle.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="order-1 md:order-2 mb-8 text-brand-1 font-bold">Fabricación artesanal</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={ico03} className="object-cover"/>
            </div>
            <p className="order-3 text-left">Maestros joyeros elaboran tu pieza con los mejores materiales.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="order-1 md:order-2 mb-8 text-brand-1 font-bold">Entrega con distinción</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={ico04} className="object-cover"/>
            </div>
            <p className="order-3 text-left">Recibes tu joya en un empaque de lujo, lista para perdurar toda la vida.</p>
          </div>
        </div>
        {/* ----------------Agrega un boton y un parrafo--------------------
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
        */}
      </section>
{/*------------------------------------------------------------------ */}

      <Blockbuster
        overhead="Atributos"
        title="Cada joya, una historia irrepetible"
        image={i05}
      />

<section className="container grid grid-cols-1 my-16">
       
        <div className="reading-container flex items-center justify-center">
          <p className="ft-2 ">
          Cada joya que creamos es única. Checa algunas de nuestras piezas más icónicas y encuentra inspo para la tuya.
          </p>
        </div>
      </section>
{/*------------------------------------------------------------------ */}
      <section className="container my-16">
        {/* <p className="reading-container">
          Si vas a invertir en formación, asegúrate de que funcione. Aquí te comparto 4 razones para elegirnos.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="w-full h-[40vh] flex flex-col md:flex-row gap-8 items-stretch border-2 border-brand-1 rounded-3xl overflow-hidden md:col-span-2">
            {/* Imagen (mitad izquierda) */}
            <div className="relative w-full md:w-1/2 h-64 md:h-full">
              <Image
                src={i06} // Asegúrate de que `i06` sea una ruta válida
                layout="fill"
                objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                className="rounded-l-3xl" // Opcional: redondea las esquinas izquierdas
              />
            </div>

            {/* Texto (mitad derecha) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="ft-5 font-bold text-brand-1">Anillos de compromiso</h3>
              <p className="text-gray-600 text-left">Diseños únicos para momentos inolvidables</p>
            </div>
          </div>

          <div className="w-full h-[40vh] flex flex-col md:flex-row gap-8 items-stretch border-2 border-brand-1 rounded-3xl overflow-hidden">
            {/* Imagen (mitad izquierda) */}
            <div className="relative w-full md:w-1/2 h-64 md:h-full">
              <Image
                src={i07} // Asegúrate de que `i06` sea una ruta válida
                layout="fill"
                objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                className="rounded-l-3xl" // Opcional: redondea las esquinas izquierdas
              />
            </div>

            {/* Texto (mitad derecha) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="ft-5 font-bold text-brand-1">Anillos de boda</h3>
              <p className="text-gray-600 text-left">Alianzas personalizadas con significado eterno</p>
            </div>
          </div>

          <div className="w-full h-[40vh] flex flex-col md:flex-row gap-8 items-stretch border-2 border-brand-1 rounded-3xl overflow-hidden">
            {/* Imagen (mitad izquierda) */}
            <div className="relative w-full md:w-1/2 h-64 md:h-full">
              <Image
                src={i08} // Asegúrate de que `i06` sea una ruta válida
                layout="fill"
                objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                className="rounded-l-3xl" // Opcional: redondea las esquinas izquierdas
              />
            </div>

            {/* Texto (mitad derecha) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="ft-5 font-bold text-brand-1">Collares y dijes
              </h3>
              <p className="text-gray-600 text-left">Piezas que expresan estilo
              y sofisticación</p>
            </div>
          </div>

          <div className="w-full h-[40vh] flex flex-col md:flex-row gap-8 items-stretch border-2 border-brand-1 rounded-3xl overflow-hidden">
            {/* Imagen (mitad izquierda) */}
            <div className="relative w-full md:w-1/2 h-64 md:h-full">
              <Image
                src={i09} // Asegúrate de que `i06` sea una ruta válida
                layout="fill"
                objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                className="rounded-l-3xl" // Opcional: redondea las esquinas izquierdas
              />
            </div>

            {/* Texto (mitad derecha) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="ft-5 font-bold text-brand-1">Brazaletes y pulseras</h3>
              <p className="text-gray-600 text-left">Joyería que te acompaña todos
              los días</p>
            </div>
          </div>

          <div className="w-full h-[40vh] flex flex-col md:flex-row gap-8 items-stretch border-2 border-brand-1 rounded-3xl overflow-hidden">
            {/* Imagen (mitad izquierda) */}
            <div className="relative w-full md:w-1/2 h-64 md:h-full">
              <Image
                src={i10} // Asegúrate de que `i06` sea una ruta válida
                layout="fill"
                objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                className="rounded-l-3xl" // Opcional: redondea las esquinas izquierdas
              />
            </div>

            {/* Texto (mitad derecha) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="ft-5 font-bold text-brand-1">Aretes</h3>
              <p className="text-gray-600 text-left">Detalles perfectos con el brillo idea</p>
            </div>
          </div>
        </div>

        {/* AGrega un boton y un parrafo */}
        
        {/* <div className="flex flex-col justify-center mt-16 items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('specs')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div> */}
      </section>
{/*------------------------------------------------------------------ */}
      <Blockbuster
        overhead="Beneficios"
        title="Un diseño que nadie más tendrá, creado solo para ti."
        image={i11}
      />
{/*------------------------------------------------------------------ */}
      <section className="px-8 my-16">
        {/* <p className="reading-container">Enseñar normas con diapositivas interminables es cosa del pasado. Nuestra
          metodología ADEPT garantiza que tu equipo aprenda de manera fácil y pueda aplicar lo aprendido en su área de
          trabajo.</p> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-32">
          <div className="w-full gap-8 items-stretch  border-2 border-brand-1 rounded-3xl overflow-hidden">
            <div
              className="relative flex items-center justify-center h-[45vh] m-auto p-16 mb-6 rounded-full">
              
              <Image
                src={i12} // Asegúrate de que `i06` sea una ruta válida
                layout="fill"
                objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                className="" // Opcional: redondea las esquinas izquierdas
              />

            </div>
            <div className="w-full text-center p-2">
              <h3 className="ft-5 font-bold text-brand-1">Diseño único e irrepetible</h3>
              <p>Cada joya es creada solo una vez, nadie más la tendrá industriales.</p>
            </div>
          </div>

          <div className="w-full gap-8 items-stretch  border-2 border-brand-1 rounded-3xl overflow-hidden">
            <div
              className="relative flex items-center justify-center h-[45vh] m-auto p-16 mb-6 rounded-full">
              
              <Image
                src={i13} // Asegúrate de que `i06` sea una ruta válida
                layout="fill"
                objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                className="rounded-t-3xl" // Opcional: redondea las esquinas izquierdas
              />

            </div>
            <div className="w-full text-center p-2">
              <h3 className="ft-5 font-bold text-brand-1">Materiales certificados</h3>
              <p>Oro de 18K, plata y piedras preciosas con certificación GIA.</p>
            </div>
          </div>


          <div className="w-full gap-8 items-stretch  border-2 border-brand-1 rounded-3xl overflow-hidden">
            <div
              className="relative flex items-center justify-center h-[45vh] m-auto p-16 mb-6 rounded-full">
              
              <Image
                src={i14} // Asegúrate de que `i06` sea una ruta válida
                layout="fill"
                objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                className="rounded-t-3xl" // Opcional: redondea las esquinas izquierdas
              />

            </div>
            <div className="w-full text-center p-2">
              <h3 className="ft-5 font-bold text-brand-1">Proceso de visualización </h3>
              <p>Bocetos y renders 3D para perfeccionar el diseño antes de fabricarlo.</p>
            </div>
          </div>

          <div className="w-full gap-8 items-stretch  border-2 border-brand-1 rounded-3xl overflow-hidden">
            <div
              className="relative flex items-center justify-center h-[45vh] m-auto p-16 mb-6 rounded-full">
              
              <Image
                src={i15} // Asegúrate de que `i06` sea una ruta válida
                layout="fill"
                objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                className="rounded-t-3xl" // Opcional: redondea las esquinas izquierdas
              />

            </div>
            <div className="w-full text-center p-2">
              <h3 className="ft-5 font-bold text-brand-1">Garantía y servicio post-venta</h3>
              <p>Mantenimiento, limpieza y ajustes sin costo adicional.</p>
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
{/*------------------------------------------------------------------ */}
      {/* <Blockbuster
        overhead="TESTIMONIOS"
        title="Historias que brillan tanto como nuestras joyas."
        image={i16}
      /> */}
{/*------------------------------------------------------------------ */}
      {/* <section className="container my-16">
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
      </section> */}
{/*------------------------------------------------------------------ */}
      <Blockbuster
        overhead="Testimonios"
        title="Historias que brillan tanto como nuestras joyas."
        image={i16}
      />
{/*------------------------------------------------------------------ */}
      <section className="my-16">
        <div className="flex flex-col items-center justify-center md:mx-52 mx-8 pt-16 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
            <div className="w-full flex flex-col bg-brand-2 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-4">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2 text-white">
                No quería un anillo cualquiera,
                quería algo con historia. Giove
                hizo posible un diseño que
                representa nuestro amor de una
                manera única. Ver la emoción
                de mi novia al recibirlo no tuvo
                precio.
                </p>
                <div className="mt-auto">
                  <p className="ft-4 serif font-semibold text-white">EDUARDO M.</p>
                  {/* <p className="serif font-semibold text-brand-4">Director de Cumplimiento</p> */}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-2 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-4">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2 text-white">
                Hacer este collar de la mano
                del equipo de Giove, es la
                mejor decisión que he tomado.
                Desde los bocetos entendieron
                lo que quería, esta pieza tiene
                mucho significado para mi y
                quedó perfecta.

                </p>
                <div className="mt-auto">
                  <p className="ft-4 serif font-semibold text-white">PAOLA G.</p>
                  {/* <p className="serif font-semibold text-brand-4">Gerente de Calidad</p> */}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-2 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-4">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2 text-white">
                Queríamos que los anillos de
                nuestra boda fueran únicos
                y una amiga nos recomendó
                Giove. Todo estuvo perfecto,
                desde la primera sesión hasta la
                entrega de nuestros anillos.
                </p>
                <div className="mt-auto">
                  <p className="ft-4 serif font-semibold text-white">ALEJANDRO T.</p>
                  {/* <p className="serif font-semibold text-brand-4">Responsable de Seguridad Alimentaria</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
{/* marcas */}
        {/* <div className="container grid grid-cols-1 gap-8">
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
        </div> */}
      </section>
{/*------------------------------------------------------------------ */}


      {/* <Blockbuster
        overhead="Garantías"
        title="Capacitación con respaldo, confianza y resultados"
        image={i10}
      /> */}
{/*------------------------------------------------------------------ */}
      {/* <section className="py-16">
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

      </section> */}
{/*------------------------------------------------------------------ */}

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
        overhead="FAQs"
        title="Todo lo que necesitas saber para crear tu joya perfecta."
        image={i17}
      />
{/*------------------------------------------------------------------ */}
      <section className="container py-8">
        <Faqs/>
      </section>
{/*------------------------------------------------------------------ */}

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-2 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-brand-1">
            Agenda una consulta gratuita con nuestro equipo y comencemos el proceso de creación.
            </h2>
            <p className="ft-1 my-8 sm:text-left">
            Agenda una cita para comenzar a diseñar tus piezas, Si ya llegaste hasta acá, compártenos unos datos y diseñemos tus piezas
            </p>

            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
{/*------------------------------------------------------------------ */}
    </>
  );
}
