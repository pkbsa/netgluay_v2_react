import React from 'react'
import { Link } from "react-router-dom";

import './sidebar.css'

import PersonIcon from '@mui/icons-material/Person';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

//for dashboard and other page side bar
export default function Sidebar(){

    return(
        <div className='sidebar'>
            <h2 className='mainng'>ADMIN DASHBOARD</h2>
            <hr class="new1"></hr>
            <ul className='sidebarList'>
                <Link to="/dashboard" className="link"> 
                    <li className='sidebarListItem users'>
                        <HomeRoundedIcon/>
                        Home
                    </li>
                </Link>
                <Link to="/users" className="link"> 
                    <li className='sidebarListItem users'>
                        <PersonIcon/>
                        Users
                    </li>
                </Link>
                <Link to="/movies" className="link"> 
                <li className='sidebarListItem'>
                    <LocalMoviesIcon/>
                    Movies
                </li>
                </Link>
            </ul>
        </div>
    )
}