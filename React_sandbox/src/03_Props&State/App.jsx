import { useState } from "react";
import TrendingList from "./TrendingList";

export default function App() {
  const movieArray = [
  {
    title: "The Witcher - season 1",
    releaseYear: 2019,
    imageUrl: "https://i.ebayimg.com/images/g/bmIAAOSwpLRkZ1CX/s-l400.jpg"
  }, 
  {
    title: "The Witcher - season 2",
    releaseYear: 2021,
    imageUrl: "https://preview.redd.it/official-poster-for-the-witcher-season-2-v0-qyjuzzoo8ew71.jpg?auto=webp&s=d2488cada1ec3180c4db481540cacb4152c046b4"
  }, 
  {
    title: "The Witcher - season 3",
    releaseYear: 2023,
    imageUrl: "https://m.media-amazon.com/images/I/61PhvQ4D04L._AC_UF894,1000_QL80_.jpg"
  },
  {
    title: "Interstellar",
    releaseYear: 2014,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Tenet",
    releaseYear: 2020,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg"
  }

  ];
  const [movieData] = useState(movieArray);

  return <div><TrendingList movies={movieData} /></div>;
}
