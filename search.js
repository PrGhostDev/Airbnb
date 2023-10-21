// const localData = JSON.parse(localStorage.getItem('data'));
// const searchData = JSON.parse(localStorage.getItem('searchDetails'));
// const resultArr = localData.results;

// document.querySelector('#loc').innerText = searchData.location;
// document.querySelector('#date').innerText = searchData.date;
// document.querySelector('#guest').innerText = searchData.guest + " guest(s)";
// const cardContainer = document.querySelector('.stay-wrapper');

const places = [
  {
    name: "The Hermitage Hotel",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.5,
    price: "$350",
    features: "Luxury hotel · Downtown Nashville · Spa · Fine Dining",
    Destination: "Nashville",
  },
  {
    name: "Omni Nashville Hotel",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.3,
    price: "$275",
    features: "Downtown hotel · Rooftop Pool · Music City Center",
    Destination: "Nashville",
  },
  {
    name: "Gaylord Opryland Resort & Convention Center",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.7,
    price: "$225",
    features: "Resort · Grand Ole Opry · Indoor Gardens · Water Park",
    Destination: "Nashville",
  },
  {
    name: "Thompson Nashville",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.4,
    price: "$300",
    features: "Boutique hotel · The Gulch · Rooftop Bar · Local Art",
    Destination: "Nashville",
  },
  {
    name: "Hutton Hotel",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.1,
    price: "$200",
    features: "Music Row · Pet-Friendly · Farm-to-Table Dining",
    Destination: "Nashville",
  },
  {
    name: "The Last Resort",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.5,
    price: "$123",
    features:
      "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
    Destination: "South-Haven",
  },
  {
    name: "Victoria Resort and Bed & Breakfast",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.7,
    price: "$150",
    features:
      "Bed & Breakfast · Private Rooms · Free Breakfast · Outdoor Pool · Beach Access",
    Destination: "South-Haven",
  },
  {
    name: "Inn at the Park Bed & Breakfast",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.8,
    price: "$175",
    features:
      "Bed & Breakfast · Private Rooms · Gourmet Breakfast · Garden · Walk to Beach",
    Destination: "South-Haven",
  },
  {
    name: "Shores Vacation Rentals",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.3,
    price: "$100",
    features:
      "Vacation Rentals · Various Locations · Fully Equipped · Beachfront Options",
    Destination: "South-Haven",
  },
  {
    name: "Yelton Manor Bed & Breakfast",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.9,
    price: "$190",
    features:
      "Bed & Breakfast · Private Rooms · Gourmet Breakfast · Hot Tub · Near Beach",
    Destination: "South-Haven",
  },
  {
    name: "Staton Luxury Suites",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.5,
    price: "$200",
    features:
      "4-6 guests · Entire Home · 5 beds · 3 baths · Wifi · Kitchen · Free Parking",
    Destination: "Staton",
  },
  {
    name: "Staton Grand Hotel",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.2,
    price: "$150",
    features: "2-4 guests · Private Rooms · King Bed · Spa · Restaurant",
    Destination: "Staton",
  },
  {
    name: "Staton Beachfront Resort",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.8,
    price: "$250",
    features: "2-4 guests · Beachfront · Ocean View · Pool · Bar",
    Destination: "Staton",
  },
  {
    name: "Staton Downtown Inn",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.0,
    price: "$100",
    features: "1-2 guests · Single Room · City View · Breakfast Included",
    Destination: "Staton",
  },
  {
    name: "Staton Mountain Lodge",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.7,
    price: "$180",
    features: "2-6 guests · Cabin · Mountain View · Fireplace · Hiking Trails",
    Destination: "Staton",
  },
  {
    name: "Four Winds Casino Resort",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
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
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.6,
    price: "$200",
    features: "2-4 guests · Hotel · Lakefront View · Restaurant",
    Destination: "New-Buffalo",
  },
  {
    name: "Fairfield Inn & Suites New Buffalo",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.2,
    price: "$130",
    features: "2-3 guests · Hotel · Pool · Fitness Center · Breakfast",
    Destination: "New-Buffalo",
  },
  {
    name: "Fire Fly Resort",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
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
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Radisson Collection Hotel, Moscow",
    rating: 4.5,
    price: "$190",
    features:
      "Modern hotel near Red Square, offering comfortable rooms and amenities.",
    Destination: "Moscow",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Ararat Park Hyatt Moscow",
    rating: 4.7,
    price: "$310",
    features:
      "Five-star hotel with great views, luxurious rooms, and excellent dining.",
    Destination: "Moscow",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Holiday Inn Moscow - Sokolniki",
    rating: 4.1,
    price: "$183",
    features:
      "Affordable hotel with comfortable accommodations and meeting facilities.",
    Destination: "Moscow",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Izmailovo Alpha Hotel",
    rating: 3.8,
    price: "$206",
    features:
      "Large hotel complex offering budget-friendly rooms and event spaces.",
    Destination: "Moscow",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Burj Al Arab Jumeirah",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 5,
    price: "$242",
    Destination: "Dubai",
    features: "Luxury hotel, Beachfront, Spa, Fine dining, and more.",
  },
  {
    name: "Atlantis The Palm",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.5,
    price: "$245",
    Destination: "Dubai",
    features:
      "Waterpark, Marine and Water Adventures, Luxury Suites, and more.",
  },
  {
    name: "JW Marriott Marquis Hotel Dubai",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.7,
    price: "$360",
    Destination: "Dubai",
    features: "Luxury hotel, Business Center, Restaurants, and more.",
  },
  {
    name: "Raffles Dubai",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.6,
    price: "$210",
    Destination: "Dubai",
    features:
      "Luxury hotel, Outdoor Pool, Spa, Award-winning dining, and more.",
  },
  {
    name: "One&Only The Palm",
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
    rating: 4.8,
    price: "$290",
    Destination: "Dubai",
    features: "Private Beach, Spa, Dining, and more.",
  },
];

const searchDetailsJSON = localStorage.getItem("searchDetails");
if (searchDetailsJSON) {
  const searchDetails = JSON.parse(searchDetailsJSON);
  const selectedDestination = searchDetails.destination;

  const matchingPlaces = places.filter(
    (place) => place.Destination === selectedDestination
  );

  function makeListingCards() {
    matchingPlaces.forEach(function (result) {
      let sampleCards = `
        <div class="card">
          <div class="img">
            <img src="${result.images}" alt="${result.name}">
          </div>
          <div class="info">
            <div class="title">
              ${result.name}
            </div>
            <div class="rating">
              <img src="./assets/star.svg" alt="rating" />
              <span>${result.rating}</span>
            </div>
            <div class="features">
              ${result.features}
            </div>
            <div class="price">
              Price: ${result.price} /night
            </div>
            <div class="button">
              <button onclick="viewDetails(${result.id})">View Details</button>
            </div>
          </div>
        </div>`;

      const stayWrapper = document.querySelector(".stay-wrapper");
      stayWrapper.innerHTML += sampleCards;
    });
  }

  makeListingCards();
} else {
  console.log("No search details found in Local Storage.");
}

