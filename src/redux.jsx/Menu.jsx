import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
export default function Menu() {
  return (
    <div>
        <nav style={{display:"flex",justifyContent:"space-around"}}>
            <Link to={'/ajouter'}>
                ajouter Product
            </Link>
            <Link to={'/update'}>
                Modifier Product
            </Link>
            <Link to={'/listeArtcle'}> 
            liste Artcile</Link>
            
            <Link to={'/'}> 
            liste Product</Link>
        </nav>
    </div>
  )
}
