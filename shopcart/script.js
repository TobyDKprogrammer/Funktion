// Kurv Array og total beløb
let cart = [];
let totalPrice = 0;

// Tilføj til kurv funktion
function addToCart(name, price) {
  cart.push({ name, price });
  totalPrice += price;
  updateCart();
}

// Slet fra kurv funktion
function removeFromCart(index) {
  totalPrice -= cart[index].price; // Opdater total pris
  cart.splice(index, 1); // Fjern element fra kurv array
  updateCart();
}

// Opdaterer kurv-ikon og modal
function updateCart() {
  document.getElementById('cart-count').innerText = cart.length;

  // Opdater kurv-indholdet i modal
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - ${item.price} kr`;

    // Slet knap for hvert produkt
    const deleteButton = document.createElement('span');
    deleteButton.innerText = 'Slet';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = () => removeFromCart(index);

    li.appendChild(deleteButton);
    cartItems.appendChild(li);
  });
  
  // Opdater total pris
  document.getElementById('total-price').innerText = totalPrice;
}

// Skift synlighed af modal
function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = modal.style.display === 'none' || modal.style.display === '' ? 'block' : 'none';
}
