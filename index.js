

// getting data with location,check-in,check-out,guests input values(dateVal = yy-mm-dd)
// async function searchListings(loc, checkIn, checkOut, guest) {
//   let cIn = new Date(checkIn);
//   let cOut = new Date(checkOut);
//   let month;
//   switch (cOut.getMonth()) {
//     case 1:
//       month = "Jan";
//       break;
//     case 2:
//       month = "Feb";
//       break;
//     case 3:
//       month = "March";
//       break;
//     case 4:
//       month = "April";
//       break;
//     case 5:
//       month = "May";
//       break;
//     case 6:
//       month = "June";
//       break;
//     case 7:
//       month = "July";
//       break;
//     case 8:
//       month = "Aug";
//       break;
//     case 9:
//       month = "Sep";
//       break;
//     case 10:
//       month = "Oct";
//       break;
//     case 11:
//       month = "Nov";
//       break;
//     default:
//       month = "Dec";
//   }

//   let str = month + " " + cIn.getDate() + " - " + cOut.getDate();

//   const searchDetails = {
//     location: loc,
//     date: str,
//     guest: guest,
//   };

//   const url = `https://airbnb13.p.rapidapi.com/search-location?location=${loc}&checkin=${checkIn}&checkout=${checkOut}&adults=${guest}&children=0&infants=0&pets=0&page=1&currency=INR`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "6f683e8818msh6e8c73f59c10e99p14a4d2jsndff3ec4c8106",
//       "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//     if (localStorage.getItem("data")) {
//       localStorage.removeItem("data");
//     }
//     localStorage.setItem("data", result);
//     if (!result.error) {
//       if (localStorage.getItem("searchDetails")) {
//         localStorage.removeItem("searchDetails");
//       }
//       localStorage.setItem("searchDetails", JSON.stringify(searchDetails));
//       window.location.href = "search.html";
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }
// searchBtn.addEventListener("click", () => {
//   let location = locationInput.value;
//   let checkIn = startDateInput.value;
//   let checkOut = endDateInput.value;
//   let guest = guestInput.value;

//   if (location && checkIn && checkOut && guest && checkOut > checkIn) {
//     searchListings(location, checkIn, checkOut, guest);
//   }
// });
// searchListings();

// ---------------------------------------------------------------

