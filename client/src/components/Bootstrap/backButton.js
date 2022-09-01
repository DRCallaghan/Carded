import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

function BackButton () {
    
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div>
    {location.pathname !== '/' &&
     (<button className="btn btn-dark mb-3"
     onClick={() => navigate(-1)}>
          &larr; Go Back
        </button>
        )}
        </div>
)}
export default BackButton;