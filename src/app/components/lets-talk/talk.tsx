import './talk.scss'

export default function Talk() {
    return(
        <div className='main-talk'>
            <div className='lets-talk'>
                <h1>&apos;Bora&apos; conversar sobre seu projeto?</h1>
            </div>
            <div className='button-talk'>
                <button id='schedule-call'>Agendar Chamada</button>
                <button id='send-mail'>Enviar Email</button>
            </div>
        </div>
    )
}