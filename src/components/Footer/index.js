/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { FooterBase } from './styles';
import ImgRodape from '../../assets/img/rodape.png';

function Footer() {
  return (
    <FooterBase>
      <p>
        {' '}
        <a>
          <img src={ImgRodape} alt="Magdiel Fausto Mendonça" />
        </a>
      </p>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
