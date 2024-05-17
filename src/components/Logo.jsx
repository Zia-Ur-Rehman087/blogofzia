import React from 'react'
import Logo1 from '../../src/components/logozia.png'
function Logo({width = '100px'}) {
  return (
    <div>
      <img src={Logo1} alt="Logo" width="50px" style={{borderRadius:'50%'}}/>
    </div>
  )
}

export default Logo