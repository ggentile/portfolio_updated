"use client"
import { useEffect, useState } from 'react';
import './about-header.scss'

export default function AboutHeader () {

    const skills = ['BackEnd', 'FrontEnd', 'FullStack'];

    const [currentSkill, setSkill] = useState('BackEnd')

    useEffect(() => {
        const changeSkill = setInterval(() => {
            setSkill(skill => {
                if(skills.length - 1 > skills.indexOf(skill)){
                    skill = skills[skills.indexOf(skill) + 1];
                }else{
                    skill = skills[0];
                }
                return skill
            })
        }, 2500)

        return () => clearInterval(changeSkill);
    })

    return(
        <div className='presentation'>
            <div className='main-presentation'>
                <h1>Olá Meu nome é Gianni Gentile</h1>
                <h1>Sou Desenvolvedor <span>{currentSkill}</span> e estou sempre em busca de aprender algo novo.</h1>
                <h2>Sou desenvolvedor Web com foco em Backend. Gosto de transformar problemas em sistemas/interfaces robustas</h2>
            </div>
            <div className='social-media'>
                <button>varios</button>
            </div>
            <div>
                <button className='hireMeBtn'>Contrate-me</button>
            </div>
        </div>
    )
}