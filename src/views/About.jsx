import React from 'react';

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
        <p className='title'>Connect with us</p>
        <div className='columns'>
          <div className='column is-half mr-2'>
            <div className='columns'>
              <div className='column is-one-third'>
                <figure className='image is-128x128'>
                  <img className= 'is-rounded' src='https://media-exp1.licdn.com/dms/image/C4E03AQEShJF7z2Mw7w/profile-displayphoto-shrink_400_400/0/1587476997940?e=1651708800&v=beta&t=L1s0HIjwpRPpEI3ybrt8HHaLLsObfY1_3FvhqVv7uWo' alt='Ignacio' />
                </figure>
              </div>
              <div className='column is-two-thirds'>
                <p className='subtitle'>Ignacio Márquez</p>
                <p>???</p>
                <a href='https://www.linkedin.com/in/ignaciomarquezbischoff/'>LinkedIn</a>
              </div>
            </div>
          </div>
          <div className='column is-half ml-2'>
            <div className='columns'>
              <div className='column is-one-third'>
                <figure className='image is-128x128'>
                  <img className= 'is-rounded' src='https://scontent-scl2-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeE6D_-3ulLVuemv4jfNE_OZso2H55p0AlGyjYfnmnQCUWErNxeTtGBLfDsd9b6AUD0&_nc_ohc=-7KasaPTUggAX-Luw40&_nc_ht=scontent-scl2-1.xx&oh=00_AT_dK8MD2sT4h9XYcUAAy2JQY0_QeMBWx4-rBu-bSIAp3g&oe=6247F378' alt='José Tomás' />
                </figure>
              </div>
              <div className='column is-two-thirds'>
                <p className='subtitle'>José Tomás Márquez</p>
                <p>Engineering student at Pontificia Universidad Católica de Chile</p>
                <a href='https://www.linkedin.com/in/josetomasmarquezbischoff/'>LinkedIn</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}