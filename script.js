const categories = {
  homme: ['shirt', 'men', 'homme'],
  femme: ['dress', 'women', 'femme'],
  accessoires: ['watch', 'bag', 'necklace', 'accessory']
};

const products = [
  { name: "Men's T-Shirt" },
  { name: "Women's Dress" },
  { name: "Gold Necklace" },
  { name: "Sneakers" },
  { name: "Watch" },
  { name: "Women's Bag" },
  { name: "Men's Watch" }
];

// تصنيف المنتجات حسب الكلمات المفتاحية
function categorize(productName) {
  const name = productName.toLowerCase();
  for (const category in categories) {
    if (categories[category].some(keyword => name.includes(keyword))) {
      return category;
    }
  }
  return 'all';
}

// إضافة التصنيف للمنتجات
const enrichedProducts = products.map(p => ({
  ...p,
  category: categorize(p.name)
}));

let currentCategory = 'all';

// فلترة التصنيف عند الضغط على الأزرار
function filterCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent.toLowerCase().includes(category)) {
      tab.classList.add('active');
    }
    if (category === 'all' && tab.textContent.toLowerCase().includes('tout')) {
      tab.classList.add('active');
    }
  });
  renderProducts();
}

// عرض المنتجات
function renderProducts() {
  const list = document.getElementById('productList');
  list.innerHTML = '';
  enrichedProducts.forEach(product => {
    if (currentCategory === 'all' || product.category === currentCategory) {
      const div = document.createElement('div');
      div.className = 'product';
      div.textContent = product.name;
      list.appendChild(div);
    }
  });
}

// البحث عن المنتجات
function searchProducts() {
  const query = document.querySelector('.search-input').value.toLowerCase();
  const list = document.getElementById('productList');
  list.innerHTML = '';
  enrichedProducts.forEach(product => {
    if (product.name.toLowerCase().includes(query)) {
      const div = document.createElement('div');
      div.className = 'product';
      div.textContent = product.name;
      list.appendChild(div);
    }
  });
}

renderProducts();
