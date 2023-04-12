import "./styles.css";

export const PostCard = ({title,cover,id,body}) => {
    return (
        <div className="post">
            <img alt="" className="post-image" src={cover}></img>
          <div key={id} className="post-content">
            <h1>{title}</h1>
            <h5>{body}</h5>
          </div>
          </div>
    );
}