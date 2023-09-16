import React from 'react'
import { Link } from 'react-router-dom'

function Header({isNotIndex}) {
  return (
    <header>
        <div className='header-container'>
            <div>
                {
                    isNotIndex ? 
                    (<Link to="/"> Back</Link>) :
                    ''
                }
            </div>
            <div>
                <h1>To Do App</h1>
            </div>
        </div>
    </header>
  )
}

export default Header