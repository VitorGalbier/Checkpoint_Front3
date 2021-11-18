import "../footer/style.scss";
import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer class="text-center text-white" id="contactMe">
                <div class="container pt-4">
 
                    <section class="mb-4">
  
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/vitor.galbier"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-facebook-f fa-3x "></i
                        ></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/vitorgalbier/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-instagram fa-3x"></i
                        ></a>


                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/vitor-galbier-344440211/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-linkedin fa-3x"></i
                        ></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/VitorGalbier"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-github fa-3x"></i
                        ></a>
                    </section>
  
                </div>
               
            </footer>
        </div>
    )
}

