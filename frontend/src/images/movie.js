import React from 'react';
import { Link } from 'react-router-dom';
import './Ticket.css';  // Ensure you have this CSS file for styling

// Movie data
const movies = [
  {
    id: 1,
    title: 'The Greatest of All Time',
    genre: 'Action/Drama/Thriller',
    rating: 8.0,
    votes: '115.3K',
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgMTE1LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00401439-xdtxcmtyux-portrait.jpg"
  },
  {
    id: 2,
    title: 'Vaazhai',
    genre: 'Drama',
    rating: 8.7,
    votes: '34.5K',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAzNC41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408594-kxylmtxdpl-portrait.jpg'
  },
  {
    id: 3,
    title: 'Demonte Colony 2 - Vengeance of The Unholy',
    genre: 'Horror/Thriller',
    rating: 8.4,
    votes: '41.1K',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0MS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00380018-vlvxmddfxg-portrait.jpg'
  },
  {
    id: 4,
    title: 'Surya\'s Saturday',
    genre: 'Action/Drama',
    rating: 8.5,
    votes: '9.5K',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA5LjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00409364-ucywxtdzsg-portrait.jpg'
  },
  {
    id: 5,
    title: 'Beetlejuice Beetlejuice',
    genre: 'Comedy/Fantasy/Horror',
    rating: 7.7,
    votes: '284',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAyODYgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00392278-ewfhtxhwyf-portrait.jpg'
    },
  {
    id: 6,
    title: 'Stree 2: Sarkate Ka Aatank',
    genre: 'Comedy/Horror',
    rating: 8.9,
    votes: '326.8K',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAzMjcuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-khjjypdaat-portrait.jpg'
  },
  {
    id: 7,
    title: 'Saripodhaa Sanivaaram',
    genre: 'Action/Drama',
    rating: 9.0,
    votes: '81.5K',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgODEuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388631-qnhmahsruh-portrait.jpg'
  },
  {
    id: 8,
    title: '35 (2024)',
    genre: 'Drama/Family/Kids',
    rating: 9.4,
    votes: '3K',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAzLjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00403697-pymcxlwwkj-portrait.jpg'
  },
  {
    id: 9,
    title: 'Padatik',
    genre: 'Biography/Drama',
    rating: 8.6,
    votes: '1.5K',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAxLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00405676-yuasxaxvgm-portrait.jpg'
  },
  {
    id: 10,
    title: 'Joker',
    genre: 'Suspence Thriller/Drama',
    rating: 9.1,
    votes: '8.7',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTkuMUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352820-vxssyqjufr-portrait.jpg'
  },
];

// Sports events data
const sportsEvents = [
  { id: 11, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358311-xtmewlcxzt-portrait.jpg', title: 'Chennai Chess Club - Blitz Event' },
  { id: 12, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAxNiBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408550-ytjusmstqc-portrait.jpg', title: 'Chess Club - Connect Online Chess Classes' },
  { id: 13, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBTZXAgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409557-rcavcmcver-portrait.jpg', title: 'Rapid Chess Tournament Championship' },
  { id: 14, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409087-dveqzwcyhn-portrait.jpg', title: 'Chess Championship 2024' },
  { id: 15, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00387411-fmxtcldbhj-portrait.jpg', title: 'Mega Marathon Event 2024' },
  { id: 16, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00342542-phgwupckzk-portrait.jpg', title: 'Hercules Virtual Marathon' },
  { id: 17, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00338822-hvjeqxaqye-portrait.jpg', title: 'Mahatma 10K Challenge' },
  { id: 18, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBTZXAgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408737-kvmkvcnmwg-portrait.jpg', title: 'Virtual Race Event' },
  { id: 19, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410189-xsryjycraa-portrait.jpg', title: 'ISL 2024-25 Chennaiyin FC vs Goa' },
  { id: 20, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA3IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410191-cufabkpbdv-portrait.jpg', title: 'Chennaiyin FC vs East Bengal' },
];


const MovieList = () => {
  return (
    <div className="movie-list">
      <h2>Recommended Movies</h2>
      <div className="movies">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.genre}</p>
              <div className="movie-rating">
                <span>⭐ {movie.rating}/10</span>
                <span>{movie.votes} Votes</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2>Sports Events</h2>
      <div className="grid-container">
        {sportsEvents.map((event) => (
          <Link
            key={event.id}
            to={`/sports/${event.id}`} // Navigate to the detail page with ID
            className="event-card"
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
