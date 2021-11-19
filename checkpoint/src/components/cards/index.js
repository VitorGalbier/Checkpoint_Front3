import React from 'react'
import '../cards/style.scss'
import bootstrap from '../Images/bootstrap.png'
import css from '../Images/css.png'
import docker from '../Images/docker.png'
import html from '../Images/html.png'
import javascript from '../Images/js.png'
import Jreact from '../Images/react.png'
import sass from '../Images/sass.png'
import github from '../Images/github.png'

export default function Cards() {
    var imagens = [{
        id: 1,
        image: bootstrap,
        text: "Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est."
    },

    {
        id: 2,
        image: css,
        text: "Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est."
    },

    {
        id: 3,
        image: docker,
        text: "Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est."
    },
    {
        id: 4,
        image: html,
        text: "Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est."
    },
    {
        id: 5,
        image: javascript,
        text: "Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est."
    },
    {
        id: 6,
        image: Jreact,
        text: "Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est."
    },
    {
        id: 7,
        image: sass,
        text: "Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est."
    },
    {
        id: 8,
        image: github,
        text: "Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est."
    }]
    return (
        <div className="cards" id="cards">
            <div className="container">
                <div className="row">
                    {imagens.map(({ id, image, text }) => {
                        return (
                            <React.Fragment key={id}>
                                <div className="col-4">
                                    <div>
                                        <img src={image} alt="dsahu" />
                                    </div>
                                    <div>
                                        <p> {text} </p>
                                    </div>
                                </div>

                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
