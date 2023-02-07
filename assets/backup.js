const renderCartNews = ({ id, Img, Title, UrlNews}) => {
  return `
<div class="savedInCart">
    <div class="saveInCart-info">
      <img src="${Img}" alt="img">
        <div class="savedInCart-middle">
        <h3>${Title}</h3>
        <p>${Description}</p>
        <a href="${UrlNews}">Leer</a>
    </div>
  </div>
  <button class="btn-delete delete" data-id='${id}'
      data-img='${Img}'
      data-title='${Title}'
      data-description= "${Description}">Eliminar</button>
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
  
  const isExistingCartNews = (id) => cartNews.some((news) => news.id === id);
  
  const createCartNews = (news) => {
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
  
  const checkCartNewsState = () => {
    saveLocalStorage(cartNews);
    renderCartNew();
    disableBtn(deleteBtn);
    renderCartBubble();
    removeNewsFromCart();
  };
  
  const creatNewsData = (id, Img, Title, Description) =>{
    return {id, Img, Title, Description}
  }
  
  const addNew = (e) => {
    if (!e.target.classList.contains("btn-add")) return;
    const { id, Img, Title, Description } = e.target.dataset;
    const newsData = creatNewsData (id, Img, Title, Description)
    
  
    const news = { id };
    if (isExistingCartNews(news)) {
      return;
    } else {
      createCartNews(news);
      showSuccessModal("La noticia se ha guardado en favoritos.");
    }
    checkCartNewsState();
  };
  
  const renderCartBubble = () => {
    favBubble.textContent = cartNews.reduce((acc, cur) => acc + cur.quantity, 0);
  };
  
  const resetCartNews = () => {
    cartNews = [];
    checkCartNewsState();
  };
  
  const completeCartAction = (confirmMsg, successMsg) => {
    if (!cartNews.length) return;
    if (window.confirm(confirmMsg)) {
      resetCartNews();
      alert(successMsg);
    }
  };
  
  const deleteNewsInCart = () => {
    completeCartAction(
      "¿Desea eliminar todas las noticias en favoritos?",
      "No tiene noticias guardadas"
    );
  };
  
  const handleDeleteNew = (e) => {
    if (e.target.classList.contains("delete")) {
      handleDeleteSomeNew(e.target.dataset.id);
    }
    checkCartNewsState;
  };
  
  const removeNewsFromCart = ({ id }) => {
    cartNews = cartNews.filter((news) => news.id !== id);
    checkCartNewsState();
  };
  
  const handleDeleteSomeNew = (id) => {
    const existingNews = cartNews.find((news) => news.id === id);
  
    if (existingNews.quantity === 1) {
      if (window.confirm("¿Desea eliminar la noticia de favoritos?")) {
        removeNewsFromCart(existingNews);
      }
      return;
    }
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
    newsCart.addEventListener("click", handleDeleteNew);
    document.addEventListener("DOMContentLoaded", renderCartNew);
  
    news.addEventListener("click", addNew);
    deleteBtn.addEventListener("click", deleteNewsInCart);
    disableBtn(deleteBtn);
    renderCartBubble();
  };
  
  init();


  