import React from 'react';

import Logo from '../../assets/imagens/logo_studyflix.png'
import ButtonLink from './ButtonLink';

import './Menu.css'
import Button from '../Button';



function Menu(){

    return(

        <nav className = "Menu">
            <a href = "/">
            <img className = "Logo" src = {Logo} alt = "Logo da Studyflix"/>
            </a>

            <Button className ="ButtonLink" href="/">Novo vídeo</Button>;
        </nav>
    );
}

export default Menu;