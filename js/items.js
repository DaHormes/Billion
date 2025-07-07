// js/items.js
export const items = [
  // Everyday Items (low cost)
  { id: 1, name: "Luxury Coffee (1lb)", price: 50, image: "https://images.unsplash.com/photo-1627917220551-7f9122f87a82?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Premium Avocado Toast", price: 18, image: "https://images.unsplash.com/photo-1596761005888-0f7f1e6b3b5c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Designer Face Mask", price: 100, image: "https://images.unsplash.com/photo-1621243714569-ce47d7c17d23?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Smartwatch (Latest Model)", price: 400, image: "https://images.unsplash.com/photo-1546868871-705a6ad6bb6d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "High-End Sneakers", price: 750, image: "https://images.unsplash.com/photo-1606107555194-e3c7a36f254f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "VR Headset (Pro)", price: 1000, image: "https://images.unsplash.com/photo-1627993012891-6677f547c8f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  // Mid-Range Luxury (hundreds of thousands)
  { id: 7, name: "Luxury Car (e.g., Porsche 911)", price: 150000, image: "https://images.unsplash.com/photo-1549725895-d05545a90807?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, name: "Art Piece (Emerging Artist)", price: 250000, image: "https://images.unsplash.com/photo-1517404215737-01303a980753?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 9, name: "High-End Yacht (Small)", price: 500000, image: "https://images.unsplash.com/photo-1549463994-68161f302b4d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 10, name: "Exotic Pet (e.g., White Lion Cub)", price: 100000, image: "https://images.unsplash.com/photo-1563721349-f4c02c6114e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Disclaimer for users might be good in real app

  // Big Ticket Items (millions)
  { id: 11, name: "Private Island (Small)", price: 5000000, image: "https://images.unsplash.com/photo-1568285913254-067140e722a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, name: "Luxury Apartment (NYC Penthouse)", price: 20000000, image: "https://images.unsplash.com/photo-1570171285317-09d6666bb6b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 13, name: "Private Jet (Light Business Jet)", price: 30000000, image: "https://images.unsplash.com/photo-1561001968-3c9735d48729?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 14, name: "Super Bowl Ad Slot (30 seconds)", price: 7000000, image: "https://images.unsplash.com/photo-1563820250-9366110f08ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 15, name: "Leonardo da Vinci Painting", price: 450000000, image: "https://images.unsplash.com/photo-1579783900882-c20526e0e64f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 16, name: "Luxury Superyacht (Large)", price: 300000000, image: "https://images.unsplash.com/photo-1550954000-8b4e72322a36?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  // Ultra Luxury & Investments (billions)
  { id: 17, name: "NBA Team (Minority Stake)", price: 500000000, image: "https://images.unsplash.com/photo-1577458140645-022e864703a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Lower estimate
  { id: 18, name: "Private Space Flight (Ticket)", price: 500000, image: "https://images.unsplash.com/photo-1627050015509-f14d8b6c4b2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 19, name: "Luxury Hotel Chain (Small)", price: 1000000000, image: "https://images.unsplash.com/photo-1618773959146-51d02c7e0c4b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 20, name: "Small Country's GDP for a Year", price: 5000000000, image: "https://images.unsplash.com/photo-1549429141-a67b2d5d8e7c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Illustrative
  { id: 21, name: "Major Social Media Platform (Acquisition)", price: 44000000000, image: "https://images.unsplash.com/photo-1611605697027-f99a6ad6e6c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Like Twitter
  { id: 22, name: "SpaceX Starship Development (Partial Funding)", price: 20000000000, image: "https://images.unsplash.com/photo-1628126297292-628d3e20e031?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 23, name: "Entire Football Club (Top Tier)", price: 4000000000, image: "https://images.unsplash.com/photo-1504930335017-91a50616b776?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 24, name: "Philanthropic Endowment (Major University)", price: 10000000000, image: "https://images.unsplash.com/photo-1532629394-4e2b027b40d7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 25, name: "Mars Colonization Fund", price: 100000000000, image: "https://images.unsplash.com/photo-1610296655519-c09a800e28b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];
