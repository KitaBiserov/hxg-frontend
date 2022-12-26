import { Link } from "react-router-dom";
import React from "react";

function ErrorPage() {
  return (

      
        <div className="error-page">
          <div className="error-page__block">
         
          <span>404</span><h1> Page not Found</h1>
          <div></div>
          <Link className="a anchor white" to="/"> Back to main page</Link>
          </div>
         
        </div>
   
 
  )
}

export default ErrorPage;
