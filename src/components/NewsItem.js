// import React, { Component } from 'react' //1

import React from 'react'

// 1 - class based
// 2 - function based

// export class NewsItem extends Component { // 1
  
  // render() { // 1
  const NewsItem = (props) => {
    // let {title, description, imageUrl, newsUrl, author, date, source} = this.props; // 1

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-danger">{source} </span>
          </div>
        
          <img src={!imageUrl?"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a href= {newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
  // 1}
// 1}

export default NewsItem
