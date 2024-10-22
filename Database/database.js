import krinjaldave from '../src/assets/Artist/Artist3.jpg'
import GeetabenRavai from '../src/assets/Artist/Artist1.png'
import PurvaMantri from '../src/assets/Artist/Artist2.png'
import event1 from '../src/assets/Upcommingevents/Card1.png';
import event2 from '../src/assets/Upcommingevents/Card2.png';
import event4 from '../src/assets/Upcommingevents/Card4.png';
import event6 from '../src/assets/Upcommingevents/Card6.png';
import event7 from '../src/assets/Upcommingevents/Card7.png';
import event9 from '../src/assets/Upcommingevents/Card9.png';
import geetaravaispotify from '../src/assets/Spotify/Tetudo2.png';
import purvamantrispotify from '../src/assets/Spotify/Vara_vara.png';
import kinjaldavespotify from '../src/assets/Spotify/VichodoKinjalDave.png';
// Insta images 
import geetaravaiinsta1 from '../src/assets/Artist/Geetagal1.jpg';
import geetaravaiinsta2 from '../src/assets/Artist/Geetagal2.jpg';
import geetaravaiinsta3 from '../src/assets/Artist/Geetagal3.jpg';
import geetaravaiinsta4 from '../src/assets/Artist/Geetagal4.jpg';
import geetaravaiinsta5 from '../src/assets/Artist/Geetagal5.jpg';
import geetaravaiinsta6 from '../src/assets/Artist/Geetagal6.jpg';

import kinjalinsta1 from '../src/assets/Artist/Kinjalinsta1.jpg';
import kinjalinsta2 from '../src/assets/Artist/Kinjalinsta2.jpg';
import kinjalinsta3 from '../src/assets/Artist/Kinjalinsta3.jpg';
import kinjalinsta4 from '../src/assets/Artist/Kinjalinsta4.jpg';
import kinjalinsta5 from '../src/assets/Artist/Kinjalinsta5.jpg';
import kinjalinsta6 from '../src/assets/Artist/Kinjalinsta6.jpg';
import kinjalinsta7 from '../src/assets/Artist/Kinjalinsta7.jpg';

import purvainsta1 from '../src/assets/Artist/purvainsta1.jpg';
import purvainsta2 from '../src/assets/Artist/purvainsta2.jpg';
import purvainsta3 from '../src/assets/Artist/purvainsta3.jpg';
import purvainsta4 from '../src/assets/Artist/purvainsta4.jpg';
import purvainsta5 from '../src/assets/Artist/purvainsta5.jpg';
import purvainsta6 from '../src/assets/Artist/purvainsta6.jpg';


