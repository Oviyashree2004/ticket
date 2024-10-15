import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';  // Ensure you have this CSS file for styling
import BookingForm from './BookingForm';  // Import the BookingForm component

const movies = [
  {
    id: 1,
    title: 'The Greatest of All Time',
    genre: 'Action/Drama/Thriller',
    rating: 8.0,
    votes: '115.3K',
    description: 'Prepare for a massive adventure...',
    duration: '2h 50m',
    releaseDate: '29 Aug, 2024',
    languages: 'Tamil, Hindi, English',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgMTE1LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00401439-xdtxcmtyux-portrait.jpg'
  },
  {
    id: 2,
    title: 'Vaazhai',
    genre: 'Drama',
    rating: 8.7,
    votes: '34.5K',
    description: 'A beautiful story about...',
    duration: '2h 30m',
    releaseDate: '25 Jul, 2024',
    languages: 'Tamil, Kannada',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAzNC41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408594-kxylmtxdpl-portrait.jpg'
  },
  {
    id: 3,
    title: 'Demonte Colony 2 - Vengeance of The Unholy',
    genre: 'Horror/Thriller',
    rating: 8.4,
    votes: '41.1K',
    description: 'The terror continues in this sequel...',
    duration: '2h 20m',
    releaseDate: '15 Aug, 2024',
    languages: 'Tamil, Telugu',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0MS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00380018-vlvxmddfxg-portrait.jpg'
  },
  {
    id: 4,
    title: 'Surya\'s Saturday',
    genre: 'Action/Drama',
    rating: 8.5,
    votes: '9.5K',
    description: 'Prepare for a Massive Storm in theaters...',
    duration: '2h 50m',
    releaseDate: '29 Aug, 2024',
    languages: 'Tamil, Kannada, Malayalam, Hindi',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA5LjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00409364-ucywxtdzsg-portrait.jpg'
  },
  {
    id: 5,
    title: 'Beetlejuice Beetlejuice',
    genre: 'Comedy/Fantasy/Horror',
    rating: 7.7,
    votes: '284',
    description: 'A hilarious and spooky story...',
    duration: '2h 45m',
    releaseDate: '10 Sep, 2024',
    languages: 'English',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAyODYgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00392278-ewfhtxhwyf-portrait.jpg'
  },
  {
    id: 6,
    title: 'Stree 2: Sarkate Ka Aatank',
    genre: 'Comedy/Horror',
    rating: 8.9,
    votes: '326.8K',
    description: 'A hilarious continuation of Stree...',
    duration: '2h 35m',
    releaseDate: '20 Sep, 2024',
    languages: 'Hindi',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAzMjcuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-khjjypdaat-portrait.jpg'
  },
  {
    id: 7,
    title: 'Saripodhaa Sanivaaram',
    genre: 'Action/Drama',
    rating: 9.0,
    votes: '81.5K',
    description: 'An action-packed drama...',
    duration: '2h 45m',
    releaseDate: '10 Sep, 2024',
    languages: 'Tamil',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgODEuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388631-qnhmahsruh-portrait.jpg'
  },
  {
    id: 8,
    title: '35 (2024)',
    genre: 'Drama/Family/Kids',
    rating: 9.4,
    votes: '3K',
    description: 'A heartwarming family film...',
    duration: '2h 30m',
    releaseDate: '05 Oct, 2024',
    languages: 'English',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAzLjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00403697-pymcxlwwkj-portrait.jpg'
  },
  {
    id: 9,
    title: 'Padatik',
    genre: 'Biography/Drama',
    rating: 8.6,
    votes: '1.5K',
    description: 'A biographical drama...',
    duration: '2h 15m',
    releaseDate: '01 Oct, 2024',
    languages: 'Hindi',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAxLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00405676-yuasxaxvgm-portrait.jpg'
  },
  {
    id: 10,
    title: 'Joker',
    genre: 'Suspense Thriller/Drama',
    rating: 8.6,
    votes: '1.5K',
    description: 'A suspenseful thriller...',
    duration: '2h 20m',
    releaseDate: '30 Sep, 2024',
    languages: 'English',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTkuMUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352820-vxssyqjufr-portrait.jpg'
  },
  
];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookTickets = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="movie-detail">
      <div className="movie-poster">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="movie-info-detail">
        <h1>{movie.title}</h1>
        <p className="rating">⭐ {movie.rating}/10 ({movie.votes} Votes)</p>
        <p>{movie.duration} • {movie.genre} • {movie.releaseDate}</p>
        <p>Languages: {movie.languages}</p>
        <button className="book-btn" onClick={handleBookTickets}>Book tickets</button>
        <div className="about-movie">
          <h2>About the Movie</h2>
          <p>{movie.description}</p>
        </div>
      </div>
      {showBookingForm && (
        <BookingForm onClose={() => setShowBookingForm(false)} movie={movie} />
      )}
    </div>
    
    
  );
};


export default MovieDetail;
