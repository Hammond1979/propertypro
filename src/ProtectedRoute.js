import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ data }) {
    
    if (!localStorage.getItem('data')) {
        window.location = '/'
    }
}

export default ProtectedRoute