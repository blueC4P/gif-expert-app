import React, { useEffect, useState } from 'react'
import { key } from '../key';


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, []) // se ejecueta cuando el componente es renderifazo por primera vez

    const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=lol&limit=10`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs)
    }

    return (
        <>
            <h3>
                {category}
            </h3>
            <ol>
                {
                    images.map(({id, title}) => {
                        return(
                            <li key={id}>
                                {title}
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}
