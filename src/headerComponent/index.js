import React from 'react';
import { useState } from 'react';
import './index.css';


function Header(){

    const [visible, setVisible] = useState(false);

    const toggleSidebar = () => {
        setVisible((state) => !state);
        

    };


    return (
       <div className='row'>
        <div className='col fs-5  text-center bg-primary p-3 text-dark'>
            <span className='float-start ps-3'><i class="bi bi-list" onClick={toggleSidebar}></i></span>
            Header
        </div>
        {visible && <div className='h-100 bg-secondary sidebar pt-5'>
        <div className='col'>
            Sidebar
            <i class="bi bi-x-lg float-end" onClick={toggleSidebar}></i>
        </div>
        </div>}
        </div>
    );
}

export default Header;