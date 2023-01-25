import React, {Component} from "react";
function App() {
      return (
          <>
              <div className="preloader">
                  <div className="preloader-inner">
                      <img src="assets/img/loader.gif" id="preloader_image" alt="loader"/>
                  </div>
              </div>
              <div className="as-menu-wrapper">
                  <div className="as-menu-area text-center">
                      <button className="as-menu-toggle"><i className="fal fa-times"></i></button>
                      <div className="mobile-logo"><a href="index.html"><img src="assets/img/logo.svg" alt="info"/></a>
                      </div>
                      <div className="as-mobile-menu">
                          <ul>
                              <li><a href="index.html">ANASAYFA</a></li>
                              <li><a href="about.html">HAKKIMIZDA</a></li>
                              <li><a href="menu-fast.html">MENÜ</a></li>
                              <li><a href="contact.html">İLETİŞİM</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <header className="as-header header-layout3">
                  <div className="sticky-wrapper">
                      <div className="sticky-active">
                          <div className="menu-area">
                              <div className="container as-container">
                                  <div className="row align-items-center justify-content-between">
                                      <div className="col-auto">
                                          <div className="header-logo"><a href="index.html">
                                              <img src="assets/img/logo.svg" alt="info"/></a></div>
                                      </div>
                                      <div className="col-auto">
                                          <nav className="main-menu d-none d-lg-inline-block">
                                              <ul>
                                                  <li><a href="index.html">ANASAYFA</a></li>
                                                  <li><a href="about.html">HAKKIMIZDA</a></li>
                                                  <li><a href="menu-fast.html">MENÜ</a></li>
                                                  <li><a href="contact.html">İLETİŞİM</a></li>
                                              </ul>
                                          </nav>
                                          <button type="button" className="as-menu-toggle d-inline-block d-lg-none"><i
                                              className="far fa-bars"></i></button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </header>
          </>
      );

}

export default App;
