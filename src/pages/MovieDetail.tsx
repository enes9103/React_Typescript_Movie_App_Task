import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import DataBaseFunctions from "../auth/DataBaseFunctions";
import Comments from "../components/Comments";
import { AuthContext } from "../context/AuthContext";
import { addNewBlog, useData } from "../auth/DataBaseFunctions";

const initialValues = {
  comment : "",
  user : "",
  id : ""
}

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [commentForm, setCommentForm] = useState(initialValues);
  const [shareForm, setShareForm] = useState({email:""});

  const {currentUser} = useContext(AuthContext);
  const {commentData} = useData()

  const commentList = commentData?.filter(comment => comment.id === id);

  // const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const API_KEY = "eeed018179a4468a4d5a012819757c7d";

  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage = "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

 
  const user = "user";
  const pk = "id";

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl]);

  const handleChange = (e) => {
    e.preventDefault()
    const {name, value } = e.target;
    setCommentForm({...commentForm, [name] : value,  [user]: currentUser.displayName, [pk]: id});
    console.log(commentForm)
  }

  const handleChangeShare = (e) => {
    setShareForm({...shareForm, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewBlog(commentForm);
  }

return (
  <div className="container py-5">
    <h1 className="text-center">{movieDetails?.title}</h1>
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={
              movieDetails?.poster_path
                ? baseImageUrl + movieDetails?.poster_path
                : defaultImage
            }
            className="img-fluid rounded-start"
            alt="Movie Poster"
          />
        </div>
        <div className="col-md-8 d-flex flex-column ">
          <div className="card-body">
            <h5 className="card-title">Overview</h5>
            <p className="card-text">{movieDetails?.overview}</p>
            {/* Favory, Advice, Comment Buttons */}
            <div>
              <button className="btn btn-primary" ><i className="bi bi-heart"></i></button>
              <button className="btn btn-primary" onClick={() => setShowShare((s) => !s)}><i className="bi bi-share"></i></button>
              <button className="btn btn-primary" onClick={() => setShowComment((s) => !s)} ><i className="bi bi-pencil-square"></i></button>
            </div>
            {/* Advice form */}
            <form style={{ display: showShare ? "block" : "none", marginRight: "1rem" }}>
              <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={shareForm.email} onChange={handleChangeShare} placeholder="example@example.com" />
              <button className="btn btn-primary" >Advice</button>
            </form>
            {/* Comment form */}
            <form className='commentBox' onSubmit={handleSubmit} style={{ display: showComment ? "block" : "none", marginRight: "1rem" }}>
              <label htmlFor="exampleFormControlTextarea1" value={commentForm.name} className="form-label" style={{ marginTop: "1rem", marginBottom: "-30px" }}>Write a Comment</label>
              <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Name Surname" />
              <textarea className="form-control" name="comment" value={commentForm.comment} onChange={handleChange} id="exampleFormControlTextarea1" rows="3" placeholder="Write a Comment"></textarea>
              <button className="btn btn-primary" type="submit">Send</button>
            </form>
          </div>
          <div>
          {commentList.map(comment => <p>{comment} </p>)}
          </div>
          <div>
          {/* <DataBaseFunctions comment={commentForm}/> */}
          {/* <Comments comment={commentForm}/> */}
          </div>
          <ul className="list-group ">
            <li className="list-group-item">
              {"Release Date : " + movieDetails?.release_date}
            </li>
            <li className="list-group-item">
              {"Rate : " + movieDetails?.vote_average}
            </li>
            <li className="list-group-item">
              {"Total Vote : " + movieDetails?.vote_count}
            </li>
            <li className="list-group-item">
              {/* Return link to the page we came from */}
              <Link to={-1} className="card-link">
                Go Back
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
}

export default MovieDetail
