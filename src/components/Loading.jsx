import React from 'react';
import '../style/loading.css';

export default function Loading() {
  return (
    <section className='hero has-background-link is-fullheight-with-navbar'>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </section>
  );
}