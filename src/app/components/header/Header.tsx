"use client"
import { useState } from 'react'
import './header.scss'

export default function Header() {
    
    const [page, setPage] = useState(Boolean)

    const changePage = (oEvent: any) => {
        console.log(oEvent.target.firstChild.textContent);
    }

    return (
        <div className="header">
            <div className='header-left'>
                <h3>giannigentile.</h3>
            </div>
            <div className='header-right'>
                <button id='portuguese-page'>PT</button>
                <button id='english-page' onClick={changePage}>EN</button>
            </div>
        </div>

    )
}