const places = [
  {
    name: "The Hermitage Hotel",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    rating: 4.5,
    price: "$350",
    features: "Luxury hotel · Downtown Nashville · Spa · Fine Dining",
    Destination: "Nashville",
  },
  {
    name: "Omni Nashville Hotel",
    images: ["image4.jpg", "image5.jpg", "image6.jpg"],
    rating: 4.3,
    price: "$275",
    features: "Downtown hotel · Rooftop Pool · Music City Center",
    Destination: "Nashville",
  },
  {
    name: "Gaylord Opryland Resort & Convention Center",
    images: ["image7.jpg", "image8.jpg", "image9.jpg"],
    rating: 4.7,
    price: "$225",
    features: "Resort · Grand Ole Opry · Indoor Gardens · Water Park",
    Destination: "Nashville",
  },
  {
    name: "Thompson Nashville",
    images: ["image10.jpg", "image11.jpg", "image12.jpg"],
    rating: 4.4,
    price: "$300",
    features: "Boutique hotel · The Gulch · Rooftop Bar · Local Art",
    Destination: "Nashville",
  },
  {
    name: "Hutton Hotel",
    images: ["image13.jpg", "image14.jpg", "image15.jpg"],
    rating: 4.1,
    price: "$200",
    features: "Music Row · Pet-Friendly · Farm-to-Table Dining",
    Destination: "Nashville",
  },
  {
    name: "The Last Resort",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    rating: 4.5,
    price: "$123",
    features:
      "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
    Destination: "South-Haven",
  },
  {
    name: "Victoria Resort and Bed & Breakfast",
    images: ["image4.jpg", "image5.jpg", "image6.jpg"],
    rating: 4.7,
    price: "$150",
    features:
      "Bed & Breakfast · Private Rooms · Free Breakfast · Outdoor Pool · Beach Access",
    Destination: "South-Haven",
  },
  {
    name: "Inn at the Park Bed & Breakfast",
    images: ["image7.jpg", "image8.jpg", "image9.jpg"],
    rating: 4.8,
    price: "$175",
    features:
      "Bed & Breakfast · Private Rooms · Gourmet Breakfast · Garden · Walk to Beach",
    Destination: "South-Haven",
  },
  {
    name: "Shores Vacation Rentals",
    images: ["image10.jpg", "image11.jpg", "image12.jpg"],
    rating: 4.3,
    price: "$100",
    features:
      "Vacation Rentals · Various Locations · Fully Equipped · Beachfront Options",
    Destination: "South-Haven",
  },
  {
    name: "Yelton Manor Bed & Breakfast",
    images: ["image13.jpg", "image14.jpg", "image15.jpg"],
    rating: 4.9,
    price: "$190",
    features:
      "Bed & Breakfast · Private Rooms · Gourmet Breakfast · Hot Tub · Near Beach",
    Destination: "South-Haven",
  },
  {
    name: "Staton Luxury Suites",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    rating: 4.5,
    price: "$200",
    features:
      "4-6 guests · Entire Home · 5 beds · 3 baths · Wifi · Kitchen · Free Parking",
    Destination: "Staton",
  },
  {
    name: "Staton Grand Hotel",
    images: ["image4.jpg", "image5.jpg", "image6.jpg"],
    rating: 4.2,
    price: "$150",
    features: "2-4 guests · Private Rooms · King Bed · Spa · Restaurant",
    Destination: "Staton",
  },
  {
    name: "Staton Beachfront Resort",
    images: ["image7.jpg", "image8.jpg", "image9.jpg"],
    rating: 4.8,
    price: "$250",
    features: "2-4 guests · Beachfront · Ocean View · Pool · Bar",
    Destination: "Staton",
  },
  {
    name: "Staton Downtown Inn",
    images: ["image10.jpg", "image11.jpg", "image12.jpg"],
    rating: 4.0,
    price: "$100",
    features: "1-2 guests · Single Room · City View · Breakfast Included",
    Destination: "Staton",
  },
  {
    name: "Staton Mountain Lodge",
    images: ["image13.jpg", "image14.jpg", "image15.jpg"],
    rating: 4.7,
    price: "$180",
    features: "2-6 guests · Cabin · Mountain View · Fireplace · Hiking Trails",
    Destination: "Staton",
  },
  {
    name: "Four Winds Casino Resort",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    rating: 4.5,
    price: "$123",
    features: "4-6 guests · Resort · Casino · Spa · Dining",
    Destination: "New-Buffalo",
  },
  {
    name: "New Buffalo Inn & Spa",
    images: ["image4.jpg", "image5.jpg", "image6.jpg"],
    rating: 4.0,
    price: "$150",
    features: "2-4 guests · Inn · Spa · Breakfast · Free Wi-Fi",
    Destination: "New-Buffalo",
  },
  {
    name: "The Harbor Grand Hotel",
    images: ["image7.jpg", "image8.jpg", "image9.jpg"],
    rating: 4.6,
    price: "$200",
    features: "2-4 guests · Hotel · Lakefront View · Restaurant",
    Destination: "New-Buffalo",
  },
  {
    name: "Fairfield Inn & Suites New Buffalo",
    images: ["image10.jpg", "image11.jpg", "image12.jpg"],
    rating: 4.2,
    price: "$130",
    features: "2-3 guests · Hotel · Pool · Fitness Center · Breakfast",
    Destination: "New-Buffalo",
  },
  {
    name: "Fire Fly Resort",
    images: ["image13.jpg", "image14.jpg", "image15.jpg"],
    rating: 4.7,
    price: "$175",
    features: "4-6 guests · Resort · Private Beach · Cottages",
    Destination: "New-Buffalo",
  },
  {
    name: "Hotel National, a Luxury Collection Hotel",
    rating: 5,
    price: "$200",
    features:
      "Luxury hotel with a central location, elegant rooms, and fine dining.",
    Destination: "Moscow",
  },
  {
    name: "Radisson Collection Hotel, Moscow",
    rating: 4.5,
    price: "$190",
    features:
      "Modern hotel near Red Square, offering comfortable rooms and amenities.",
    Destination: "Moscow",
  },
  {
    name: "Ararat Park Hyatt Moscow",
    rating: 4.7,
    price: "$310",
    features:
      "Five-star hotel with great views, luxurious rooms, and excellent dining.",
    Destination: "Moscow",
  },
  {
    name: "Holiday Inn Moscow - Sokolniki",
    rating: 4.1,
    price: "$183",
    features:
      "Affordable hotel with comfortable accommodations and meeting facilities.",
    Destination: "Moscow",
  },
  {
    name: "Izmailovo Alpha Hotel",
    rating: 3.8,
    price: "$206",
    features:
      "Large hotel complex offering budget-friendly rooms and event spaces.",
    Destination: "Moscow",
  },
  {
    name: "Burj Al Arab Jumeirah",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    rating: 5,
    price: "$242",
    Destination: "Dubai",
    features: "Luxury hotel, Beachfront, Spa, Fine dining, and more.",
  },
  {
    name: "Atlantis The Palm",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    rating: 4.5,
    price: "$245",
    Destination: "Dubai",
    features:
      "Waterpark, Marine and Water Adventures, Luxury Suites, and more.",
  },
  {
    name: "JW Marriott Marquis Hotel Dubai",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    rating: 4.7,
    price: "$360",
    Destination: "Dubai",
    features: "Luxury hotel, Business Center, Restaurants, and more.",
  },
  {
    name: "Raffles Dubai",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    rating: 4.6,
    price: "$210",
    Destination: "Dubai",
    features:
      "Luxury hotel, Outdoor Pool, Spa, Award-winning dining, and more.",
  },
  {
    name: "One&Only The Palm",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    rating: 4.8,
    price: "$290",
    Destination: "Dubai",
    features: "Private Beach, Spa, Dining, and more.",
  },
];

const locationInput = document.getElementById("location");
const startDateInput = document.getElementById("check-in");
const endDateInput = document.getElementById("check-out");
const guestInput = document.getElementById("guests");
const searchBtn = document.getElementById("search");
const destinationSelect = document.getElementById("destination");
const resultsDiv = document.getElementById("results");
const uniqueDestinations = new Set();
    
places.forEach((place) => {
    uniqueDestinations.add(place.Destination);
});

uniqueDestinations.forEach((destination) => {
    const option = document.createElement("option");
    option.value = destination;
    option.textContent = destination;
    destinationSelect.appendChild(option);
});

// Store in Local Storage
searchBtn.addEventListener("click", () => {
    const selectedDestination = destinationSelect.value;
    const checkIn = startDateInput.value;
    const checkOut = endDateInput.value;
    const guest = guestInput.value;

    if (selectedDestination && checkIn && checkOut && guest && checkOut > checkIn) {        
        const searchDetails = {
            destination: selectedDestination,
            checkIn,
            checkOut,
            guest,
        };
        localStorage.setItem("searchDetails", JSON.stringify(searchDetails));
        window.location.href = './search.html';
    }
});
