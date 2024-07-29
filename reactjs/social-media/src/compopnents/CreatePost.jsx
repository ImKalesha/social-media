import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

  const {addPost} = useContext(PostList);
  const navigate = useNavigate();

  const titleRef = useRef();
  const messageRef = useRef();
  const useridRef = useRef();
  const tagsRef = useRef();
  const reactionsRef = useRef();

  const handleSubmit = function (e) {
    e.preventDefault();
    const data = {
      title: titleRef.current.value,
      body: messageRef.current.value,
      reactions: reactionsRef.current.value,
      userId: 5,
      tags: tagsRef.current.value.split(' ')
  }
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((post) => {
      addPost(post)
      navigate("/posts");
    });
  }


  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">
            Create a post
          </label>
          <input
            type="text"
            class="form-control"
            ref={titleRef}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            Enter post title
          </div>
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            message
          </label>
          <input
            type="textarea"
            class="form-control"
            ref={messageRef}
          />
        </div>

        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            reactions
          </label>
          <input
            type="textarea"
            class="form-control"
            ref={reactionsRef}
          />
        </div>


        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            user id
          </label>
          <input
            type="textarea"
            class="form-control"
            ref={useridRef}
          />
        </div>

        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            tags
          </label>
          <input
            type="textarea"
            class="form-control"
            ref={tagsRef}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
