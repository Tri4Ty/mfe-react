import React from "react";
import {
    Link,
    Outlet
  } from "react-router-dom";
  
function AppOne() {
    return (
        <div>
           <h1>I'm App One</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/appone">App 1A</Link>
                    </li>
                    <li>
                        <Link to="/appone/appone_b">App 1B</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
} export default AppOne;