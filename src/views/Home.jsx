import React from 'react';
import { Link } from 'react-router-dom';
import '../style/button_hover.css'

export default function Home() {
  return (
    <section className='hero has-background-link is-fullheight-with-navbar'>
      <div className='hero-body is-fullheight'>
        <div>
          <p className='title has-text-white'>Simple fuzzy logic classificator app over structure state </p>
          <p className='subtitle my-5 has-text-white-ter'>Developed by Ignacio Márquez and José Tomás Márquez</p>
          <Link to='/fuzzify'>
            <div className='my-5 ml-5'>
              <button id = 'home-button-hover' className='button ml-5 is-white is-large is-rounded is-black'>Take me to the app!</button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}