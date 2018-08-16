import React from 'react'

export default function () {
  return <div className="conatiner">
    <img src="/static/john.jpg" alt="John-Serrano" className="logo"/>
    <h3>Creado por John Serrano</h3>
    <style jsx>{`
      h3 {
        margin: 0 auto;
        max-width: 500px;
        text-align: center;
      }
      .logo {
        max-width: 500px;
        margin: 0 auto;
        display: block;
      }
    `}</style>

    <style jsx global>{`
      body { background: #95afc0; }
    `}</style>
  </div>
}