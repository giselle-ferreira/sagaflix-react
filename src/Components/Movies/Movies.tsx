import axios from "axios"
import { useEffect, useState } from "react"

type TMovie = {
    "title": string,
    "year": string,
    "franchise": string,
    "genre": string,
    "duration": string,
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
    <div>
        {data.map((mov) => {
            return(
                <div key={mov.title}>
                    {mov.franchise}
                </div>
            )
        })}
    </div>
  )
}
