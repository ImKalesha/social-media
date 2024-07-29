
const Post = ({ post }) => {
  return (
    <>
      <div class="card" style={{ width: "30rem", margin: "2%"}}>
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <p class="card-text">
            {post.body}
          </p>
          {
            post.tags.map(tag => (
              <span class="badge text-bg-primary" key={tag} style={{marginLeft: "5px"}}>{tag}</span>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Post;