export const artists = [
  {
    id: 'krinjaldave',
    name: "Kinjal Dave",
    image: krinjaldave,
    description: "Garba Queen",
    socialMedia: {
      facebook: "https://www.facebook.com/kinjaldavemusic",
      instagram: "https://www.instagram.com/thekinjaldave/?hl=en",
      youtube: "https://www.youtube.com/c/KDDigitalKinjaldave",
    },
    spotify: {
      artistUrl: "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
      popularSongs: [
        {
          title: "Vichodo",
          album: "Vichodo",
          coverUrl: kinjaldavespotify,
          description:"Song description",
          spotifyUrl: "https://open.spotify.com/track/6okl6K7GqLehjY1my9CmdQ",
        },
        {
          title: "Bewafa Tune Mujko Pagal Kar Diya",
          album: "Bewafa Tune Mujko Pagal Kar Diya",
          coverUrl: "https://i.scdn.co/image/ab67616d0000b27357f6e4a4b1c343d4f4deb0f7",
          description:"Song description",
          spotifyUrl: "https://open.spotify.com/track/0WqIKmW4BTrj3eJFmnCKMv",
        },
      ],
    },
    instagramImages: [
      kinjalinsta1,
      kinjalinsta2,
      kinjalinsta3,
      kinjalinsta4,
      kinjalinsta5,
      kinjalinsta6,
      kinjalinsta7,
    ],
  },
  {
    id: 'geetabenravai',
    name: "Geeta Rabari",
    image: GeetabenRavai,
    description: "Kutch Ni Koyal",
    socialMedia: {
      facebook: "https://www.facebook.com/GeetaRabariOfficial/",
      instagram: "https://instagram.com/geetabenravai",
      youtube: "https://www.youtube.com/channel/UCxEjIcW9n0JsTSCGQDufi9A",
    },
    spotify: {
      artistUrl: "https://open.spotify.com/artist/1X9zWi58Hl9oZ5OXJuzAHs",
      popularSongs: [
        {
          title: "Tetudo 2",
          album: "Tetudo 2",
          coverUrl: geetaravaispotify,
          description:"Song description",
          spotifyUrl: "https://open.spotify.com/track/6EBnRH4lW1mMMyVoBreG6K",
        },
        {
          title: "Char Bangdi Vadi Gadi",
          album: "Char Bangdi Vadi Gadi",
          coverUrl: "https://i.scdn.co/image/ab67616d0000b273b7f51c8d7a5f3ebe26379f4c",
          description:"Song description",
          spotifyUrl: "https://open.spotify.com/track/4XjrfHzSX4ZXQKVKPqjlNZ",
        },
      ],
    },
    instagramImages: [
      geetaravaiinsta1,
      geetaravaiinsta2,
      geetaravaiinsta3,
      geetaravaiinsta4,
      geetaravaiinsta5,
      geetaravaiinsta6,
    ],
  },
  {
    id: 'purvamantri',
    name: "Purva Mantri",
    image: PurvaMantri,
    description: "Garba Dhamaal",
    socialMedia: {
      facebook: "https://www.facebook.com/PurvaMantriOfficial/",
      instagram: "https://www.instagram.com/purvamantrisinger/?hl=en",
      youtube: "https://www.youtube.com/channel/UCnj_I2XuOrUJOtjyGvBjyxA",
    },
    spotify: {
      artistUrl: "https://open.spotify.com/artist/5f4QpKfy7ptCHwTqspnSJI",
      popularSongs: [
        {
          title: "Vara Vara",
          album: "Baar Baar Dekho",
          coverUrl: purvamantrispotify,
          description:"Song description",
          spotifyUrl: "https://open.spotify.com/track/5iydMw7CpDl0zOAVRmOqvt",
        },
        {
          title: "Dilbar",
          album: "Satyameva Jayate",
          coverUrl: "https://i.scdn.co/image/ab67616d0000b273870b7514eba75f315ca879a7",
          description:"Song description",
          spotifyUrl: "https://open.spotify.com/track/0VtjgQQ9LHxWgu8e3ZySJK",
        },
      ],
    },
    instagramImages: [
      purvainsta1,
      purvainsta2,
      purvainsta3,
      purvainsta4,
      purvainsta5,
      purvainsta6,
    ],
  },
];

