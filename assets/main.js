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

const renderNew = ({ id, img, title, description, por, url }) => {
  return `
  <div class="card">
 
  <div class="card_img">
      <img src=${img} alt="img">
  </div>
  <div class="mid">
      <h1>${title}</h1>
      <p>${description}</p>
      <h4>${por}</h4>
  </div>
  <div class="bot">
      <a class="reedBtn" href=${url}> Leer </a>
     
      <button class="btn-add"
      data-id=${id}
      data-url=${url}
      data-img=${img}
      data-title=${title}
      data-description=${description}> <i class="fa-solid fa-star"></i></button>
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

/* "Carrito "de Noticias Favoritas */

const renderFavNews = (newCart) => {
  const { id, img, title, url, description } = newCart;
  return `
<div class="savedInCart">
    <div class="saveInCart-info">
      <img src=${img} alt="img">
        <div class="savedInCart-middle">
        <h3>${title}</h3>
        <p>${description}</p>
        <a href=${url}>Leer</a>
    </div>
  </div>
  <button class="btn-delete delete" data-id=${id}>Eliminar</button>
</div>

  `;
};
// Funcion para renderizar favoritos.
const renderCartNew = () => {
  if (!cartNews.length) {
    newsCart.innerHTML = `<p class="empty-msg">No hay noticias guardadas.</p>`;
    return;
  }
  newsCart.innerHTML = cartNews.map(renderFavNews).join("");
};

//Boton de existencia de noticias.

const disableBtn = (button) => {
  if (!cartNews.length) {
    button.classList.add("disabled");
  } else {
    button.classList.remove("disabled");
  }
};

// Tomo los datos para favoritos.
const creatNewsData = (id, img, title, description, url) => {
  return { id, img, title, description, url };
};
const existingNews = (news) => {
  return cartNews.find((item) => item.id === news.id);
};

// Crear " carrito" de favoritos
const createNewsInCart = (news) => {
  cartNews = [...cartNews, { ...news, quantity: 1 }];
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("acive-modal");
  }, 1500);
};

const checkNewState = () => {
  saveLocalStorage(cartNews);
  renderCartNew(cartNews);
  disableBtn(deleteBtn);
};

// AGregar Noticias a favoritos.
const addNews = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const { id, img, title, description, url } = e.target.dataset;
  const newsData = creatNewsData(id, img, title, description, url);

  if (existingNews(newsData)) {
    return;
  } else {
    createNewsInCart(newsData);
    showSuccessModal("La noticia se agregó a favoritos");
  }

  checkNewState();
};

//Cantidad de Noticias
const renderCartBubble = () => {
  favBubble.textContent = cartNews.reduce((acc, cur) => acc + cur.quantity, 0);
};

const resetCartNews = () => {
  cartNews = [];
  checkNewState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cartNews.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartNews();
    alert(successMsg);
  }
};

//Eliminar todas las noticia de Favoritos
const deleteNewsInCart = () => {
  completeCartAction(
    "¿Desea eliminar todas las noticias en favoritos?",
    "No tiene noticias guardadas"
  );
};

const DeleteOnlyOneNew = (e) => {
  if (e.target.classList.contains("delete")) {
    deleteSomeNew(e.target.dataset.id);
    
  }
  checkNewState();
}

  const deleteSomeNew = (id) => {
    const ifExistingNews = cartNews.find((news) => news.id === id);
    if (ifExistingNews.quantity === 1) {
      if (window.confirm("¿Queres eliminar la noticia de favoritos?")) {
        removeNews(ifExistingNews);
      }
      return;
    }
  };


const removeNews = ({ id }) => {
  cartNews = cartNews.filter((news) => news.id !== id);
  checkNewState();
};
//Funciones Inicializadoras
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

  news.addEventListener("click", addNews);
  disableBtn(deleteBtn);
  deleteBtn.addEventListener("click", deleteNewsInCart);
  newsCart.addEventListener("click", DeleteOnlyOneNew);
  renderCartBubble();
};

init();
