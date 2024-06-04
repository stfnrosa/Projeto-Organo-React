import './Footer.css'

function Footer(){
    return(
        <footer className='footer'>
            <section>
            <ul>
                <li>
                    <a href= "https://github.com/stfnrosa" target="_blank" rel='noreferrer'>
                        <img src="/imagens/github.png" alt="Logo Github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/estefani-rosa/" target="_blank" rel='noreferrer'>
                        <img src="/imagens/linkedin.png" alt="Logo X" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo Organo"/>
        </section>
        <section>
            <p>
                Desenvolvido por Esetfani
            </p>
        </section>
        </footer>
    )
}

export default Footer