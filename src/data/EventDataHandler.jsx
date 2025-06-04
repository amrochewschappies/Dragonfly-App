const img = (filename) => `${process.env.PUBLIC_URL}/Images/${filename}`;

const EventData = [
  {
    id: 0,
    name: "Beach Yoga Session",
    image: img("Beach Yoga 1.jpg"),
    location: "Clifton Beach, Cape Town",
    date: "2025-06-15",
    price: "R150",
    description:
      "Stretch and rejuvenate by the ocean with a guided beach yoga session. Connect your breath to the rhythm of the waves and find your inner peace. Suitable for all levels.",
    genre: "Wellness",
  },
  {
    id: 1,
    name: "Sunset Yoga Flow",
    image: img("Beach Yoga 2.jpg"),
    location: "Muizenberg Beach, Cape Town",
    date: "2025-06-22",
    price: "R180",
    description:
      "Flow through gentle movements as the sun sets over the sea. Unwind and reset with this calming yoga experience on the sand.",
    genre: "Wellness",
  },
  {
    id: 2,
    name: "Morning Beach Yoga",
    image: img("Beach Yoga 3.jpg"),
    location: "Noordhoek Beach, Cape Town",
    date: "2025-07-01",
    price: "R120",
    description:
      "Wake up with the sunrise and energize your body with a refreshing morning yoga session. Bring your mat and embrace the day with positivity.",
    genre: "Wellness",
  },
  {
    id: 3,
    name: "Jet Ski Adventure",
    image: img("Jet Skiing 1.jpg"),
    location: "Durban Marina",
    date: "2025-08-05",
    price: "R500",
    description:
      "Feel the adrenaline rush as you ride the waves on a thrilling jet ski tour. Perfect for adventure seekers looking to make a splash.",
    genre: "Adventure",
  },
  {
    id: 4,
    name: "Jet Ski Races",
    image: img("Jet Skiing 2.jpg"),
    location: "Vaal Dam, Gauteng",
    date: "2025-08-12",
    price: "R400",
    description:
      "Get ready for high-speed action at the annual jet ski races. Cheer on competitors or take part yourself—fun for the whole family!",
    genre: "Sports",
  },
  {
    id: 5,
    name: "Jet Ski Skills Workshop",
    image: img("Jet Skiing 3.jpg"),
    location: "Hout Bay, Cape Town",
    date: "2025-08-20",
    price: "R450",
    description:
      "Learn safety tips, advanced maneuvers, and tricks at this hands-on jet ski skills workshop. Ideal for beginners and enthusiasts alike.",
    genre: "Adventure",
  },
  {
    id: 6,
    name: "Kayak Exploration",
    image: img("Kayaking 1.jpg"),
    location: "Knysna Lagoon, Western Cape",
    date: "2025-09-01",
    price: "R350",
    description:
      "Paddle through calm waters and explore hidden coves on this guided kayaking adventure. Great for nature lovers and families.",
    genre: "Outdoor",
  },
  {
    id: 7,
    name: "Sunset Kayaking Tour",
    image: img("Kayaking 2.jpg"),
    location: "False Bay, Cape Town",
    date: "2025-09-08",
    price: "R400",
    description:
      "Watch the sun dip below the horizon from your kayak. A peaceful evening experience perfect for couples and small groups.",
    genre: "Outdoor",
  },
  {
    id: 8,
    name: "River Kayak Challenge",
    image: img("Kayaking 3.jpg"),
    location: "Orange River, Northern Cape",
    date: "2025-09-15",
    price: "R500",
    description:
      "Test your skills in this fast-paced river kayak race. Tackle rapids and show your endurance in a thrilling challenge.",
    genre: "Sports",
  },
  {
    id: 9,
    name: "Parasailing Experience",
    image: img("Parasailing 1.jpg"),
    location: "Durban Beachfront",
    date: "2025-10-05",
    price: "R600",
    description:
      "Soar above the sea with a breathtaking parasailing adventure. Enjoy panoramic views of the coastline from the skies.",
    genre: "Adventure",
  },
  {
    id: 10,
    name: "Tandem Parasailing",
    image: img("Parasailing 2.jpg"),
    location: "Plettenberg Bay",
    date: "2025-10-12",
    price: "R650",
    description:
      "Fly with a friend on this thrilling tandem parasailing ride. Double the fun, double the memories!",
    genre: "Adventure",
  },
  {
    id: 11,
    name: "Parasailing Festival",
    image: img("Parasailing 3.jpg"),
    location: "Jeffreys Bay",
    date: "2025-10-20",
    price: "R700",
    description:
      "Celebrate the skies at the annual parasailing festival. Demos, competitions, and fun activities for all ages.",
    genre: "Festival",
  },
  {
    id: 12,
    name: "Snorkeling Safari",
    image: img("Snorkeling 1.jpg"),
    location: "Sodwana Bay, KwaZulu-Natal",
    date: "2025-11-05",
    price: "R300",
    description:
      "Discover vibrant marine life on this guided snorkeling tour. See colorful reefs, fish, and more in crystal-clear waters.",
    genre: "Outdoor",
  },
  {
    id: 13,
    name: "Snorkel & Swim",
    image: img("Snorkeling 2.jpg"),
    location: "Aliwal Shoal, Durban",
    date: "2025-11-12",
    price: "R350",
    description:
      "Enjoy an unforgettable swim and snorkeling experience at one of South Africa’s top dive sites. Perfect for all ages.",
    genre: "Outdoor",
  },
  {
    id: 14,
    name: "Snorkeling Challenge",
    image: img("Snorkeling 3.jpg"),
    location: "Cape Vidal, iSimangaliso Wetland Park",
    date: "2025-11-19",
    price: "R400",
    description:
      "Compete with fellow snorkeling enthusiasts in a fun, friendly challenge to spot the most marine species. Prizes to be won!",
    genre: "Sports",
  },
  {
    id: 15,
    name: "Surfing Safari",
    image: img("Surfing 1.jpg"),
    location: "Jeffreys Bay",
    date: "2025-12-01",
    price: "R450",
    description:
      "Catch the perfect wave with expert guidance in South Africa’s surfing capital. Boards and wetsuits included.",
    genre: "Sports",
  },
  {
    id: 16,
    name: "Surfing Lessons",
    image: img("Surfing 2.jpg"),
    location: "Muizenberg, Cape Town",
    date: "2025-12-08",
    price: "R350",
    description:
      "Learn to surf at the beginner-friendly beaches of Muizenberg. Professional instructors and safe environment.",
    genre: "Sports",
  },
  {
    id: 17,
    name: "Surfing Competition",
    image: img("Surfing 3.jpg"),
    location: "Ballito, KwaZulu-Natal",
    date: "2025-12-15",
    price: "R500",
    description:
      "South Africa’s top surfers compete for the championship title in this high-energy contest. Spectators welcome!",
    genre: "Sports",
  },
  {
    id: 18,
    name: "Luxury Yacht Cruise",
    image: img("Yacht 1.jpg"),
    location: "V&A Waterfront, Cape Town",
    date: "2025-12-20",
    price: "R1200",
    description:
      "Sail in style on a luxury yacht. Indulge in gourmet snacks, premium drinks, and stunning sunset views.",
    genre: "Lifestyle",
  },
  {
    id: 19,
    name: "Yacht Party Night",
    image: img("Yacht 2.jpg"),
    location: "Mossel Bay",
    date: "2025-12-24",
    price: "R1500",
    description:
      "Celebrate the night on a luxurious yacht party with top DJs, cocktails, and breathtaking ocean views.",
    genre: "Lifestyle",
  },
  {
    id: 20,
    name: "New Year’s Eve Yacht Bash",
    image: img("Yacht 3.jpg"),
    location: "Knysna Waterfront",
    date: "2025-12-31",
    price: "R2000",
    description:
      "Ring in the New Year aboard a glamorous yacht with fireworks, live music, and unforgettable memories.",
    genre: "Lifestyle",
  },
];

export default EventData;
