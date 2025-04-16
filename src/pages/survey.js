'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Radio } from '../components/form/formAtoms';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
import { info } from '../../info';
import fbEvent from '../services/fbEvents';
import { restrictNumber } from '../utils/formValidators';
import Image from 'next/image';

const AnilloCompromiso = () => (
  <div className="flex flex-col items-center w-full">
    <div className="relative w-2/3 pt-[5rem] mb-4">
      <Image src="/landing/ico01.png" layout="fill" objectPosition="center" objectFit="contain"/>
    </div>
    <p>Anillo de compromiso</p>
  </div>
);

const AnilloBoda = () => (
  <div className="flex flex-col items-center w-full">
    <div className="relative w-2/3 pt-[5rem] mb-4">
      <Image src="/landing/ico01.png" layout="fill" objectPosition="center" objectFit="contain"/>
    </div>
    <p>Anillo de bodas</p>
  </div>
);
const Pulsera = () => (
  <div className="flex flex-col items-center w-full">
    <div className="relative w-2/3 pt-[5rem] mb-4">
      <Image src="/landing/ico01.png" layout="fill" objectPosition="center" objectFit="contain"/>
    </div>
    <p>Pulsera</p>
  </div>
);
const Cadena = () => (
  <div className="flex flex-col items-center w-full">
    <div className="relative w-2/3 pt-[5rem] mb-4">
      <Image src="/landing/ico01.png" layout="fill" objectPosition="center" objectFit="contain"/>
    </div>
    <p>Cadena</p>
  </div>
);

const Dije = () => (
  <div className="flex flex-col items-center w-full">
    <div className="relative w-2/3 pt-[5rem] mb-4">
      <Image src="/landing/ico01.png" layout="fill" objectPosition="center" objectFit="contain"/>
    </div>
    <p>Dije</p>
  </div>
);

const Arete = () => (
  <div className="flex flex-col items-center w-full">
    <div className="relative w-2/3 pt-[5rem] mb-4">
      <Image src="/landing/ico01.png" layout="fill" objectPosition="center" objectFit="contain"/>
    </div>
    <p>Arete</p>
  </div>
);

