import React from 'react'

import './Footer.css'

function Footer() {

    return (
        <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">Hochschule Furtwangen Mobile Systeme</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              Dobble Forschungsprojekt
          </section>
          <section className="footer-info__returns">
            XXXXXXXXXXX
            <br />
            XXXXXXXXXXX
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
          XXXXXXXXXXX
                    </section>
          <section className="footer-info__terms">
          XXXXXXXXXXX
                      <br />
            XXX
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            XXX
          </section>
          <section className="footer-info__contact">
XXX            <br />
XXXXX          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
    )
}

export default Footer;