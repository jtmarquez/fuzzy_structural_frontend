import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className='hero is-fullheight-with-navbar'>
      <div className='hero-body has-background-link columns'>
        <div className='column is-half'>
          <p className='title has-text-white mb-5'>Implementation of fuzzy logic on a problem of classification of the physical condition of structures such as houses, structures, etc. using simpful library.</p>
          <p className='subtitle has-text-white-ter mt-5'>Fuzzy logic model by Ignacio Márquez. Web, API and python implementation by José Tomás Márquez</p>
        </div>
        <div className='column is-half has-backgroud-white my-0'></div>
      </div>
      <div className='hero-foot mx-5 py-6'>
        <p className='title'>Linkedin</p>
        <div className='columns mx-5'>
          <div className='column is-half'>
            <p className='subtitle'>Ignacio Márquez</p>
            <a>Linkedin</a>
          </div>
          <div className='column is-half'>
            <p className='subtitle'>José Tomás Márquez</p>
            <a>Linkedin</a>
          </div>
        </div>
      </div>
    </section>
  );
}