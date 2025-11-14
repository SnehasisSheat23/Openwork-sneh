// Artists
// Artist Images
import krinjaldave from './optimisedAssets/Artist/Artist3.webp';
import GeetabenRavai from './optimisedAssets/Artist/Artist1.webp';

// Tour
import kinjaaldaveTour from './optimisedAssets/Upcommingevents/kinjaaldaveTour.webp';
import GourpreetTour from './optimisedAssets/Upcommingevents/GourpreetTour.webp';
import GeetarabaiTour from './optimisedAssets/Upcommingevents/GeetarabaiTour.webp';
import SuperStarTour from './optimisedAssets/Upcommingevents/SuperStarTour.webp';
import superstarSingerTour from './optimisedAssets/Upcommingevents/superstarSingerTour.webp';
import RexTour from './optimisedAssets/landing2mobile.webp';
// Spotify
import geetaravaispotify from './optimisedAssets/Spotify/Tetudo2.webp';
import kinjaldavespotify from './optimisedAssets/Spotify/VichodoKinjalDave.webp';

// Geeta Instagram
import geetaravaiinsta1 from './optimisedAssets/Artist/Geetagal1.webp';
import geetaravaiinsta2 from './optimisedAssets/Artist/Geetagal2.webp';
import geetaravaiinsta3 from './optimisedAssets/Artist/Geetagal3.webp';
import geetaravaiinsta4 from './optimisedAssets/Artist/Geetagal4.webp';
import geetaravaiinsta5 from './optimisedAssets/Artist/Geetagal5.webp';
import geetaravaiinsta6 from './optimisedAssets/Artist/Geetagal6.webp';

// Kinjal Instagram
import kinjalinsta1 from './optimisedAssets/Artist/Kinjalinsta1.webp';
import kinjalinsta2 from './optimisedAssets/Artist/Kinjalinsta2.webp';
import kinjalinsta3 from './optimisedAssets/Artist/Kinjalinsta3.webp';
import kinjalinsta4 from './optimisedAssets/Artist/Kinjalinsta4.webp';
import kinjalinsta5 from './optimisedAssets/Artist/Kinjalinsta5.webp';
import kinjalinsta6 from './optimisedAssets/Artist/Kinjalinsta6.webp';
import kinjalinsta7 from './optimisedAssets/Artist/Kinjalinsta7.webp';

// Info Images
import rexinfo from './optimisedAssets/Artist/Rexinfo.webp';
import Gurdeep from './optimisedAssets/Artist/Grdeepinfo.webp';
import Parthinfo from './optimisedAssets/Artist/Parthininfo.webp';
import Sharmaninfo from './optimisedAssets/Artist/Sharmaninfo.webp';
import Sunnyinfo from './optimisedAssets/Artist/Sunnyinfo.webp';
import Artharvinfo from './optimisedAssets/Artist/Atharvinfo.webp';
import avirvhavinfo from './optimisedAssets/Artist/Avirvhavinfo.webp';
import khushiinfo from './optimisedAssets/Artist/khushiinfo.webp';

import koshainfo from './assets/KoshaImage1.jpg';
import koshainfo2 from './assets/KoshaImage2.jpg';
import koshainfo3 from './assets/KoshaImage3.jpg';

import anushkainfo from './assets/AnuskhaImage1.jpg';
import anushkainfo2 from './assets/AnuskhaImage2.jpg';
import anushkainfo3 from './assets/AnuskhaImage3.jpg';

