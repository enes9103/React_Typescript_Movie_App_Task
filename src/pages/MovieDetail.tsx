import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { addNewBlog } from "../helpers/DataBaseFirebase";

const initialValues = {
  comment: "",
  user: "",
  movieId: "",
};

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState();
  //BUTTONS STATE
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);
  //COMMENT AND SHARE STATE
  const [commentForm, setCommentForm] = useState(initialValues);
  const [comment, setComment] = useState();
  const [shareForm, setShareForm] = useState({ email: "" });

  //CONTEXT
  const { currentUser, commentData }:any = useContext(AuthContext);
  //COMMENT DATA FİLTER
  const commentList = commentData?.filter((comment:any) => comment.movieId === id);

  // const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const API_KEY = "eeed018179a4468a4d5a012819757c7d";
  // URLS
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage = "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl]);

  //COMMENT FUNC.
  const handleChange = (e:any) => {
    e.preventDefault();
    const { value } = e.target;
    setComment(value);
    setCommentForm({
      comment: value,
      user: currentUser.displayName,
      movieId: id,
    } as any);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewBlog(commentForm);
    setCommentForm(initialValues);
  };

  //SHARE FUNC.
  const handleSubmitShare = (e:any) => {
    e.preventDefault();
    setShareForm({ ...shareForm, [e.target.email]: e.target.value });
    alert(`Recommended to e-mail address.`);
    e.target.reset();
  };

  return (
    <div className="container py-5">
      <h1 className="text-center">{movieDetails?.['title']}</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                movieDetails?.['poster_path']
                  ? baseImageUrl + movieDetails?.['poster_path']
                  : defaultImage
              }
              className="img-fluid rounded-start"
              alt="Movie Poster"
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title">Overview</h5>
              <p className="card-text">{movieDetails?.['overview']}</p>
              {/* FAVORY, ADVİCE, COMMENT BUTTONS */}
              <div>
                <button className="btn btn-primary">
                  <i className="bi bi-heart"></i>
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowShare((s) => !s)}
                >
                  <i className="bi bi-share"></i>
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowComment((s) => !s)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
              {/* ADVİCE FORM */}
              <form
                onSubmit={handleSubmitShare}
                style={{
                  display: showShare ? "block" : "none",
                  marginRight: "1rem",
                }}
              >
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  placeholder="example@example.com"
                />
                <button className="btn btn-primary" type="submit">
                  Advice
                </button>
              </form>
              {/* COMMENT FORM */}
              <form
                className="commentBox"
                onSubmit={handleSubmit}
                style={{
                  display: showComment ? "block" : "none",
                  marginRight: "1rem",
                }}
              >
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                  style={{ marginTop: "1rem", marginBottom: "-30px" }}
                >
                  Write a Comment
                </label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name Surname"
                />
                <textarea
                  className="form-control"
                  name="comment"
                  value={comment}
                  onChange={handleChange}
                  id="exampleFormControlTextarea1"
                  placeholder="Write a Comment"
                ></textarea>
                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </form>
            </div>
            {/* COMMENT ACCORDİON */}
            <p>
              <button
                className="accordion-button"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample" >
                <h5>Comments</h5>
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              {commentList.map((comment:any, index:number) => (
                <div key={index} className="card card-body">
                  <strong>{comment.user}</strong>
                  {comment.comment}
                </div>
              ))}
            </div>
            {/* DATE, RATE, TOTAL VOTE İNFORMATİONS */}
            <ul className="list-group ">
              <li className="list-group-item">
                {"Release Date : " + movieDetails?.['release_date']}
              </li>
              <li className="list-group-item">
                {"Rate : " + movieDetails?.['vote_average']}
              </li>
              <li className="list-group-item">
                {"Total Vote : " + movieDetails?.['vote_count']}
              </li>
              <li className="list-group-item">
                {/* Return link to the page we came from */}
                <button className="btn btn-primary" onClick={() => navigate(-1)}><i className="bi bi-camera-reels"></i>   Go Back</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
