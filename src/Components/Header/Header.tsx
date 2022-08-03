import { Container, Menu, UserSection } from "./style"
import { FaBell, FaSearch } from 'react-icons/fa'
import { BsPersonCircle } from 'react-icons/bs'
import logo from '/media/logo.png'

export const Header = () => {
  return (
    <Container>
        <Menu>
            <img src={logo} alt="Logo do Sagaflix" width="130"/>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Séries</a></li>
                <li><a href="#">Filmes</a></li>
                <li><a href="#">Bombando</a></li>
                <li><a href="#">Minha Lista</a></li>
            </ul>
        </Menu>

        <UserSection>
            <ul>
                <li><a href=""><FaSearch size={26} /></a></li>
                <li><a href=""><FaBell size={26} /></a></li>
                <li><a href=""><BsPersonCircle size={26} /></a></li>                
            </ul>
        </UserSection>

    </Container>
  )
}

