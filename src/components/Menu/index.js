import React from 'react'
import Logo from '../../assets/img/denisflix.png'
import './menu.css'
import Button from '../Button'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix Logo" />
      </a>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu