import {useState} from 'react'

export function PostsIndex(props) {
  const [currentPost, setCurrentPost] = useState({})
  console.log("The props are", props);
  const handleShowPost = (post) => {
    console.log(post)
    setCurrentPost(post)
    console.log('handle show post')
  }
  
  return (
    <div id="posts-index">
      <div className="row">
        {props.posts.map(post => (
          <div key={post.id} className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}.</p>                
                <button onClick={() => handleShowPost(post)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>      


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{currentPost.title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {currentPost.body}
            </div>
            <div className="modal-body">
              {currentPost.image}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
