import { PostCard } from "../Postcard";
import "./styles.css";

export const Post = ({posts}) => (
    <div className="posts">
          {posts.map(post => {
            return (
              <PostCard
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
                cover={post.cover}
              />
            );
          })}
        </div>
)