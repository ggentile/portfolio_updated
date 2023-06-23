import './about-me.scss'

export default function AboutMe() {
    return(
        <div className="main-about">
            <div className="my-description">
                <h2>Sobre mim</h2>
                <p>Trabalhar com desenvolvimento de software é minha paixão. Estou sempre a procura de aprimorar meus conhecimentos, em qualquer área, seja no BackEnd ou no FrontEnd. De vez em quando me aventuro em Data Science e ML.</p>
            </div>
            <div className="my-skills">
                <h2>Habilidades</h2>
                <p>Javascript/Go/Java/Python/Ruby</p>
                <button className='myCV'>Baixar meu CV</button>
            </div>
        </div>
    )
}