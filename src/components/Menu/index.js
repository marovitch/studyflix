import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/logo_studyflix.png'
import {LogoImage, MenuWrapper} from '../style.js'
import Button from '../Button';

function Menu(){

    return(

        <MenuWrapper className = "Menu">
            <Link to='/'>
            <LogoImage className = "Logo" src = {Logo} alt = "Logo da Studyflix"/>
            </Link>

            <Button as = {Link} className = "ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>;
        </MenuWrapper>
    );
}

export default Menu;