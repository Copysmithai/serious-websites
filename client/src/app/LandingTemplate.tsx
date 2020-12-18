import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getSiteCopy } from '../api/ServerAPI';
import { WebsiteCopy } from '../_types/global/GlobalTypes';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #161822;
`;

export default function LandingTemplate() {
  const { websiteId } = useParams<{ websiteId: string }>();

  const [error, setError] = useState<string | null>(null);
  const [copy, setCopy] = useState<WebsiteCopy | null>(null);

  useEffect(() => {
    console.log('trying to get site copy');
    getSiteCopy(websiteId)
      .then((res) => {
        setCopy(res);
      })
      .catch((e) => {
        setError(e.toString());
      });
  }, []);

  if (error) {
    return <Container>{error}</Container>;
  }

  if (!copy) {
    return <Container>loading...</Container>;
  } else {
    // design your templates here!
    return (
      <Container>
        <div className='body-wrap'>
          <header className='site-header reveal-from-bottom'>
            <div className='container'>
              <div className='site-header-inner'>
                <div className='brand'>
                  <h1 className='m-0'>
                    <a href='index.html'>
                      <img
                        src='https://site-generator.coolnalu.repl.co/images/logo.svg'
                        alt='Cube'
                        width='32'
                        height='32'
                      />
                    </a>
                  </h1>
                </div>
                <button
                  id='header-nav-toggle'
                  className='header-nav-toggle'
                  aria-controls='primary-menu'
                  aria-expanded='false'
                >
                  <span className='screen-reader'>Menu</span>{' '}
                  <span className='hamburger'>
                    <span className='hamburger-inner'></span>
                  </span>
                </button>
                <nav id='header-nav' className='header-nav'>
                  <div className='header-nav-inner'>
                    <ul className='list-reset header-nav-right'>
                      <li>
                        <a
                          className='button button-primary button-wide-mobile button-sm'
                          href='signup.html'
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </header>
          <main className='site-content'>
            <section className='hero section center-content illustration-section-01'>
              <div className='container-sm'>
                <div className='hero-inner section-inner'>
                  <div className='hero-content'>
                    <h1
                      className='mt-0 mb-16 reveal-from-bottom'
                      data-reveal-delay='200'
                    >
                      {copy.header}
                    </h1>
                    <div className='container-xs'>
                      <p
                        className='mt-0 mb-32 reveal-from-bottom'
                        data-reveal-delay='400'
                      >
                        {copy.subheader}
                      </p>
                      <div
                        className='reveal-from-bottom'
                        data-reveal-delay='600'
                      >
                        <a
                          className='button button-primary button-wide-mobile'
                          href='#'
                        >
                          Join the Waitlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='features-tiles section'>
              <div className='container'>
                <div className='features-tiles-inner section-inner'>
                  <div className='tiles-wrap'>
                    <div className='tiles-item reveal-from-bottom'>
                      <div className='tiles-item-inner'>
                        <div className='features-tiles-item-header'>
                          <div className='features-tiles-item-image mb-16'>
                            <img
                              src='https://site-generator.coolnalu.repl.co/images/feature-tile-icon-01.svg'
                              alt='Feature tile icon 01'
                              width='64'
                              height='64'
                            />
                          </div>
                        </div>
                        <div className='features-tiles-item-content'>
                          <h4 className='mt-0 mb-8'>{copy.featureTitle1}</h4>
                          <p className='m-0 text-sm'>{copy.featureDesc1}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='tiles-item reveal-from-bottom'
                      data-reveal-delay='200'
                    >
                      <div className='tiles-item-inner'>
                        <div className='features-tiles-item-header'>
                          <div className='features-tiles-item-image mb-16'>
                            <img
                              src='https://site-generator.coolnalu.repl.co/images/feature-tile-icon-02.svg'
                              alt='Feature tile icon 02'
                              width='64'
                              height='64'
                            />
                          </div>
                        </div>
                        <div className='features-tiles-item-content'>
                          <h4 className='mt-0 mb-8'>{copy.featureTitle2}</h4>
                          <p className='m-0 text-sm'>{copy.featureDesc2}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='tiles-item reveal-from-bottom'
                      data-reveal-delay='400'
                    >
                      <div className='tiles-item-inner'>
                        <div className='features-tiles-item-header'>
                          <div className='features-tiles-item-image mb-16'>
                            <img
                              src='https://site-generator.coolnalu.repl.co/images/feature-tile-icon-03.svg'
                              alt='Feature tile icon 03'
                              width='64'
                              height='64'
                            />
                          </div>
                        </div>
                        <div className='features-tiles-item-content'>
                          <h4 className='mt-0 mb-8'>{copy.featureTitle3}</h4>
                          <p className='m-0 text-sm'>{copy.featureDesc3}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='cta section center-content-mobile reveal-from-bottom'>
              <div className='container'>
                <div className='cta-inner section-inner cta-split'>
                  <div className='cta-slogan'>
                    <h3 className='m-0'>{copy.ctaSlogan}</h3>
                  </div>
                  <div className='cta-action'>
                    <a className='button button-wide-mobile' href='#'>
                      Get started now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className='site-footer center-content-mobile'>
            <div className='container'>
              <div className='site-footer-inner'>
                <div className='footer-top space-between text-xxs'>
                  <div className='brand'>
                    <a href='index.html'>
                      <img
                        src='https://site-generator.coolnalu.repl.co/images/logo.svg'
                        alt='Cube'
                        width='32'
                        height='32'
                      />
                    </a>
                  </div>
                  <div className='footer-social'>
                    <ul className='list-reset'>
                      <li>
                        <a href='#'>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <title>Facebook</title>
                            <path d='M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z' />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <title>Twitter</title>
                            <path d='M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z' />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <title>Instagram</title>
                            <g>
                              <circle cx='12.145' cy='3.892' r='1' />
                              <path d='M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z' />
                              <path d='M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z' />
                            </g>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='footer-bottom space-between text-xxs invert-order-desktop'>
                  <nav className='footer-nav'>
                    <ul className='list-reset'>
                      <li>
                        <a href='#'>Contact</a>
                      </li>
                      <li>
                        <a href='#'>About us</a>
                      </li>
                      <li>
                        <a href='#'>FAQ's</a>
                      </li>
                      <li>
                        <a href='#'>Support</a>
                      </li>
                    </ul>
                  </nav>
                  <div className='footer-copyright'>
                    &copy; 2020 Cube, all rights reserved
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Container>
    );
  }
}
