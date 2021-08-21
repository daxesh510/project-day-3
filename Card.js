import React, { useEffect, useState } from 'react'
import './index.css'


function Card() {

    const [info, setInfo] = useState('null');
    const [title, setTitle] = useState('the avengers')

    useEffect(() => {
        result()
    }, [])

    useEffect(() => {

        let url = `http://omdbapi.com/?t=${title}&apikey=81197ab4`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setInfo(data)
            })
            .catch((err) => {
                console.error('this is error catch', err);
            })
    }, [title])

    const infoChnge = (e) => {
        setTitle(e.target.value)
    }

    const result = () => {
        let url = `http://omdbapi.com/?t=${title}&apikey=81197ab4`;
        return (
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setInfo(data)
                })
                .catch((err) => {
                    console.error('this is error catch', err);
                })
        )
    }

    return (
        <>

            <div className='container'>
                <div className='title'>
                    <h1>Movie Search</h1>
                </div>
                <div className='srch'>
                    <input type='search' placeholder='Find Movie Name Here...' onChange={infoChnge} /><br />
                    <button onClick={result}> Get Result </button>
                </div>
                {info.Error === undefined || title.length== 0 ? (

                    <div className='result'>
                        <div className='img-sec'>
                            <img src={info?.Poster} alt='poster' className='poster' />
                        </div>
                        <div className='details'>
                            <div>
                                <h2 > {info.Title}</h2>
                                <p > <b>Released: </b>{info?.Released} </p>
                                <p > <b>Runtime: </b>{info?.Runtime} </p>
                                <p > <b>Production: </b>{info?.Production} </p>
                                <p > <b>Actors: </b>{info?.Actors} </p>
                                <p > <b>Director: </b>{info?.Director} </p>
                                <p > <b>Country: </b>{info?.Country} </p>
                                <p > <b>Awards: </b>{info?.Awards} </p>
                                {/* <div className='rating'>
                                {
                                    info.map((rating, index) => {
                                        return (
                                            <div key={index}>
                                                <strong>{rating.Source}</strong>
                                                <p>{rating.Value}</p>
                                            </div>
                                        )
                                    })
                                } */}

                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1> Movie Not Found </h1>
                )}
            </div>

        </>
    )
}

export default Card