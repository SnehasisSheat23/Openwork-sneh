// Artists
// Artist Images
import KinjalDaveImg from './optimisedAssets/Artist/KinjalDave.webp';
import GeetabenRabariImg from './optimisedAssets/Artist/GeetabenRabari.webp';
import SiddharthRanderiaImg from './optimisedAssets/Artist/SiddharthRanderia.webp';
import RashmiDesaiImg from './optimisedAssets/Artist/RashmiDesai.webp';
import OjasRavalImg from './optimisedAssets/Artist/OjasRaval.webp';
import RexImg from './optimisedAssets/Artist/Rex.webp';
import KoshaImg from './optimisedAssets/Artist/Kosha.webp';
import ParthDoshiImg from './optimisedAssets/Artist/ParthDoshi.webp';
import GiteshIyerImg from './optimisedAssets/Artist/GiteshIyer.webp';
import BhumiAhirImg from './optimisedAssets/Artist/BhumiAhir.webp';

// Tour
import kinjaaldaveTour from './optimisedAssets/Upcommingevents/kinjaaldaveTour.webp';
import GourpreetTour from './optimisedAssets/Upcommingevents/GourpreetTour.webp';
import GeetarabaiTour from './optimisedAssets/Upcommingevents/GeetarabaiTour.webp';
import SuperStarTour from './optimisedAssets/Upcommingevents/SuperStarTour.webp';
import superstarSingerTour from './optimisedAssets/Upcommingevents/superstarSingerTour.webp';
import geetaMobile from './optimisedAssets/Upcommingevents/geeta_mobile.webp';
import gujjubhaiMobile from './optimisedAssets/Upcommingevents/gujjubhai_mobile.webp';
import kinjalMobile from './optimisedAssets/Upcommingevents/kinjal_mobile.webp';
import ojasMobile from './optimisedAssets/Upcommingevents/ojas_mobile.webp';
import rashmidesaiMobile from './optimisedAssets/Upcommingevents/rashmidesai_mobile.webp';
import superstarMobile from './optimisedAssets/superstar_mobile.webp';
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
// Previously imported info images have been replaced by optimized versions above

export const artists = [
  {
    id: 'GeetabenRabari',
    name: "Geetben Rabari",
    image: GeetabenRabariImg,
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
    id: 'KrinjalDave',
    name: "Kinjal Dave",
    image: KinjalDaveImg,
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
    id: 'gujjubhai',
    name: "Siddharth Randeria",
    image: SiddharthRanderiaImg,
    description: "King of Comedy",
    socialMedia: {
      facebook: "https://www.facebook.com/SiddharthRanderiaOfficial",
      instagram: "https://www.instagram.com/siddharthranderia",
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    bio: "Siddharth Randeria is a legendary Gujarati actor, director, and writer, best known for his 'Gujjubhai' series of plays and movies. He has been a dominant figure in Gujarati theatre for decades.",
    instagramImages: [SiddharthRanderiaImg],
  },
  {
    id: 'rashmidesai',
    name: "Rashmi Desai",
    image: RashmiDesaiImg,
    description: "Popular Actress",
    socialMedia: {
      facebook: "https://www.facebook.com/RashmiDesai",
      instagram: "https://www.instagram.com/imrashamidesai",
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    bio: "Rashmi Desai is a well-known Indian television and film actress, known for her versatile roles and participation in popular reality shows.",
    instagramImages: [RashmiDesaiImg],
  },
  {
    id: 'ojas',
    name: "Ojas Raval",
    image: OjasRavalImg,
    description: "Versatile Actor",
    socialMedia: {
      facebook: "https://www.facebook.com/ojasravalofficial",
      instagram: "https://www.instagram.com/ojasraval",
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    bio: "Ojas Raval is a talented Indian actor known for his work in Gujarati cinema and television, bringing charm and depth to every character he portrays.",
    instagramImages: [OjasRavalImg],
  },
  // Tier Artists
  {
    id: 'rex',
    name: "Rex",
    image: RexImg,
    description: "Dynamic Performer",
    socialMedia: {
      facebook: "https://www.facebook.com/Rdsouzaofficial/",
      instagram: "https://www.instagram.com/rexysexyd/",
      youtube: "https://www.youtube.com/@Rexysexy04",
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    bio: "Rex Dsouza is a dynamic Indian singer, live performer, and entertainer who rose to national fame as a finalist in the iconic reality show Fame Gurukul (2005).",
    instagramImages: [RexImg],
  },
  {
    id: 'Kosha',
    name: "Kosha",
    image: KoshaImg,
    description: "Versatile Vocalist",
    socialMedia: {
      facebook: "https://www.facebook.com/koshapandyakp/",
      instagram: "https://www.instagram.com/koshapandyatrivedi/",
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    bio: "Kosha Pandya is a gifted singer with over 17 years of experience, known for her versatile vocals that transcend genres.",
    instagramImages: [KoshaImg],
  },
  {
    id: 'ParthDoshi',
    name: "Parth Doshi",
    image: ParthDoshiImg,
    description: "Soulful Singer",
    socialMedia: {
      facebook: "https://www.facebook.com/ParthDoshiLive/",
      instagram: "https://www.instagram.com/parthdoshilive",
      youtube: "https://www.youtube.com/@ParthDoshiOfficial",
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    bio: "Parth Doshi is a talented singer known for his soulful performances and contribution to the music industry.",
    instagramImages: [ParthDoshiImg],
  },
  {
    id: 'GiteshIyer',
    name: "Gitesh Iyer",
    image: GiteshIyerImg,
    description: "Musical Artist",
    socialMedia: {
      facebook: null,
      instagram: "https://www.instagram.com/giteshiyer",
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    bio: "Gitesh Iyer is an upcoming musical artist dedicated to creating memorable musical experiences.",
    instagramImages: [GiteshIyerImg],
  },
  {
    id: 'BhumiAhir',
    name: "Bhumi Ahir",
    image: BhumiAhirImg,
    description: "Folk Singer",
    socialMedia: {
      facebook: null,
      instagram: "https://www.instagram.com/bhumiahir",
      youtube: null,
    },
    spotify: {
      artistUrl: null,
      popularSongs: [],
    },
    bio: "Bhumi Ahir is a talented folk singer known for her traditional style and powerful voice.",
    instagramImages: [BhumiAhirImg],
  },
];

export const events = [
  {
    id: 1,
    image: geetaMobile,
    artist: "GeetabenRabari",
  },
  {
    id: 2,
    image: gujjubhaiMobile,
    artist: "gujjubhai",
  },
  {
    id: 3,
    image: kinjalMobile,
    artist: "KrinjalDave",
  },
  {
    id: 4,
    image: ojasMobile,
    artist: "ojas",
  },
  {
    id: 5,
    image: rashmidesaiMobile,
    artist: "rashmidesai",
  },
  {
    id: 6,
    image: superstarMobile,
    artist: "superstar",
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