export const artists = [
  {
    id: 'KrinjalDave',
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
    bio: `Kinjal Dave is an Indian singer known for her work in the Gujarati music industry.
Kinjal began singing at a young age and gained fame with her hit song "Char Bangdi Vali Gadi" in 2017.
Since then, she has released many popular songs and has performed at various events in India and abroad.

Kinjal is known for her traditional Gujarati folk music. In 2019, she received the Gauravshali Gujarati Award at the 12th Gauravvanta Gujarati Awards.
In 2020, she received the Feelings Pride of India Award in the music category.`,
  },
  {
    id: 'rex',
    name: "Rex Dsouza",
    image: rexinfo,
    description: "Garba Queen",
    socialMedia: {
      facebook: "https://www.facebook.com/Rdsouzaofficial/",
      instagram: "https://www.instagram.com/rexysexyd/",
      youtube: "https://www.youtube.com/@Rexysexy04",
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    bio: "Rex Dsouza is a dynamic Indian singer, live performer, and entertainer who rose to national fame as a finalist in the iconic reality show Fame Gurukul (2005). Known for his rich vocals, vibrant stage presence, and soulful musical expression, Rex has carved a niche for himself in the Indian and international music scene over the past two decades.",
    instagramImages: [
      rexinfo,
      "https://cdn.canvasrebel.com/wp-content/uploads/2023/10/c-RexDsouza__IMG2801_1696927326013.jpeg",
      "https://m.media-amazon.com/images/M/MV5BMTQwNGMyOTktZjg5Mi00NmIzLTg1OTQtYjVkMjcyNmQ4ZDJkXkEyXkFqcGc@._V1_.jpg"
      // Note: Use direct image URLs (ending in .jpg, .png, .webp, etc.)
      // Google search URLs won't work. You need the direct image URL.
    ],
  },

  {
    id: 'GurdeepMehndi',
    name: "Gurdeep Mehndi",
    image: Gurdeep,
    description: "Garba Queen",
    socialMedia: {
      facebook: "https://www.facebook.com/GurdeepSinghMehndi/",
      instagram: "https://www.instagram.com/gurdeepmehndi/",
      youtube: "https://www.youtube.com/channel/UCtQdmJLSu8fqfZgPSFq8IXw",
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    instagramImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkDdNehT_DJlLFz137lryAJBa42XCaZWSV1NLxQXaIZwBP8XcOv37ayojbDGmd9DMcI13YQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJsMJ23XKNtnth7AjAm22vkiSU_lMN4UyX9OkSImV653Z0LUg3fePpuDo547XW6QvsyZoJQ&s=10",
      "https://sosimg.sgp1.cdn.digitaloceanspaces.com/artist-gallery/5649555_1702450282.webp"
    ],
    bio: "Bio information will be added soon.",
  },
  {
    id: 'ParthDoshi',
    name: "Parth Doshi",
    image: Parthinfo,
    description: "Garba Queen",
    socialMedia: {
      facebook: "https://www.facebook.com/ParthDoshiLive/",
      instagram: "https://www.instagram.com/parthdoshilive",
      youtube: "https://www.youtube.com/@ParthDoshiOfficial",
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    instagramImages: [
      
      "https://content3.jdmagicbox.com/comp/vadodara/d4/0265px265.x265.140105211554.p6d4/catalogue/parth-doshi-manjalpur-vadodara-playback-singers-9mk12s54ft.jpg",
      "https://content3.jdmagicbox.com/comp/vadodara/d4/0265px265.x265.140105211554.p6d4/catalogue/parth-doshi-manjalpur-vadodara-playback-singers-448y3n8.jpg",
      "https://pbs.twimg.com/media/ElY_40JWMAU-44H?format=jpg&name=large"
    ],
    bio: "Bio information will be added soon.",
  },
  {
    id: 'GeetabenRabari',
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
    bio: "Geeta Ben Rabari is a Gujarati folk singer. She came into the spotlight by singing the Gujarati song \"Roma Ser Ma.\" She is referred to as the \"Kutchi Koyal,\" which means the songbird of Kutch. She sings bhajans, folklore, santvani, and dayra, and by the age of 20, she established herself as a well-known singer of Gujarat.",
  },
  {
    id: 'SharmanJoshi',
    name: "Sharman Joshi",
    image: Sharmaninfo,
    description: "Garba Queen",
    socialMedia: {
      facebook: "https://www.facebook.com/TheSharmanJoshi/",
      instagram: "https://www.instagram.com/sharmanjoshi/",
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    instagramImages: [
      "https://www.bizasialive.com/wp-content/uploads/2019/02/Sharman-Joshi-The-Lease-of-These-1100x.jpg",
      "https://static.theprint.in/wp-content/uploads/2023/08/ANI-20230823091228.jpg",
      "https://www.hindustantimes.com/ht-img/img/2024/05/06/1600x900/Sharman_Joshi_1715018171159_1715018197355.jpg"

    ],
    bio: "Bio information will be added soon.",
  },
  {
    id: 'SunnyJadhav',
    name: "Sunny Jadhav",
    image: Sunnyinfo,
    description: "Kutch Ni Koyal",
    socialMedia: {
      facebook: null,
      instagram: null,
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    instagramImages: [
       Sunnyinfo,
       "https://static.wixstatic.com/media/fba758_f1f8b9ac29134de3b356630681ff368d~mv2.jpg/v1/fill/w_640,h_1296,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fba758_f1f8b9ac29134de3b356630681ff368d~mv2.jpg"
    ],
    bio: "A musical maestro whose voice echoes legends like Kishore Kumar, Rafi, and Arijit Singh ! He has captivated audiences across India and abroad with soulful performances spanning Bollywood, Garba, Ghazals, and Bhajans. Having shared the stage with icons like Suresh Wadkar and Hariharan, and performed for The Art of Living, this versatile playback singer continues to enchant hearts with his timeless voice.",
  },
  {
    id: 'Atharv',
    name: "Atharv",
    image: Artharvinfo,
    description: "Kutch Ni Koyal",
    socialMedia: {
      facebook: null,
      instagram: null,
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    instagramImages: [],
    bio: "Bio information will be added soon.",
  },
  {
    id: 'Khushi',
    name: "Khushi",
    image: khushiinfo,
    description: "Kutch Ni Koyal",
    socialMedia: {
      facebook: null,
      instagram: null,
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    instagramImages: [],
    bio: "Bio information will be added soon.",
  },
  {
    id: 'Avirbhav',
    name: "Avirbhav",
    image: avirvhavinfo,
    description: "Kutch Ni Koyal",
    socialMedia: {
      facebook: null,
      instagram: null,
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    instagramImages: [],
    bio: "Bio information will be added soon.",
  },
  {
    id: 'Kosha',
    name: "Kosha Pandya",
    image: koshainfo,
    description: "Kutch Ni Koyal",
    socialMedia: {
      facebook: "https://www.facebook.com/koshapandyakp/",
      instagram: "https://www.instagram.com/koshapandyatrivedi/",
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    instagramImages: [
      koshainfo,
      koshainfo2,
      koshainfo3,
    ],
    bio: "Kosha Pandya, a gifted singer with over 17 years of experience, began her musical journey at the age of 16 and continues to captivate audiences worldwide at 33. Hailing from Gujarat, India, she has made a lasting impact on the music industry with her versatile vocals that transcend genres.",
  },
  {
    id: 'Anushka',
    name: "Anuska Pandit",
    image: anushkainfo,
    description: "Kutch Ni Koyal",
    socialMedia: {
      facebook: "https://www.facebook.com/koshapandyakp/",
      instagram: "https://www.instagram.com/anushka_pandit",
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    instagramImages: [
      anushkainfo,
      anushkainfo2,
      anushkainfo3,
    ],
    bio: "Kosha Pandya, a gifted singer with over 17 years of experience, began her musical journey at the age of 16 and continues to captivate audiences worldwide at 33. Hailing from Gujarat, India, she has made a lasting impact on the music industry with her versatile vocals that transcend genres.",
  },


];

export const events = [

  
  
  {
    id: 33,
    image: GeetarabaiTour,
    artist: "geetabenravai",

  },
  {
    id:35,
  image: RexTour,
  artist: "rex",
  },
  {
    id: 34,
    image: SuperStarTour,


  },
  

];

export const getArtistById = (id) => artists.find(artist => artist.id === id);
export const getEventsByArtist = (artistId) => events.filter(event => event.artist === artistId);
{/*export const getUpcomingEvents = (limit = 5) => {
  const now = new Date();
  return events
    .filter(event => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit);
}; */}
export const getUpcomingEvents = (limit = 5) => {
  // Skip date-based filtering since events may not have a date
  return events.slice(0, limit);
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
