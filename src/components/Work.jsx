import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import data from '../assets/data.json'
import 'react-responsive-carousel/lib/styles/carousel.css'

const Work = () => {
    return (
        <div id='work'>
            <h2>WORK</h2>
            <section>
                <article>
                    <Carousel
                        showArrows={false}
                        showIndicators={false}
                        showThumbs={false}
                        showStatus={false}
                        interval={2000}
                        infiniteLoop={true}
                        autoPlay={true}
                    >
                        {
                            data.porjects.map(i => (
                                <div className='workItem' key={i.title}>
                                    <img src={i.image} alt={i.title} />
                                    <aside>
                                        <h3>{i.title}</h3>
                                        <p>{i.description}</p>
                                        <a href={i.url} target={'_blank'}>View Demo</a>
                                    </aside>
                                </div>
                            ))
                        }
                    </Carousel>
                </article>
            </section>
        </div>
    )
}

export default Work