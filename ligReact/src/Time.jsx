import React, { Component } from 'react';
import Loc from './Location.jsx'

import './App.css'

export default class Time extends Component {
    componentDidMount(){
        setInterval(this.updateTime, 1000)
    }

    updateTime = () => {
        var datetimeText = document.getElementById("datetime")
        var timeText = document.getElementById("time")
        var dateTime = new Date()

        if(timeText != null)
            timeText.innerText = dateTime.toLocaleTimeString()

        var body = document.getElementById("body")
        var hora = dateTime.toLocaleTimeString().split(':')[0]

        if(parseInt(hora) < 0 || parseInt(hora) > 24)
            timeText.innerText = "Erro no horário"

        // Nascer do sol
        if(parseInt(hora) <= 7 && parseInt(hora) >= 5)
            body.style.backgroundColor = "rgb(255,129,0)"
        // Dia
        if(parseInt(hora) > 7 && parseInt(hora) < 16){
            datetimeText.style.color = "black"
            timeText.style.color = "black"
            body.style.backgroundColor = "rgb(135, 206, 235)"
        }
        // Por do Sol
        if(parseInt(hora) >= 16 && parseInt(hora) < 18)
            body.style.backgroundColor = "rgb(255,129,0)"
        // Noite
        if(parseInt(hora) >= 18 || parseInt(hora) < 5){
            datetimeText.style.color = "white"
            timeText.style.color = "white"
            body.style.backgroundColor = "rgb(19,24,98)"
        }
    }

  renderGame(){
    return(
        <div className="wrapper" >
            <div className="navbar">
                <div>
                    <a href="https://github.com/Bey0ndzin" target="_blank" id="navbarBey">Bey0nd</a>
                    <a href="https://github.com/EoCraftus" target="_blank" id="navbarBey">Craftus</a>  
                    <a href="https://github.com/victor0barbosa" target="_blank" id="navbarBey">Torugo</a>  
                </div>
            </div>
            <div className="sectionMiddle">
                <Loc></Loc>
            </div>
        </div>
    )
  }
  render(){
    return(
        <div>
            {this.renderGame()}
        </div>
    )
  }
}