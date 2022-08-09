import { Container, Menu, UserSection } from "./style"
import { FaBell, FaSearch } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import profile from '/media/profile-img.png'
import logo from '/media/logo.png'

export const Header = () => {
  return (
    <Container>
        <Menu>
            <a href="/"><img src={logo} alt="Logo do Sagaflix" width={110}/></a>
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
                <li><a href=""><FaSearch size={20} /></a></li>
                <li><a href=""><FaBell size={20} /></a></li>
                <li><a href=""><img src={profile} width={28} /><IoMdArrowDropdown size={20} /></a></li>                
            </ul>
        </UserSection>

    </Container>
  )
}

