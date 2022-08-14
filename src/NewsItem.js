import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div>
        <div className="card my-2">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            <span className="badge bg-danger">{source}</span>
            </div>
            <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZAQQGTAW6MI63OMYWKVWR5MENA.jpg&w=1440":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
      </div>
      </div>
    )
  }
}

export default NewsItem