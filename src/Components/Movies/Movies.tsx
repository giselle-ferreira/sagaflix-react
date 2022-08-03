import axios from "axios"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper';
import { Container } from "./style";

type TMovie = {
    "title": string,
    "year": string,
    "franchise": string,
    "genre": string,
    "duration": string,
    "img": string
}

export const Movies = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<TMovie[]>([])
    const [error, setError] = useState({})

    useEffect(() => {
        axios.get("https://movie-sagas-api.herokuapp.com/movies")
        .then((response) => {
            setIsLoading(true)
            setData(response.data.movies)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => setIsLoading(false))
    })

  return (
    <Swiper
        style={{ marginBottom: '130px' }}
        spaceBetween={180}
        modules={[Pagination]}
        slidesPerView={7}             
        pagination={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {data.map((mov) => {
            return(
                <SwiperSlide>
                    <Container key={mov.title}>
                        <img src={mov.img} alt="" />
                    </Container>      
                </SwiperSlide>         
            )
        })}
    </Swiper>
  )
}
