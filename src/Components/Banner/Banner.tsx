import { Container, ImgWrapper, Info, ButtonWrapper, ButtonPlay, ButtonInfo } from './style';
import '@vime/core/themes/default.css';
import { FaInfo, FaPlay } from 'react-icons/fa';

export const Banner = () => {

  return (
    <Container>
        <ImgWrapper src="/media/hp1.jpg" alt="" />

      <Info>
        <h1>Harry Potter e a Pedra Filosofal</h1>        
        <ButtonWrapper>
          <ButtonPlay href="#"><FaPlay /> Assistir</ButtonPlay>
          <ButtonInfo href="#"><FaInfo /> Mais informações</ButtonInfo>
        </ButtonWrapper>
      </Info>
    </Container>
  );
}
