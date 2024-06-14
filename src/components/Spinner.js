// import React, { Component } from 'react' // 1

import React from 'react'
import loading from '../loading.gif'

// 1 - class based
// 2 - function based

// export class Spinner extends Component { // 1
  // render() { //1
  const Spinner = ()  => {
    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt='loading'/>
      </div>
    )
  }
  // 1}
// 1}

export default Spinner