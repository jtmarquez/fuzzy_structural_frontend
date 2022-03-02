import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
        <h2>Simple fuzzy logic classificator app over structure state </h2>
        <div>
            <p>Implementation of fuzzy logic on a problem of classification of the physical condition of structures such as houses, structures, etc. using simpful library.</p>
            <p>By Ignacio Márquez. API and python implementation made by José Tomás Márquez</p>
        </div>
        <Link to="/fuzzify">Use the classifier</Link>
        <Link to="/">Home</Link>
    </div>
  );
}