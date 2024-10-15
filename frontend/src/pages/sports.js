import React from 'react';
import { Link } from 'react-router-dom';
import './sports.css';

const sportsEvents = [
  { id: 1, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358311-xtmewlcxzt-portrait.jpg', title: 'Chennai Chess Club - Blitz Event' },
  { id: 2, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAxNiBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408550-ytjusmstqc-portrait.jpg', title: 'Chess Club - Connect Online Chess Classes' },
  { id: 3, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBTZXAgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409557-rcavcmcver-portrait.jpg', title: 'Rapid Chess Tournament Championship' },
  { id: 4, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409087-dveqzwcyhn-portrait.jpg', title: 'Chess Championship 2024' },
  { id: 5, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00387411-fmxtcldbhj-portrait.jpg', title: 'Mega Marathon Event 2024' },
  { id: 6, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00342542-phgwupckzk-portrait.jpg', title: 'Hercules Virtual Marathon' },
  { id: 7, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00338822-hvjeqxaqye-portrait.jpg', title: 'Mahatma 10K Challenge' },
  { id: 8, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBTZXAgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408737-kvmkvcnmwg-portrait.jpg', title: 'Virtual Race Event' },
  { id: 9, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410189-xsryjycraa-portrait.jpg', title: 'ISL 2024-25 Chennaiyin FC vs Goa' },
  { id: 10, image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA3IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410191-cufabkpbdv-portrait.jpg', title: 'Chennaiyin FC vs East Bengal' },
  // Add more events as necessary
];

const SportsEvents = () => {
  return (
    <div className="sports-events-container">
      <h2>Sports Events</h2>
      <div className="grid-container">
        {sportsEvents.map(event => (
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

export default SportsEvents;
