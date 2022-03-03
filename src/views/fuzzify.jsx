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
      console.log(resultado);
    } catch (error) {
      console.log(requestOptions.body)
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
        <div>
          <p className='title has-text-white'>Categoria:</p>
          <p className='subtitle my-5 has-text-white-ter'>{resultado['categoria']}</p>
          <p className='title has-text-white'>Valor:{resultado['valor']}</p>
        </div>
      
        <div>
          <button className="button is-primary mt-2" onSubmit={() => setResultado({})}>Evaluar otra estructura</button>
        </div>
      </section>
    );
  }
  return (
    <section className='hero has-background-link is-fullheight-with-navbar'>
      <div className='columns mb-0'>
        <div className="form mt-5 column is-half">
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
              P1: Yup.number().integer().min(0).max(10).required('This field is required'),
              P2: Yup.number().integer().min(0).max(10).required('This field is required'),
              P3: Yup.number().integer().min(0).max(10).required('This field is required'),
              P4: Yup.number().integer().min(0).max(10).required('This field is required'),
              P5: Yup.number().integer().min(0).max(10).required('This field is required'),
              P6: Yup.number().integer().min(0).max(10).required('This field is required'),
              P7: Yup.number().integer().min(0).max(10).required('This field is required'),
              P8: Yup.number().integer().min(0).max(10).required('This field is required'),
              P9: Yup.number().integer().min(0).max(10).required('This field is required'),
              P10: Yup.number().integer().min(0).max(10).required('This field is required'),
              P11: Yup.number().integer().min(0).max(10).required('This field is required'),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className='px-5 pt-5 mx-5'>
                <div>
                  <label className="label mx-5" htmlFor="P1">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P1:</p>
                    <Field className="input" name='P1' placeholder='P1' />
                    {errors.P1 && touched.P1 ? (
                      <div>{errors.P1}</div>
                    ) : null}
                  </label>
                </div>
                <div>
                  <label className="label mx-5" htmlFor="P2">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P2:</p>
                    <Field className="input" name='P2' placeholder='P2' />
                    {errors.P2 && touched.P2 ? (
                      <div>{errors.P2}</div>
                    ) : null}
                  </label>
                </div>
                <div>
                  <label className="label mx-5" htmlFor="P3">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P3:</p>
                    <Field className="input" name='P3' placeholder='P3' />
                    {errors.P3 && touched.P3 ? (
                      <div>{errors.P3}</div>
                    ) : null}
                  </label>
                </div>
                <div>
                  <label className="label mx-5" htmlFor="P4">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P4:</p>
                    <Field className="input" name='P4' placeholder='P4' />
                    {errors.P4 && touched.P4 ? (
                      <div>{errors.P4}</div>
                    ) : null}
                  </label>
                </div>
                <div>
                  <label className="label mx-5" htmlFor="P5">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P5:</p>
                    <Field className="input" name='P5' placeholder='P5' />
                    {errors.P5 && touched.P5 ? (
                      <div>{errors.P5}</div>
                    ) : null}
                  </label>
                </div>
                <div>
                  <label className="label mx-5" htmlFor="P6">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P6:</p>
                    <Field className="input" name='P6' placeholder='P6' />
                    {errors.P6 && touched.P6 ? (
                      <div>{errors.P6}</div>
                    ) : null}
                  </label>
                </div>
                <div>
                  <label className="label mx-5" htmlFor="P7">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P7:</p>
                    <Field className="input" name='P7' placeholder='P7' />
                    {errors.P7 && touched.P7 ? (
                      <div>{errors.P7}</div>
                    ) : null}
                  </label>
                </div>
                <div>
                  <label className="label mx-5" htmlFor="P8">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P8:</p>
                    <Field className="input" name='P8' placeholder='P8' />
                    {errors.P8 && touched.P8 ? (
                      <div>{errors.P8}</div>
                    ) : null}
                  </label>
                </div>
                <div>
                  <label className="label mx-5" htmlFor="P9">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P9:</p>
                    <Field className="input" name='P9' placeholder='P9' />
                    {errors.P9 && touched.P9 ? (
                      <div>{errors.P9}</div>
                    ) : null}
                  </label>
                </div>
                <div>
                  <label className="label mx-5" htmlFor="P10">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P10:</p>
                    <Field className="input" name='P10' placeholder='P10' />
                    {errors.P10 && touched.P10 ? (
                      <div>{errors.P10}</div>
                    ) : null}
                  </label>
                </div>
                <div>
                  <label className="label mx-5" htmlFor="P11">
                    <p className='subtitle my-2 has-text-white-ter'>Valor para parametro P11:</p>
                    <Field className="input" name='P11' placeholder='P11' />
                    {errors.P11 && touched.P11 ? (
                      <div>{errors.P11}</div>
                    ) : null}
                  </label>
                </div>
                    
                <div>
                  <button className="button is-white my-5" type="submit">Evaluar estructura</button>
                </div>
              </Form>
            )}
          </Formik>
          <p>{message}aaa</p>
        </div>
        <div className="mx-5 mt-5 column is-half">
          <p className='title has-text-white'>Resultados</p>
        </div>
      </div>
    </section>
  );
}