const img = (filename) => `${process.env.PUBLIC_URL}/Images/${filename}`;

const EventData = [
  {
    id: 0,
    name: "Yoga Class",
    image: img("Yoga.jpg"),
    location: "The Yoga Room, Cape Town",
    date: "2025-06-15",
    price: "R150",
    description:
      "Join us for a rejuvenating yoga session suitable for all levels. Whether you're new or experienced, our instructor will guide you through gentle flows to help relax your body and mind. Mats and herbal teas provided.",
    genre: "Activities",
  },
  {
    id: 1,
    name: "Eye of Africa Auto Fest",
    image: img("Car Show.jpg"),
    location: "Eye of Africa, Johannesburg",
    date: "2025-04-27",
    price: "Free Entry",
    description:
      "A high-octane day packed with vintage, sports, and concept cars on display. Enjoy food trucks, music, a kids’ play zone, and live sound competitions. Great fun for the entire family.",
    genre: "Activities",
  },
  {
    id: 2,
    name: "Lego Building Workshop",
    image: img("Lego.jpg"),
    location: "Build-A-Brick Studio, Pretoria",
    date: "2025-07-10",
    price: "R200",
    description:
      "A creative workshop where kids and adults can explore their imaginations with thousands of Lego pieces. Guided challenges and free-building stations available. All ages welcome!",
    genre: "Kids",
  },
  {
    id: 3,
    name: "Neon Vibes Party",
    image: img("Party.jpg"),
    location: "Club Electric, Durban",
    date: "2025-08-05",
    price: "R250",
    description:
      "Dance the night away at Durban’s hottest neon-themed party! Featuring live DJs, UV lights, glow paint stations, and drink specials all night long. Dress to glow and bring your best energy.",
    genre: "Nightlife",
  },
  {
    id: 4,
    name: "Origami Art Class",
    image: img("Origami.jpg"),
    location: "ArtSpace Studio, Bloemfontein",
    date: "2025-09-12",
    price: "R180",
    description:
      "Discover the relaxing art of origami as you fold your way to paper masterpieces. Ideal for beginners and seasoned crafters alike. All materials are included.",
    genre: "Activities",
  },
  {
    id: 5,
    name: "Fireworks Display",
    image: img("fireworks.jpg"),
    location: "Sunset Park, Port Elizabeth",
    date: "2025-10-31",
    price: "R100",
    description:
      "A dazzling night of colour and sound as fireworks light up the sky. Bring a blanket, snacks, and enjoy live music before the big show. Great fun for all ages.",
    genre: "Activities",
  },
  {
    id: 6,
    name: "Burrito Fiesta",
    image: img("burrito.jpg"),
    location: "Fiesta Cantina, Johannesburg",
    date: "2025-11-20",
    price: "R120",
    description:
      "Feast on the best burritos in town at this Mexican-themed event. Enjoy spicy eats, cool drinks, and a lively atmosphere with live Latin music. Vegetarian options available.",
    genre: "Food & Drink",
  },
  {
    id: 7,
    name: "Jazz Under the Stars",
    image: img("jazz.jpg"),
    location: "Starlight Amphitheater, Pretoria",
    date: "2025-12-05",
    price: "R200",
    description:
      "Immerse yourself in smooth jazz melodies in an open-air venue under the stars. Featuring performances by top local and international jazz artists. Bring a blanket and enjoy a classy evening.",
    genre: "Music",
  },
  {
    id: 8,
    name: "Car Auction Extravaganza",
    image: img("car auction.jpg"),
    location: "Classic Motors, Cape Town",
    date: "2025-06-22",
    price: "Free Entry",
    description:
      "Explore rare and luxury cars up for grabs at this exciting live auction. Get expert insights, register to bid, or simply enjoy the atmosphere. Food and drinks available.",
    genre: "Activities",
  },
  {
    id: 9,
    name: "Filmmaking Behind the Scenes",
    image: img("movie bts.jpg"),
    location: "CineLab Studios, Johannesburg",
    date: "2025-07-17",
    price: "R50",
    description:
      "Step into the world of film production with this immersive behind-the-scenes experience. Learn about directing, cinematography, sound design, and set management from local industry professionals. Perfect for aspiring filmmakers and movie lovers.",
    genre: "Film",
  },
  {
    id: 10,
    name: "Piano Recital",
    image: img("piano.jpg"),
    location: "Melody Hall, Durban",
    date: "2025-08-25",
    price: "R150",
    description:
      "An enchanting evening of piano music featuring both classical masterpieces and contemporary favorites. Performed by award-winning pianists in an elegant setting.",
    genre: "Music",
  },
  {
    id: 11,
    name: "Vocal Masterclass",
    image: img("singer.jpg"),
    location: "Harmony Music Academy, Bloemfontein",
    date: "2025-09-30",
    price: "R200",
    description:
      "Join this dynamic vocal workshop led by seasoned performers and coaches. Learn warm-up techniques, breath control, stage presence, and performance confidence. Ideal for aspiring singers and anyone passionate about music.",
    genre: "Music",
  },
  {
    id: 12,
    name: "Guitar Jam Session",
    image: img("guitar band.jpg"),
    location: "JamSpot, Cape Town",
    date: "2025-10-10",
    price: "R100",
    description:
      "Bring your guitar and join fellow musicians for a casual jam night. Whether you're a beginner or a pro, this is the perfect space to play and collaborate.",
    genre: "Music",
  },
  {
    id: 13,
    name: "Tennis Tournament",
    image: img("tennis.jpg"),
    location: "Grand Slam Tennis Club, Pretoria",
    date: "2025-11-15",
    price: "R250",
    description:
      "Compete or spectate at this exciting community tennis event. Open to amateur players with knockout rounds and prizes. Refreshments and shaded seating available.",
    genre: "Sports",
  },
  {
    id: 14,
    name: "Lantern Festival",
    image: img("chinese lantern.jpg"),
    location: "Lantern Park, Johannesburg",
    date: "2025-12-12",
    price: "R80",
    description:
      "Walk through a magical landscape of glowing lanterns and light sculptures. Enjoy traditional snacks, live music, and cultural displays throughout the evening.",
    genre: "Culture",
  },
  {
    id: 15,
    name: "Soccer Match",
    image: img("soccer.jpg"),
    location: "Soccer City Stadium, Johannesburg",
    date: "2025-06-30",
    price: "R300",
    description:
      "Cheer on your favourite local teams in an electrifying match day atmosphere. Half-time entertainment and food vendors available. Wear your team colours!",
    genre: "Sports",
  },
  {
    id: 16,
    name: "Fun Run",
    image: img("run.jpg"),
    location: "City Park, Pretoria",
    date: "2025-07-25",
    price: "R150",
    description:
      "Lace up for a fun and friendly 5km run. Medals for finishers and live music at the finish line. Open to runners, walkers, and families with kids.",
    genre: "Sports",
  },
  {
    id: 17,
    name: "Karaoke Night",
    image: img("Karaoke.jpg"),
    location: "Sing-Along Bar, Durban",
    date: "2025-08-10",
    price: "R50",
    description:
      "Pick your favourite track and sing your heart out! Prizes for the best performances, crowd favorites, and themed costumes. Loads of fun and laughter guaranteed.",
    genre: "Music",
  },
  {
    id: 18,
    name: "Paint & Sip",
    image: img("Paint.jpg"),
    location: "Canvas & Wine Studio, Cape Town",
    date: "2025-09-18",
    price: "R220",
    description:
      "Combine creativity with relaxation in this step-by-step painting workshop. No experience needed—just bring your imagination and enjoy a glass of wine as you paint.",
    genre: "Activities",
  },
  {
    id: 19,
    name: "Luxury River Cruise",
    image: img("Cruise.jpg"),
    location: "V&A Waterfront, Cape Town",
    date: "2025-12-28",
    price: "R850",
    description:
      "Enjoy an elegant sunset cruise along the Cape coastline with gourmet snacks and a live jazz trio. Ideal for couples and groups looking to unwind in style.",
    genre: "Lifestyle",
  },
  {
    id: 20,
    name: "Midnight Groove Party",
    image: img("Club.jpg"),
    location: "The Groove Lounge, Johannesburg",
    date: "2025-11-01",
    price: "R300",
    description:
      "The city's hottest DJs take over the night at this late-night dance party. Expect booming beats, neon lights, and an unforgettable vibe on the dance floor.",
    genre: "Music",
  },
  {
    id: 21,
    name: "Full Moon Festival",
    image: img("Party2.jpg"),
    location: "Beach Club, Durban",
    date: "2025-10-15",
    price: "R350",
    description:
      "Dance barefoot on the sand with fire performers, drum circles, and top DJs. This beachside celebration of the full moon is one you don’t want to miss.",
    genre: "Festival",
  },
  {
    id: 22,
    name: "Heritage Day Celebration",
    image: img("Festive.jpg"),
    location: "Freedom Park, Pretoria",
    date: "2025-09-24",
    price: "Free Entry",
    description:
      "A vibrant celebration of South Africa's diverse cultures through dance, food, storytelling, and live music. Fun for all ages and perfect for family outings.",
    genre: "Culture",
  },
  {
    id: 23,
    name: "Kids Colouring Class",
    image: img("Coloring Class.jpg"),
    location: "KidzArt Workshop, Bloemfontein",
    date: "2025-08-03",
    price: "R100",
    description:
      "A guided art class where kids can unleash their creativity using colours and different materials. Each child takes home their framed masterpiece.",
    genre: "Kids",
  },
  {
    id: 24,
    name: "Play Dough Fun Day",
    image: img("Play Dough.jpg"),
    location: "Tiny Tots Studio, East London",
    date: "2025-07-12",
    price: "R90",
    description:
      "Toddlers will have a blast shaping, squishing, and moulding in this safe and fun play dough session. Great for sensory play and fine motor skills.",
    genre: "Kids",
  },
];

export default EventData;