export const events = [
  {
    id: 3,
    name: "Thangaat Raas Garba in Boston - Kinjal Dave",
    image: event9,
    artist: "krinjaldave",
    place: "Fitchburg, MA, USA",
    date: "2024-10-18",
    time: {
      start: "19:00",
      end: "23:00",
      link: "https://events.sulekha.com/thangaat-raas-garba-24-with-kinjal-dave_event-in_fitchburg-ma_377015?fbclid=IwY2xjawF9MtlleHRuA2FlbQIxMAABHTNhGp9nJHRbCrxEynSIU6YHa8YuSRC6EK5xMcwWSfv2VDaeHmpewB0iDA_aem_V3R4lYOWlPffZX5eOqyIxQ",
    },
  },
  {
    id: 2,
    name: "Garba Dhamaal with Geeta Rabarai - Live",
    image: event7,
    artist: "geetabenravai",
    place: "Denver, CO , USA",
    date: "2024-10-18",
    time: {
      start: "17:30",
      end: "22:30",
      link: "https://events.sulekha.com/maa-garba-2024-with-kairavi-buch_event-in_northglenn-co_377415?fbclid=IwY2xjawF9MoNleHRuA2FlbQIxMAABHd8VaLlwfRcLy0lrvqNjSUuUQYR0948ndgEzMzCBTFpfSkn3324C5Pv6aA_aem_4MHKzOHUOLe29yfdTg09_Q",
    },
  },
  {
    id: 4,
    name: "Purnima Garba with the incredible Kutch Ni Koyal Geetaben Rabari ",
    image: event1,
    artist: "geetabenravai",
    place: "San Mateo, CA , USA",
    date: "2024-10-26",
    time: {
      start: "19:00",
      end: "00:00",
      link: "https://events.sulekha.com/geeta-rabari-live-garba-in-bay-area-2024_event-in_san-mateo-ca_380902?fbclid=IwY2xjawGE1-9leHRuA2FlbQIxMAABHTytd4S6CMow5A40eJSz31pSZ0wT4Z3W1H7ZW8rinqGydwf6mnSHNTO6aw_aem_r05DVzm3_MHmlXfj8s9eQQ",
    },
  },
  {
    id: 1,
    name: "Biggest Garba Dhamaal in Los Angeles with Geeta Rabari",
    image: event2,
    artist: "geetabenravai",
    place: "Los Angeles, CA , USA",
    date: "2024-10-25",
    time: {
      start: "20:00",
      end: "22:00",
      link: "https://events.sulekha.com/garba-dhamaal-with-geetaben-rabari-live-in-los-angeles_event-in_buena-park-ca_381157?fbclid=IwY2xjawGE189leHRuA2FlbQIxMAABHX_LDpcMWNrGjxii2I3h3vi-7gexuKQbsXL3UlpXF8TvXMm2bLAx5yfWNA_aem_ky5S7HKW3cpQzkjjIr8u6Q",
    },
  },
  {
    id: 5,
    name: "Diwali Celebration with Purva Mantri",
    image: event1,
    artist: "purvamantri",
    place: "San Francisco, CA, USA",
    date: "2025-11-12",
    time: {
      start: "19:30",
      end: "23:30",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 6,
    name: "Kinjal Dave's Winter Concert",
    image: event9,
    artist: "krinjaldave",
    place: "Chicago, IL, USA",
    date: "2025-12-20",
    time: {
      start: "20:00",
      end: "23:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 7,
    name: "Geeta Rabari's Spring Celebration",
    image: event1,
    artist: "geetabenravai",
    place: "Houston, TX, USA",
    date: "2025-03-15",
    time: {
      start: "19:00",
      end: "23:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 8,
    name: "Purva Mantri's Summer Bash",
    image: event2,
    artist: "purvamantri",
    place: "Miami, FL, USA",
    date: "2025-06-22",
    time: {
      start: "20:00",
      end: "00:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 9,
    name: "Kinjal Dave's Autumn Fest",
    image: event4,
    artist: "krinjaldave",
    place: "Philadelphia, PA, USA",
    date: "2025-09-10",
    time: {
      start: "18:30",
      end: "22:30",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 10,
    name: "Geeta Rabari's Winter Wonderland",
    image: event6,
    artist: "geetabenravai",
    place: "Denver, CO, USA",
    date: "2025-12-05",
    time: {
      start: "19:30",
      end: "23:30",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 11,
    name: "Purva Mantri's Valentine's Special",
    image: event7,
    artist: "purvamantri",
    place: "Orlando, FL, USA",
    date: "2025-02-14",
    time: {
      start: "20:00",
      end: "00:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 12,
    name: "Kinjal Dave's Holi Celebration",
    image: event9,
    artist: "krinjaldave",
    place: "Austin, TX, USA",
    date: "2025-03-17",
    time: {
      start: "16:00",
      end: "21:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 13,
    name: "Geeta Rabari's Summer Solstice Concert",
    image: event1,
    artist: "geetabenravai",
    place: "Seattle, WA, USA",
    date: "2025-06-21",
    time: {
      start: "19:00",
      end: "23:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 14,
    name: "Purva Mantri's Independence Day Spectacular",
    image: event2,
    artist: "purvamantri",
    place: "Washington D.C., USA",
    date: "2025-07-04",
    time: {
      start: "18:00",
      end: "22:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 15,
    name: "Kinjal Dave's Labor Day Bash",
    image: event4,
    artist: "krinjaldave",
    place: "Atlanta, GA, USA",
    date: "2025-09-01",
    time: {
      start: "17:30",
      end: "22:30",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 16,
    name: "Geeta Rabari's Diwali Dhamaka",
    image: event6,
    artist: "geetabenravai",
    place: "San Jose, CA, USA",
    date: "2025-11-12",
    time: {
      start: "18:30",
      end: "23:30",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 17,
    name: "Purva Mantri's Christmas Carols",
    image: event7,
    artist: "purvamantri",
    place: "Nashville, TN, USA",
    date: "2025-12-24",
    time: {
      start: "19:00",
      end: "23:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 18,
    name: "Kinjal Dave's New Year Countdown",
    image: event9,
    artist: "krinjaldave",
    place: "Las Vegas, NV, USA",
    date: "2025-12-31",
    time: {
      start: "21:00",
      end: "01:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 19,
    name: "Geeta Rabari's Republic Day Special",
    image: event1,
    artist: "geetabenravai",
    place: "Edison, NJ, USA",
    date: "2026-01-26",
    time: {
      start: "18:00",
      end: "22:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 20,
    name: "Purva Mantri's Spring Equinox Show",
    image: event2,
    artist: "purvamantri",
    place: "Portland, OR, USA",
    date: "2026-03-20",
    time: {
      start: "19:30",
      end: "23:30",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 21,
    name: "Kinjal Dave's Memorial Day Concert",
    image: event4,
    artist: "krinjaldave",
    place: "Phoenix, AZ, USA",
    date: "2026-05-25",
    time: {
      start: "18:00",
      end: "22:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 22,
    name: "Geeta Rabari's Monsoon Melodies",
    image: event6,
    artist: "geetabenravai",
    place: "Tampa, FL, USA",
    date: "2026-07-15",
    time: {
      start: "19:00",
      end: "23:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 23,
    name: "Purva Mantri's Autumn Equinox Extravaganza",
    image: event7,
    artist: "purvamantri",
    place: "Minneapolis, MN, USA",
    date: "2026-09-22",
    time: {
      start: "18:30",
      end: "22:30",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 24,
    name: "Kinjal Dave's Halloween Spooktacular",
    image: event9,
    artist: "krinjaldave",
    place: "New Orleans, LA, USA",
    date: "2026-10-31",
    time: {
      start: "20:00",
      end: "00:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 25,
    name: "Geeta Rabari's Thanksgiving Gala",
    image: event1,
    artist: "geetabenravai",
    place: "Dallas, TX, USA",
    date: "2026-11-26",
    time: {
      start: "17:00",
      end: "21:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 26,
    name: "Purva Mantri's Winter Solstice Festival",
    image: event2,
    artist: "purvamantri",
    place: "Salt Lake City, UT, USA",
    date: "2026-12-21",
    time: {
      start: "18:00",
      end: "22:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 27,
    name: "Kinjal Dave's Valentine's Day Romance",
    image: event4,
    artist: "krinjaldave",
    place: "San Diego, CA, USA",
    date: "2027-02-14",
    time: {
      start: "19:00",
      end: "23:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 28,
    name: "Geeta Rabari's St. Patrick's Day Celebration",
    image: event6,
    artist: "geetabenravai",
    place: "Boston, MA, USA",
    date: "2027-03-17",
    time: {
      start: "18:30",
      end: "22:30",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 29,
    name: "Purva Mantri's Earth Day Eco-Concert",
    image: event7,
    artist: "purvamantri",
    place: "San Francisco, CA, USA",
    date: "2027-04-22",
    time: {
      start: "17:00",
      end: "21:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 30,
    name: "Kinjal Dave's Summer Kickoff Party",
    image: event9,
    artist: "krinjaldave",
    place: "Virginia Beach, VA, USA",
    date: "2027-06-01",
    time: {
      start: "19:30",
      end: "23:30",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  },
  {
    id: 31,
    name: "Geeta Rabari's Summer Solstice Concert",
    image: event1,
    artist: "geetabenravai",
    place: "Denver, CO, USA",
    date: "2027-06-21",
    time: {
      start: "19:00",
      end: "23:00",
      link: "https://events.sulekha.com/manpasand-inc-event-organizer-321",
    },
  }
];

export const getArtistById = (id) => artists.find(artist => artist.id === id);
export const getEventsByArtist = (artistId) => events.filter(event => event.artist === artistId);
export const getUpcomingEvents = (limit = 5) => {
  const now = new Date();
  return events
    .filter(event => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit);
};

export const getArtistCount = () => artists.length;
export const getEventCount = () => events.length;

export const getArtistCalendarEvents = (artistId) => {
  const artistEvents = getEventsByArtist(artistId);
  return artistEvents.map(event => ({
    date: new Date(event.date),
    title: event.name,
  }));
};

export function getEventLink(id) {
  const event = events.find(event => event.id === id);
  return event && event.time ? event.time.link : null;
}
