import React, { useState } from "react";
import Button from "../ui/Button";
import styled from "styled-components";

const AddMovie = (props) => {
  //props yang data nya berasal dari main
  const { movies, setMovies } = props;

  // state yang menghandle proses inputan
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");

  // arrow function manghandlw inputan title
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // arrow function menghandle inputan date
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const genreOptions = ["Action", "Drama", "Horor", "Comedy"];
  // arrow func menghandle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" && date === "") {
      alert("title dan date kosong");
    } else if (title === "") {
      alert("title kosong");
    } else if (date === "") {
      alert("date kosong");
    } else {
      const movie = {
        id: 4,
        title: title,
        date: date,
        Image: image,
        genre: genre,
      };
      setMovies([...movies, movie]);
    }
  };

  return (
    <AddMovieStyle>
      <div className="container">
        <form className="addmovie" onSubit={handleSubmit}>
          <h2>Add Movie</h2>
          <input
            className="addmovie__input"
            id="title"
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="Masukkan Title"
          />
          <input
            className="addmovie__input"
            id="date"
            type="date"
            value={date}
            onChange={handleDate}
          />
          <input
            className="addmovie__input"
            id="image"
            type="text"
            value={image}
            onChange={handleImage}
            placeholder="Masukkan Link"
          />
          <select
            className="addmovie__input"
            id="genre"
            value={genre}
            onChange={handleGenre}
            placeholder="Masukkan genre"
          >
            <option value="" disabled>
              Select a genre
            </option>
            {genreOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}

          </select>
          <Button variant="primary">simpan</Button>
        </form>
      </div>
    </AddMovieStyle>
  );
};

const AddMovieStyle = styled.div`
  .container {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .addmovie {
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 8px;
    border: 2px solid #16462a;
    background-color: aquamarine;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .addmovie__title {
    margin-top: 1.5rem;
    color: white;
    text-align: center;
    font-size: 1.8rem;
  }

  .addmovie__input {
    display: block;
    box-sizing: border-box;
    border: 2px solid #16462a;
    border-radius: 6px;
    margin: 1.5rem 0;
    padding: 0.8rem;
    width: 100%;
    max-width: 300px;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .addmovie {
      max-width: 400px;
      margin: 16px auto;
    }
  }
`;

export default AddMovie;
