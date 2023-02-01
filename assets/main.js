//INPUTS FORM.
const form = document.getElementById("form");
const userNameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

//NEWS ELEMENTS

const news = document.querySelector(".news-container");
const newsCart = document.querySelector(".newsCart-container");
const categories = document.querySelector(".categories");
const categoryList = document.querySelectorAll(".category");
const btnLoad = document.querySelector(".btn-load");
const favBubble = document.querySelector(".favorite-bubble");
const newsCartBtn = document.querySelector(".newsCart-label");
const cartMenu = document.querySelector(".newsCart");
const barsBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");
const successModal = document.querySelector(".add-modal");
const deleteBtn = document.querySelector(".btn-delete");

let cartNews = JSON.parse(localStorage.getItem("cartNews")) || [];

const saveLocalStorage = (favoriteList) => {
  localStorage.setItem("cartNews", JSON.stringify(favoriteList));
};

const renderNew = ({ id, Img, Title, Description, Por, UrlNews }) => {
  return `
  <div class="card">
 
  <div class="card_img">
      <img src="${Img}" alt="img">
  </div>
  <div class="mid">
      <h1>${Title}</h1>
      <p>${Description}</p>
      <h4>${Por}</h4>
  </div>
  <div class="bot">
      <a class="reedBtn" href="${UrlNews}"> Leer </a>
     
      <button class="btn-add"
      data-id='${id}'
      data-img='${Img}'
      data-title='${Title}'
      data-description= "${Description}"> <i class="fa-solid fa-star"></i></button>
  </div>
</div>
  `;
};

const renderDividerNews = (index = 0) => {
  const newsToRender = newsController.dividedNews[index];
  news.innerHTML += newsToRender.map(renderNew).join("");
};

const renderFilteredNews = (category) => {
  const newsList = newsData.filter((news) => news.category === category);
  news.innerHTML = newsList.map(renderNew).join("");
};

const renderNews = (index = 0, category = null) => {
  if (!category) {
    renderDividerNews(index);
  } else {
    renderFilteredNews(category);
  }
};

const isLastIndex = () =>
  newsController.nextNewsIndex === newsController.newsLimit;

const showMoreNews = () => {
  renderNews(newsController.nextNewsIndex);
  newsController.nextNewsIndex++;
  if (isLastIndex()) {
    btnLoad.classList.add("hidden");
  }
};

const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoryList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
    } else {
      categoryBtn.classList.add("active");
    }
  });
};

const changeShowMoreBtnState = (selectedCategory) => {
  if (!selectedCategory) {
    btnLoad.classList.remove("hidden");
    return;
  }
  btnLoad.classList.add("hidden");
};

const changeFilterState = (selectedCategory) => {
  changeBtnActiveState(selectedCategory);
  changeShowMoreBtnState(selectedCategory);
};

const applyFilter = (e) => {
  if (!e.target.classList.contains("category")) return;
  const clickedCategory = e.target.dataset.category;
  changeFilterState(clickedCategory);
  if (!clickedCategory) {
    news.innerHTML = "";
    renderNews();
  } else {
    renderNews(0, clickedCategory);
    newsController.nextNewsIndex = 1;
  }
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains("open-menu") &&
    !cartMenu.classList.contains("open-cart")
  )
    return;

  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-list")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const renderCartNews = ({ id, Img, UrlNews, Title, Description}) => {
  return `
  <div class="saveNew">
  <img src="${Img}" alt="img" id="${id}">
  <div class="savedInfo">
    <h2>${Title}</h2>
    <p>${Description}</p>
    <a href="${UrlNews}">Leer</a>
  </div>
  <button class="btn-delete"
      data-id='${id}'
      data-img='${Img}'
      data-title='${Title}'
      data-description= "${Description}"> <i class="fa-solid fa-trash"></i></button>
</div>
  `;
};

const renderCartNew = () => {
  if (!cartNews.length) {
    newsCart.innerHTML = `<p class="empty-msg">No hay noticias guardadas.</p>`;
    return;
  }
  newsCart.innerHTML = cartNews.map(renderCartNews).join("");
};

const isExistingCartNews = ({ id }) => cartNews.some((news) => news.id === id);

const createCartProduct = (news) => {
  cartNews = [...cartNews, { ...news, quantity: 1 }];
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("acive-modal");
  }, 1500);
};

const disableBtn = (button) => {
  if (!cartNews.length) {
    button.classList.add("disabled");
  } else {
    button.classList.remove("disabled");
  }
};

const checkCartState = () => {
  saveLocalStorage(cartNews);
  renderCartNew();
  disableBtn(deleteBtn);
  renderCartBubble();
};

const addUnitToNew = (news) => {
  cartNews = cartNews.map((cartNew) =>
    cartNew.id === news.id
      ? { ...cartNew, quantity: cartNew.quantity + 1 }
      : cartNew
  );
};

const addNew = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const { id, Title, Description, Img, UrlNews } = e.target.dataset;

  const product = { id, Title, Description, Img, UrlNews };
  if (isExistingCartNews(news)) {
    addUnitToNew(news);
    showSuccessModal("Se agregó una nueva noticia en favoritos.");
  } else {
    createCartProduct(news);
    showSuccessModal("La noticia se ha guardado en favoritos.");
  }
  checkCartState();
};

const renderCartBubble = () => {
  favBubble.textContent = cartNews.reduce((acc, cur) => acc + cur.quantity, 0);
};

const resetCartItems = () => {
  cartNews = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cartNews.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const deleteNewsInCart = () => {
  completeCartAction(
    "¿Desea eliminar todos los productos del carrito?",
    "El carrito se ha vacido"
  );
};

const handlePlusBtnEvent = (id) => {
  const existingProduct = cartNews.find((product) => product.id === id);
  addUnitToProduct(existingProduct);
};

const removeNewsFromCart = ({ id }) => {
  cartNews = cartNews.filter((news) => news.id !== id);
  checkCartState();
};

const substractNewUnit = ({ id }) => {
  cartNews = cartNews.map((news) =>
  news.id === id ? { ...news, quantity: news.quantity - 1 } : news
  );
};

const handleMinutBtnEvent = (id) => {
  const existingNews = cartNews.find((news) => news.id === id);

  if (existingNews.quantity === 1) {
    if (window.confirm("¿Desea eliminar el producto del carrito?")) {
      removeNewsFromCart(existingNews);
    }
    return;
  }
  substractNewUnit(existingNews);
};


const init = () => {
  renderNews();
  categories.addEventListener("click", applyFilter);
  btnLoad.addEventListener("click", showMoreNews);
  barsBtn.addEventListener("click", toggleMenu);
  newsCartBtn.addEventListener("click", toggleCart);
  window.addEventListener("scroll", closeOnScroll);
  barsMenu.addEventListener("click", closeOnClick);
  overlay.addEventListener("click", closeOnOverlayClick);
  document.addEventListener("DOMContentLoaded", renderCartNew);
  news.addEventListener("click", addNew);
  deleteBtn.addEventListener("click", deleteNewsInCart);
  disableBtn(deleteBtn);
  renderCartBubble();
};

init();
