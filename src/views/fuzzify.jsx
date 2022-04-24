import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

export default function Fuzzify() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [resultado, setResultado] = useState({});
  const parameters = {
    'P1': 'Entorno sin Contaminación',
    'P2': 'Sistema Estructural/Constructivo',
    'P3': 'Instalación Domiciliaria de Agua Potable & Artefactos',
    'P4':'Instalación Domiciliaria de Aguas Servidas & Artefactos',
    'P5': 'Instalación Domiciliaria de Electricidad & Artefactos',
    'P6': 'Estanqueidad de Envolvente',
    'P7': 'Calidad del Aire Interior & Ventilación',
    'P8': 'Instalación Domiciliaria de Gas & Artefactos',
    'P9': 'Protección contra Ingreso No Autorizado',
    'P10': 'Acabado y Terminaciones de Elementos Constructivos',
    'P11': 'Mobiliario & Equipamiento Genérico',
  }
  function handleNewEval() {
    setResultado({});
  }
  async function handleSubmit(values) {
    console.log(values);
    setLoading(true);
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    };
    try {
      console.log(requestOptions.body);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/fuzzify`, requestOptions);
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }
      const res = await response.json()
      setResultado(res);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return <Loading />;
  }
  if (Object.entries(resultado).length !== 0) {
    return (
      <section className='hero has-background-link is-fullheight-with-navbar'>
        <div className='m-5 p-5 columns'>
          <div className='column is half'>
            <div>
              <p className='title has-text-white'>Category</p>
              <p className='subtitle my-5 has-text-white-ter'>{resultado['categoria']}</p>
            </div>
            <div>
              <p className='title has-text-white'>Output value:</p>
              <p className='subtitle has-text-white'>{resultado['valor'].toFixed(2)}</p>
            </div>
            <div className='mt-5'>
              <button className="button is-white mt-5" onClick={handleNewEval}>Evaluar otra estructura</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className='hero has-background-link is-fullheight-with-navbar'>
      <div className='columns mb-0 mr-5'>
        <div className="form  column is-half">
          <Formik
            initialValues={{
              P1: '',
              P2: '',
              P3: '',
              P4: '',
              P5: '',
              P6: '',
              P7: '',
              P8: '',
              P9: '',
              P10: '',
              P11: '',
            }}
            validationSchema={Yup.object({
              P1: Yup.number().min(0).max(10).required('This field is required'),
              P2: Yup.number().min(0).max(10).required('This field is required'),
              P3: Yup.number().min(0).max(10).required('This field is required'),
              P4: Yup.number().min(0).max(10).required('This field is required'),
              P5: Yup.number().min(0).max(10).required('This field is required'),
              P6: Yup.number().min(0).max(10).required('This field is required'),
              P7: Yup.number().min(0).max(10).required('This field is required'),
              P8: Yup.number().min(0).max(10).required('This field is required'),
              P9: Yup.number().min(0).max(10).required('This field is required'),
              P10: Yup.number().min(0).max(10).required('This field is required'),
              P11: Yup.number().min(0).max(10).required('This field is required'),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              !message ? (
                <Form className='px-5 ml-5'>
                  <p className='title has-text-white my-5'>Model parameter input</p>
                  <div>
                    <label className="label mx-5" htmlFor="P1">
                      <p className='subtitle my-2 has-text-white-ter'>P1 parameter value:</p>
                      <Field className="input" name='P1' placeholder='P1' />
                      {errors.P1 && touched.P1 ? (
                        <div>{errors.P1}</div>
                      ) : null}
                    </label>
                  </div>
                  <div>
                    <label className="label mx-5" htmlFor="P2">
                      <p className='subtitle my-2 has-text-white-ter'>P2 parameter value:</p>
                      <Field className="input" name='P2' placeholder='P2' />
                      {errors.P2 && touched.P2 ? (
                        <div>{errors.P2}</div>
                      ) : null}
                    </label>
                  </div>
                  <div>
                    <label className="label mx-5" htmlFor="P3">
                      <p className='subtitle my-2 has-text-white-ter'>P3 parameter value:</p>
                      <Field className="input" name='P3' placeholder='P3' />
                      {errors.P3 && touched.P3 ? (
                        <div>{errors.P3}</div>
                      ) : null}
                    </label>
                  </div>
                  <div>
                    <label className="label mx-5" htmlFor="P4">
                      <p className='subtitle my-2 has-text-white-ter'>P4 parameter value:</p>
                      <Field className="input" name='P4' placeholder='P4' />
                      {errors.P4 && touched.P4 ? (
                        <div>{errors.P4}</div>
                      ) : null}
                    </label>
                  </div>
                  <div>
                    <label className="label mx-5" htmlFor="P5">
                      <p className='subtitle my-2 has-text-white-ter'>P5 parameter value:</p>
                      <Field className="input" name='P5' placeholder='P5' />
                      {errors.P5 && touched.P5 ? (
                        <div>{errors.P5}</div>
                      ) : null}
                    </label>
                  </div>
                  <div>
                    <label className="label mx-5" htmlFor="P6">
                      <p className='subtitle my-2 has-text-white-ter'>P6 parameter value:</p>
                      <Field className="input" name='P6' placeholder='P6' />
                      {errors.P6 && touched.P6 ? (
                        <div>{errors.P6}</div>
                      ) : null}
                    </label>
                  </div>
                  <div>
                    <label className="label mx-5" htmlFor="P7">
                      <p className='subtitle my-2 has-text-white-ter'>P7 parameter value:</p>
                      <Field className="input" name='P7' placeholder='P7' />
                      {errors.P7 && touched.P7 ? (
                        <div>{errors.P7}</div>
                      ) : null}
                    </label>
                  </div>
                  <div>
                    <label className="label mx-5" htmlFor="P8">
                      <p className='subtitle my-2 has-text-white-ter'>P8 parameter value:</p>
                      <Field className="input" name='P8' placeholder='P8' />
                      {errors.P8 && touched.P8 ? (
                        <div>{errors.P8}</div>
                      ) : null}
                    </label>
                  </div>
                  <div>
                    <label className="label mx-5" htmlFor="P9">
                      <p className='subtitle my-2 has-text-white-ter'>P9 parameter value:</p>
                      <Field className="input" name='P9' placeholder='P9' />
                      {errors.P9 && touched.P9 ? (
                        <div>{errors.P9}</div>
                      ) : null}
                    </label>
                  </div>
                  <div>
                    <label className="label mx-5" htmlFor="P10">
                      <p className='subtitle my-2 has-text-white-ter'>P10 parameter value:</p>
                      <Field className="input" name='P10' placeholder='P10' />
                      {errors.P10 && touched.P10 ? (
                        <div>{errors.P10}</div>
                      ) : null}
                    </label>
                  </div>
                  <div>
                    <label className="label mx-5" htmlFor="P11">
                      <p className='subtitle my-2 has-text-white-ter'>P11 parameter value:</p>
                      <Field className="input" name='P11' placeholder='P11' />
                      {errors.P11 && touched.P11 ? (
                        <div>{errors.P11}</div>
                      ) : null}
                    </label>
                  </div>
                      
                  <div>
                    <button className="button is-white my-5" type="submit">Evaluate structure</button>
                  </div>
                </Form>) : (<p className='title has-text-white'>{message}aa</p>)
            )}
          </Formik>
          <p>{message}</p>
        </div>
        <div className='column is-half'>
          <div>
            <p className='title has-text-white my-5'>Model parameter description</p>
          </div>
          <table className="table has-background-link">
            <thead>
              <th className='has-text-white'>Parameter</th>
              <th className='has-text-white'>Description</th>
              <th className='has-text-white'>Minimum value</th>
              <th className='has-text-white'>Maximum value</th>
            </thead>
            <tbody>
              {Object.keys(parameters).map((key, index) => {
                return (
                <tr>
                  <th className='has-text-white'>{key}</th>
                  <td className='has-text-white'>{parameters[key]}</td>
                  <td className='has-text-white'>0</td>
                  <td className='has-text-white'>10</td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}