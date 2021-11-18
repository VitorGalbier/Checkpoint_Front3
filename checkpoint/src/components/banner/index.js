import React from 'react'
import fotoPerfil from '../Images/perfil.jpg'
import './style.scss'

export default function Banner() {
    return (
        <fragment>
            <div className="perfil">
                <div>
                    <img src={fotoPerfil} alt="" className="fotoPerfil" />
                </div>
                <article id="aboutMe">
                    <h1>Vitor Galbier</h1>
                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Suco de cevadiss deixa as pessoas mais interessantis. Interagi no mé, cursus quis, vehicula ac nisi. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.

                        Quem num gosta di mim que vai caçá sua turmis! Manduma pindureta quium dia nois paga. Cevadis im ampola pa arma uma pindureta. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
                    </p>

                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Suco de cevadiss deixa as pessoas mais interessantis. Interagi no mé, cursus quis, vehicula ac nisi. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.

                        Quem num gosta di mim que vai caçá sua turmis! Manduma pindureta quium dia nois paga. Cevadis im ampola pa arma uma pindureta. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
                    </p>
                
            </article>
        </div>
        </fragment >
    )
}
