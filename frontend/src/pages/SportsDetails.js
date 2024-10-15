import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SportsDetail.css';
import BookingForm from './BookingForm';

const sportsEvents = [
  {
    id: 1,
    title: 'Chennai Chess Club - Blitz Event',
    genre: 'Chess Tournament',
    date: '15 Sep, 2024',
    time: '9:45 AM',
    location: 'Chai Galli, Chennai',
    price: '₹ 199',
    description: 'Join us for a thrilling Blitz Chess Tournament. Suitable for all ages above 5.',
    languages: 'English, Tamil',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358311-xtmewlcxzt-portrait.jpg'
  },
  {
    id: 2,
    title: 'Chess Club - Connect Online Chess Classes',
    genre: 'Online Chess Classes',
    date: '20 Sep, 2024',
    time: '5:00 PM',
    location: 'Online Event',
    price: '₹ 499',
    description: 'Enhance your chess skills with our online chess classes conducted by expert coaches.',
    languages: 'English',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAxNiBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408550-ytjusmstqc-portrait.jpg'
  },
  {
    id: 3,
    title: 'Rapid Chess Tournament Championship',
    genre: 'Chess Tournament',
    date: '22 Sep, 2024',
    time: '10:00 AM',
    location: 'Chennai Chess Academy',
    price: '₹ 299',
    description: 'Compete in our Rapid Chess Tournament and stand a chance to win exciting prizes.',
    languages: 'English, Tamil',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBTZXAgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409557-rcavcmcver-portrait.jpg'
  },
  {
    id: 4,
    title: 'Chess Championship 2024',
    genre: 'Chess Tournament',
    date: '25 Sep, 2024',
    time: '11:00 AM',
    location: 'Chennai Trade Centre',
    price: '₹ 399',
    description: 'Participate in the prestigious Chess Championship 2024 and showcase your skills.',
    languages: 'English, Tamil',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409087-dveqzwcyhn-portrait.jpg'
  },
  {
    id: 5,
    title: 'Mega Marathon Event 2024',
    genre: 'Marathon',
    date: '29 Sep, 2024',
    time: '6:00 AM',
    location: 'Marina Beach, Chennai',
    price: '₹ 799',
    description: 'Run the Mega Marathon 2024 and experience the joy of fitness and competition.',
    languages: 'English, Tamil',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00387411-fmxtcldbhj-portrait.jpg'
  },
  {
    id: 6,
    title: 'Hercules Virtual Marathon',
    genre: 'Virtual Marathon',
    date: '02 Oct, 2024',
    time: '6:00 AM',
    location: 'Virtual Event',
    price: '₹ 399',
    description: 'Participate in the Hercules Virtual Marathon from anywhere and at your own pace.',
    languages: 'English',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00342542-phgwupckzk-portrait.jpg'
  },
  {
    id: 7,
    title: 'Mahatma 10K Challenge',
    genre: '10K Run',
    date: '05 Oct, 2024',
    time: '5:30 AM',
    location: 'Gandhi Mandapam, Chennai',
    price: '₹ 599',
    description: 'Join the Mahatma 10K Challenge and celebrate fitness with a purpose.',
    languages: 'English, Tamil',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00338822-hvjeqxaqye-portrait.jpg'
  },
  {
    id: 8,
    title: 'Virtual Race Event',
    genre: 'Virtual Race',
    date: '10 Oct, 2024',
    time: '6:00 AM',
    location: 'Virtual Event',
    price: '₹ 499',
    description: 'Run at your own pace in the Virtual Race Event and earn a finisher medal.',
    languages: 'English',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBTZXAgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408737-kvmkvcnmwg-portrait.jpg'
  },
  {
    id: 9,
    title: 'ISL 2024-25 Chennaiyin FC vs Goa',
    genre: 'Football Match',
    date: '15 Oct, 2024',
    time: '7:30 PM',
    location: 'Jawaharlal Nehru Stadium, Chennai',
    price: '₹ 999',
    description: 'Witness the thrilling ISL 2024-25 match between Chennaiyin FC and Goa.',
    languages: 'English, Tamil',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410189-xsryjycraa-portrait.jpg'
  },
  {
    id: 10,
    title: 'Chennaiyin FC vs East Bengal',
    genre: 'Football Match',
    date: '20 Oct, 2024',
    time: '7:30 PM',
    location: 'Jawaharlal Nehru Stadium, Chennai',
    price: '₹ 999',
    description: 'Watch Chennaiyin FC take on East Bengal in an electrifying ISL 2024-25 match.',
    languages: 'English, Tamil',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA3IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410191-cufabkpbdv-portrait.jpg'
  }
];

const SportsDetail = () => {
  const { id } = useParams();
  const event = sportsEvents.find((e) => e.id === parseInt(id, 10));
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookTickets = () => {
    setShowBookingForm(true);
  };

  if (!event) {
    return <div>Event not found or incorrect route</div>;
  }

  return (
    <div className="sports-detail">
      <div className="event-poster">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-info-detail">
        <h1>{event.title}</h1>
        <p className="genre">{event.genre}</p>
        <p>{event.date} • {event.time} • {event.location}</p>
        <p>Price: {event.price}</p>
        <p>Languages: {event.languages}</p>
        <button className="book-btn" onClick={handleBookTickets}>Book tickets</button>
        <div className="about-event">
          <h2>About the Event</h2>
          <p>{event.description}</p>
        </div>
      </div>
      {showBookingForm && (
        <BookingForm onClose={() => setShowBookingForm(false)} event={event} />
      )}
    </div>
  );
};

export default SportsDetail;