const formSteps = [
  // {
  //   name: 'title',
  //   title: `¿Qué tipo de pieza estás buscando?`,
  //   type: 'radio',
  //   options: [
  //     {value: 'anilloCompromiso', label: <AnilloCompromiso/>},
  //     {value: 'anilloBoda', label: <AnilloBoda/>},
  //     {value: 'pulsera', label: <Pulsera/>},
  //     {value: 'cadena', label: <Cadena/>},
  //     {value: 'dije', label: <Dije/>},
  //     {value: 'aretes', label: <Arete/>},
  //   ],
  //   cols: 3,
  //   inputOptions: {required: true},
  // },
  {
    name: 'title',
    title: `¿Qué tipo de pieza estás buscando?`,
    type: 'radio',
    options: [
      {value: 'anilloCompromiso', label: 'Anillo de compromiso'},
      {value: 'anilloBoda', label: 'Anillos de bodas'},
      {value: 'Churumbela', label: 'Churumbela'},
      {value: 'pulsera', label: 'Pulsera / Esclava'},
      {value: 'cadena', label: 'Cadena'},
      {value: 'aretes', label: 'Aretes'},
    ],
    cols: 2,
    inputOptions: {required: true},
  },
  {
    name: 'material',
    title: '¿De qué material?',
    description: 'Selecciona una opción por favor',
    type: 'radio',
    options: [
      {value: 'oro', label: 'Oro'},
      {value: 'oro-blanco', label: 'Oro Blanco'},
      {value: 'plata', label: 'Plata'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    name: 'material',
    title: '¿Con qué piedras?',
    description: 'Selecciona una opción por favor',
    type: 'radio',
    options: [
      {value: 'diamante', label: 'Diamante natural'},
      {value: 'diamante-lab', label: 'Diamante de laboratorio'},
      {value: 'esmeralda', label: 'Esmeralda'},
      {value: 'rubi', label: 'Rubí'},
      {value: 'sin-piedra', label: 'No quiero piedras'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    name: 'name',
    title: 'Regálame tu nombre',
    type: 'text',
    inputOptions: {required: true},
  },
  {
    name: 'phone',
    title: 'Ahora un WhatsApp para contactarte',
    type: 'number',
    inputOptions: {required: true},
  },
];

export default function Survey() {
  const [formStep, setFormStep] = useState(0);
  const [inputError, setInputError] = useState(null);
  const [sending, setSending] = useState(false);
  const methods = useForm({mode: 'all'});
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
    watch,
  } = methods;

  const router = useRouter();

  useEffect(() => {
    formSteps.map((fs) => setError(fs.name, {}));
  }, [setError]);

  const handleNext = () => {
    const formStepName = formSteps[formStep].name;
    if (errors[formStepName]) {
      setInputError(formStep);
      return;
    }
    setInputError(null);
    window.scrollTo(0, 0);
    return formStep < formSteps.length - 1 && setFormStep(formStep + 1);
  };

  const onSubmit = (data) => {
    setSending(true);
    const lead = getCookie('lead');
    const {id, email, phone, fullName} = JSON.parse(lead);
    const _fbc = getCookie('_fbc');
    const _fbp = getCookie('_fbp');

    const payload = {...data, id, fullName, email, phone, _fbc, _fbp};
    console.log('payload', payload);

    fetch(info.surveyWebhook, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response)
      .then(() => fbEvent(
        'Lead',
        {email, phone, externalID: id},
      ))
      // Redirect to Thank you page and Scheduler
      .then(() => {
        if (info.surveyRedirect !== '') {
          const forwardLink = document.createElement('a');
          forwardLink.href = info.surveyRedirect + `?name=${fullName}&email=${email}&phone${phone}`;
          forwardLink.target = '_blank';
          forwardLink.click();
        }

        router.push(`/`);
      });
  };

  return (
    <div className="relative flex flex-grow bg-black pointer-events-none">
      <div className="container !p-0 flex flex-col flex-grow items-center pointer-events-auto touch-auto">
        <div className="survey-card">
          <div className="w-full absolute left-0 top-0 bg-gray-100">
            <div className={`h-4 bg-brand-1`} style={{width: `${((formStep + 1) / formSteps.length) * 100}%`}}/>
          </div>
          <p className="-ft-1">{formStep + 1}/{formSteps.length}</p>
          <FormProvider {...methods}>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              {formSteps.map((fs, idx) => {
                if (fs.type === 'text') {
                  const {name, title, description, placeholder, inputOptions} = fs;
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`my-20 flex-grow ${formStep === idx ? 'block' : 'hidden'}`}>
                      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{__html: title}}/>
                      <p className="ft-2 mt-4 mb-12" dangerouslySetInnerHTML={{__html: description}}/>
                      <input
                        {...register(name, inputOptions)}
                        placeholder={placeholder}
                        className={inputError === idx ? '!border-brand-2 mt-12' : 'mt-12'}
                      />
                    </div>
                  );
                }
                if (fs.type === 'number') {
                  const {name, title, description, placeholder, inputOptions} = fs;
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`my-20 flex-grow ${formStep === idx ? 'block' : 'hidden'}`}>
                      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{__html: title}}/>
                      <p className="ft-2 mt-4 mb-12" dangerouslySetInnerHTML={{__html: description}}/>
                      <input
                        {...register(name, inputOptions)}
                        placeholder={placeholder}
                        onKeyDown={restrictNumber}
                        className={inputError === idx ? '!border-brand-2 mt-12' : 'mt-12'}
                      />
                    </div>
                  );
                }

                if (fs.type === 'radio') {
                  const {name, title, description, placeholder, inputOptions, options, cols} = fs;
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`my-20 ${formStep === idx ? 'flex flex-col' : 'hidden'}`}>
                      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{__html: title}}/>
                      <p className="ft-2 mt-4 mb-12" dangerouslySetInnerHTML={{__html: description}}/>
                      <Radio
                        name={name}
                        inputOptions={inputOptions}
                        placeholder={placeholder}
                        options={options}
                        optCols={cols}
                        className={inputError === idx ? '!border-brand-2' : undefined}
                      />
                    </div>
                  );
                }
                if (fs.type === 'checkbox') {
                  const {name, title, description, placeholder, inputOptions, options, cols} = fs;
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`my-20 ${formStep === idx ? 'flex flex-col' : 'hidden'}`}>
                      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{__html: title}}/>
                      <p className="ft-2 mt-4 mb-12" dangerouslySetInnerHTML={{__html: description}}/>
                      <Checkbox
                        name={name}
                        inputOptions={inputOptions}
                        placeholder={placeholder}
                        options={options}
                        optCols={cols}
                        className={inputError === idx ? '!border-brand-2' : undefined}
                      />
                    </div>
                  );
                }
                if (fs.type === 'textarea') {
                  const {name, title, description, placeholder, inputOptions, cols} = fs;
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`my-20 ${formStep === idx ? 'block' : 'hidden'}`}>
                      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{__html: title}}/>
                      <p className="ft-2 mt-4 mb-12" dangerouslySetInnerHTML={{__html: description}}/>
                      <textarea
                        {...register(name, inputOptions)}
                        placeholder={placeholder}
                        rows={cols}
                        className={inputError === idx ? '!border-brand-2 mt-12' : 'mt-12'}
                      />
                    </div>
                  );
                }
              })}

              <div className="flex justify-between w-full mt-auto">
                <button
                  type="button"
                  onClick={() => setFormStep(formStep - 1)}
                  className="!bg-transparent !text-brand-3 border-none hover:text-brand-1 disabled:!text-gray-100"
                  disabled={formStep <= 0}
                >Atrás
                </button>
                <button
                  type={formStep < formStep.length - 1 ? 'button' : 'submit'}
                  disabled={sending}
                  onClick={() => handleNext()}
                  className="mt-auto"
                >
                  {sending && <span className="animate-spin mr-4">+</span>}
                  {formStep === formSteps.length - 1 ? 'Enviar' : sending ? 'Enviando' : 'Siguiente'}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}