import React from 'react'

const NewsItem = (props) => {

    let { title, description, newsUrl, imgUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className=" badge rounded-pill bg-danger">{source}</span>
                </div>

                <span className="visually-hidden">unread messages</span>
                <img src={!imgUrl ? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NT23FFP3KZF2BA7IUQPKRBSRLY.jpg&w=1200" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem