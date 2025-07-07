// js/spending.js (Expanded version for both index.html and billionaire.html)
import { billionaires } from './billionaires.js';
import { items } from './items.js'; // Import items data

// --- Global State Variables ---
let currentBillionaire = null;
let cart = [];
let moneySpent = 0;
let moneyRemaining = 0;

// --- Utility Functions ---

// Formats a number as USD currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Gets a query parameter from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// --- Dynamic Ad Display Logic (can be shared between pages) ---
const ads = [
  { text: "Invest in the Future! Buy a star!", image: "https://images.unsplash.com/photo-1543881457-3b2d18449c26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { text: "Live the Dream! Explore Luxury Homes!", image: "https://images.unsplash.com/photo-1560518883-ff58f3b20468?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { text: "Your Next Adventure Starts Here!", image: "https://images.unsplash.com/photo-1510521401391-be714241d7af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { text: "Secure Your Legacy! Premium Private Banking.", image: "https://images.unsplash.com/photo-1550565118-fe0db8fa9d96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

function displayRandomAd() {
    const adContainers = document.querySelectorAll('.ad-placeholder');
    if (adContainers.length === 0) return;

    adContainers.forEach(container => {
        const randomIndex = Math.floor(Math.random() * ads.length);
        const ad = ads[randomIndex];

        container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${ad.image}')`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
        container.style.color = 'white';
        container.style.textShadow = '1px 1px 3px rgba(0,0,0,0.7)';
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.fontSize = '1.5em';
        container.style.fontWeight = 'bold';
        container.style.padding = '1em';
        container.textContent = ad.text;
    });
}
let adInterval; // Variable to store the interval ID

function startAdRotation() {
  if (adInterval) clearInterval(adInterval); // Clear any existing interval
  displayRandomAd(); // Display immediately on load
  adInterval = setInterval(displayRandomAd, 5000); // Change ad every 5 seconds
}


// --- Billionaire Spending Page Logic ---

// Updates the money display in the header and receipt summary
function updateMoneyDisplay() {
  if (currentBillionaire) {
    document.getElementById('net-worth').textContent = formatCurrency(currentBillionaire.netWorth);
    document.getElementById('money-spent').textContent = formatCurrency(moneySpent);
    document.getElementById('money-remaining').textContent = formatCurrency(moneyRemaining);
    document.getElementById('receipt-remaining-summary').textContent = formatCurrency(moneyRemaining);
    document.title = `Spend ${currentBillionaire.name}'s Fortune | Spend like a Billionaire`;
  }
}

// Adds an item to the cart and updates totals
function addToCart(item, quantity = 1) {
  const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

  if (existingItemIndex !== -1) {
    // Item already in cart, update quantity
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Add new item to cart
    cart.push({ ...item, quantity: quantity });
  }

  calculateTotal();
  updateReceipt();
}

// Calculates total money spent and remaining
function calculateTotal() {
  moneySpent = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  moneyRemaining = currentBillionaire.netWorth - moneySpent;

  // Ensure moneyRemaining doesn't go below zero
  if (moneyRemaining < 0) {
    moneyRemaining = 0;
  }
  updateMoneyDisplay();
}

// Updates the receipt section
function updateReceipt() {
  const receiptItemsContainer = document.getElementById('receipt-items');
  const grandTotalElement = document.getElementById('grand-total');
  const emptyMessage = document.getElementById('empty-receipt-message');

  receiptItemsContainer.innerHTML = ''; // Clear previous receipt items

  if (cart.length === 0) {
    emptyMessage.style.display = 'block'; // Show empty message
  } else {
    emptyMessage.style.display = 'none'; // Hide empty message
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      const receiptItemDiv = document.createElement('div');
      receiptItemDiv.classList.add('receipt-item');
      receiptItemDiv.innerHTML = `
        <div class="receipt-item-name">${item.name}</div>
        <div class="receipt-quantity">${item.quantity}</div>
        <div class="receipt-price">${formatCurrency(item.price)}</div>
        <div class="receipt-total">${formatCurrency(itemTotal)}</div>
      `;
      receiptItemsContainer.appendChild(receiptItemDiv);
    });
  }
  grandTotalElement.textContent = formatCurrency(moneySpent);
}

// Resets all spending
function resetSpending() {
  cart = [];
  moneySpent = 0;
  moneyRemaining = currentBillionaire.netWorth;
  updateMoneyDisplay();
  updateReceipt();
  // Reset all item quantities in the grid to 0
  document.querySelectorAll('.quantity-input').forEach(input => {
    input.value = 0;
  });
}

// Creates and displays all purchasable item cards
function createItemCards() {
  const itemsContainer = document.getElementById('items-container');
  if (!itemsContainer) return; // Exit if not on the items page

  itemsContainer.innerHTML = '<h2>Items to Purchase</h2>'; // Re-add title just in case cleared
  items.forEach(item => {
    const itemCard = document.createElement('div');
    itemCard.classList.add('item-card');
    itemCard.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p class="item-price">${formatCurrency(item.price)}</p>
      <div class="quantity-controls">
        <button class="minus-btn" data-id="${item.id}">-</button>
        <input type="number" class="quantity-input" data-id="${item.id}" value="0" min="0">
        <button class="plus-btn" data-id="${item.id}">+</button>
      </div>
      <button class="buy-btn" data-id="${item.id}">Buy</button>
    `;
    itemsContainer.appendChild(itemCard);
  });

  // Attach event listeners using delegation
  itemsContainer.addEventListener('click', (event) => {
    const target = event.target;
    const itemId = Number.parseInt(target.dataset.id);
    const item = items.find(i => i.id === itemId);

    if (!item) return;

    const input = target.closest('.quantity-controls')?.querySelector(`.quantity-input[data-id="${itemId}"]`);
    if (!input) return;

    let quantity = Number.parseInt(input.value) || 0;

    if (target.classList.contains('plus-btn')) {
      quantity++;
      input.value = quantity;
    } else if (target.classList.contains('minus-btn')) {
      if (quantity > 0) {
        quantity--;
        input.value = quantity;
      }
    } else if (target.classList.contains('buy-btn')) {
        // Find how many items are being bought from the input value
        const buyQuantity = Number.parseInt(input.value) || 0;
        if (buyQuantity <= 0) {
            alert("Please enter a quantity greater than 0 to buy.");
            return;
        }

        const cost = item.price * buyQuantity;
        if (moneyRemaining >= cost) {
            addToCart(item, buyQuantity);
            input.value = 0; // Reset input after buying
        } else {
            alert(`You don't have enough money left to buy ${buyQuantity} of ${item.name}! You need ${formatCurrency(cost)} but only have ${formatCurrency(moneyRemaining)} remaining.`);
            input.value = 0; // Reset input if not enough money
        }
    }
  });

  // Attach change listener for direct input on quantity fields
  itemsContainer.addEventListener('change', (event) => {
    const target = event.target;
    if (target.classList.contains('quantity-input')) {
      const itemId = Number.parseInt(target.dataset.id);
      const item = items.find(i => i.id === itemId);
      if (!item) return;

      let quantity = Number.parseInt(target.value) || 0;
      if (quantity < 0) {
        quantity = 0;
        target.value = 0;
      }

      // Check if current money can cover the cost if this quantity were added to cart immediately
      // This is for direct input changes, not affecting actual cart state until "Buy" is pressed
      // For now, we only update state on "Buy", so this check is primarily for visual feedback or pre-validation
      // If we wanted real-time cart update on quantity input change, this logic would be more complex
    }
  });
}

// --- Share Functionality ---
function shareSpendingSpree() {
    let message = `I just spent ${formatCurrency(moneySpent)} of ${currentBillionaire.name}'s fortune! `;
    message += `I bought ${cart.length} unique items and still have ${formatCurrency(moneyRemaining)} left! Try it yourself!`;
    const url = window.location.href; // Share current page URL

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(message)}&u=${encodeURIComponent(url)}`;

    // Open in new tabs
    window.open(twitterUrl, '_blank');
    window.open(facebookUrl, '_blank');

    alert("Simulating share! Check new tabs for Twitter and Facebook pre-filled posts.");
}


// --- Initialization Logic ---
document.addEventListener('DOMContentLoaded', () => {
  const billionaireCardsContainer = document.getElementById('billionaire-cards-container');

  if (billionaireCardsContainer) {
    // Logic for index.html (Home Page)
    billionaires.forEach(billionaire => {
      const card = document.createElement('div');
      card.classList.add('billionaire-card');
      card.innerHTML = `
        <img src="${billionaire.image}" alt="${billionaire.name}">
        <h3>${billionaire.name}</h3>
        <p>${formatCurrency(billionaire.netWorth)}</p>
      `;
      card.addEventListener('click', () => {
        window.location.href = `billionaire.html?id=${billionaire.id}`;
      });
      billionaireCardsContainer.appendChild(card);
    });
    startAdRotation(); // Start ads for index.html

  } else {
    // Logic for billionaire.html (Spending Page)
    const billionaireId = getQueryParam('id');
    currentBillionaire = billionaires.find(b => b.id === billionaireId);

    if (currentBillionaire) {
      document.getElementById('billionaire-img').src = currentBillionaire.image;
      document.getElementById('billionaire-img').alt = currentBillionaire.name;
      document.getElementById('billionaire-name').textContent = currentBillionaire.name;
      moneyRemaining = currentBillionaire.netWorth; // Initialize money remaining

      updateMoneyDisplay();
      createItemCards();
      updateReceipt(); // Initialize receipt

      // Event listeners for action buttons
      document.getElementById('reset-button')?.addEventListener('click', resetSpending);
      document.getElementById('share-button')?.addEventListener('click', shareSpendingSpree);

      startAdRotation(); // Start ads for billionaire.html
    } else {
      // Handle case where no valid billionaire ID is found
      alert('Billionaire not found! Redirecting to home page.');
      window.location.href = 'index.html';
    }
  }
});




/*
// js/spending.js (Initial version for index.html)
import { billionaires } from './billionaires.js';

// --- Utility Functions ---
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// --- Home Page Logic ---
function createBillionaireCards() {
  const container = document.getElementById('billionaire-cards-container');
  if (!container) return; // Ensure we are on the home page

  billionaires.forEach(billionaire => {
    const card = document.createElement('div');
    card.classList.add('billionaire-card');
    card.innerHTML = `
      <img src="${billionaire.image}" alt="${billionaire.name}">
      <h3>${billionaire.name}</h3>
      <p>${formatCurrency(billionaire.netWorth)}</p>
    `;
    card.addEventListener('click', () => {
      window.location.href = `billionaire.html?id=${billionaire.id}`;
    });
    container.appendChild(card);
  });
}

// --- Ad Display Logic ---
const ads = [
  { text: "Invest in the Future! Buy a star!", image: "https://images.unsplash.com/photo-1543881457-3b2d18449c26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { text: "Live the Dream! Explore Luxury Homes!", image: "https://images.unsplash.com/photo-1560518883-ff58f3b20468?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { text: "Your Next Adventure Starts Here!", image: "https://images.unsplash.com/photo-1510521401391-be714241d7af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { text: "Secure Your Legacy! Premium Private Banking.", image: "https://images.unsplash.com/photo-1550565118-fe0db8fa9d96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

function displayRandomAd() {
    const adContainers = document.querySelectorAll('.ad-placeholder');
    if (adContainers.length === 0) return;

    adContainers.forEach(container => {
        const randomIndex = Math.floor(Math.random() * ads.length);
        const ad = ads[randomIndex];

        container.style.backgroundImage = `url('${ad.image}')`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
        container.style.color = 'white';
        container.style.textShadow = '1px 1px 3px rgba(0,0,0,0.7)';
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.fontSize = '1.5em';
        container.style.fontWeight = 'bold';
        container.style.padding = '1em';
        container.textContent = ad.text;
    });
}

// Initialize based on the page
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('billionaire-cards-container')) {
    // We are on the index.html page
    createBillionaireCards();
    setInterval(displayRandomAd, 5000); // Change ad every 5 seconds
    displayRandomAd(); // Display immediately on load
  }
  // No else needed here, as the rest of spending.js will handle billionaire.html
});

*/