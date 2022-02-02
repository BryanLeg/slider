import React, { useState, useEffect } from 'react';
import data from './data';

const Carrousel = () => {
    const [persons, setPersons] = useState(data);
    const [index, setIndex] = useState(0)


    useEffect(() => {
        if (index > persons.length - 1) {
            setIndex(0);
        }

        if (index < 0) {
            setIndex(persons.length - 1)
        }
    }, [index])

    useEffect(() => {
        let slide = setInterval(() => {
            setIndex(index + 1);
        }, 2000);
        return () => {
            clearInterval(slide)
        }
    }, [index])

    return (
        <div className='carrousel'>
            {persons.map((person, personIndex) => {
                const { id, image, name, title, quote } = person;
                let position = 'nextSlide';

                if (personIndex === index) {
                    position = 'activeSlide'
                }

                if (personIndex === index - 1 || (index === 0 && personIndex === persons.length - 1)) {
                    position = 'lastSlide'
                }


                return (
                    <article
                        key={id} className={`review ${position}`} >
                        <div className="img-container">
                            <img id="person-img" src={image} alt="" />
                        </div>
                        <h4 id="author">{name}</h4>
                        <p id="job">{title}</p>
                        <p id="info">{quote}</p>
                        <div className="btn-container">
                            <button className="prev-btn" onClick={() => setIndex(index - 1)}>Prev</button>
                            <button className="next-btn" onClick={() => setIndex(index + 1)}>Next</button>
                        </div>
                    </article>
                )
            })
            }

        </div>
    )
}
export default Carrousel;
