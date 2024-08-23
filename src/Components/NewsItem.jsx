import image from '../assets/default.jpg';

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ width: "345px" }}>
            <img src={src ? src : image} style={{ height: "180px", width: "328px" }} className="card-img-top" alt="..."
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = image;
                }}
            />
            <div className="card-body">
                <h5 className="card-title" style={{ height: '75px' }}>{title.slice(0, 50)}</h5>
                <p className="card-text" style={{ height: '75px' }}>{description ? description.slice(0, 90) : "News is the source for getting to know what is happening around us at the moment."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem;