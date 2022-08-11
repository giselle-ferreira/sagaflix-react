import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Container, Wrapper } from "./style";
import { TMovie } from '../../Interfaces'
import { ImSpinner8 } from 'react-icons/im';
import api from '../../api'

export const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<TMovie[]>([]);
  const [error, setError] = useState({});

  useEffect(() => {
    api
      .get("movies")
      .then(({ data }) => {
        setIsLoading(true);
        setData(data.movies);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const sagas = [
    "Marvel - Saga do Infinito",
    "Guerra nas Estrelas",
    "Harry Potter",
    "O Senhor dos Anéis",
  ];

  return (
    <Wrapper>
      {sagas.map((saga) => {
        return (
           <>
            <h3>{saga}</h3>
            {isLoading && <div id="loading"><ImSpinner8 size={30} /></div>}
            <Swiper
              style={{ marginBottom: "10px" }}
              spaceBetween={20}
              modules={[Pagination, Navigation]}
              slidesPerView={5}
              pagination={true}
              navigation={true}
            >              
              {data.map((movie) => {
                if (movie.franchise === saga) {
                  return (
                    <SwiperSlide>
                      <Container key={movie.title}>
                        <img src={movie.img} alt={`Poster do ${movie.title}`} />
                      </Container>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </>
        );
      })}
    </Wrapper>
  );
};