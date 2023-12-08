import React from "react";
// import "../bridalnavbar/bridal.css";
import {Link,useMatch,useResolvedPath} from "react-router-dom";
import "./bridal.css"
export default function bridalnav() {
    
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
       Bridal by UNIKAA
      </Link>
      <ul>
       
      <CustomLink to="/homes">Home</CustomLink>
      <CustomLink to="/services">Services</CustomLink>
      <CustomLink to="/makeup">Makeup Expret</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
       
      </ul>
    </nav>
  )
}

function CustomLink({to,children, ...props}){
    // const path = window.location.pathname
    const resolvedPath =useResolvedPath(to)
    const isActive =useMatch({path: resolvedPath.pathname,end: true})
    return(
<li className={isActive ? "active" : ""}>
    <Link to={to} {...props}>{children}
    </Link>
    </li>
)
}