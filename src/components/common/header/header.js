import React, { useState, useEffect, useRef } from 'react'
import "./header.css"
import {Link} from "react-router-dom"
import { nav } from '../../data/Data'

export const Header = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        const header = headerRef.current;
        if (header) {
          document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
        }
      }, []);
    const [navList,setNavList] = useState(false);
  return (
    <header ref={headerRef}>
        <div className="header-container container flex">
            <Link to="/" className="logo">
                <img src="/images/logo.png" alt="Logo" />
            </Link>
            <div className="nav">
                <ul className={navList?'small':'flex'}>
                    {nav.map((list,index)=>(
                        <li key={index}>
                            <Link to={list.path}>{list.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="button flex">
                <h4>
                    <span>5</span> Notifs
                </h4>
                <button className="btn1">
                    <i className="fa fa-sign-out"></i> Connexion
                </button>
            </div>
            <div className="toggle">
                <div onClick={()=>setNavList(!navList)}>
                {navList?<i className="toggle-icon fa fa-times"></i>:<i className="toggle-icon fa fa-bars"></i>}
                    
                </div>
            </div>
        </div>
    </header>
  )
}
