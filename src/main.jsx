import React from 'react'
import ReactDOM from 'react-dom/client'
import Builds from './Builds.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gradient-to-b from-blue-7 to-blue-6 h-full w-full'>
    <Builds />
    </div>
  </React.StrictMode>,
)
