let card = document.getElementById("card");
let kor = document.getElementById("kor");

let products = [
  {
    name: "Барные стулья",
    title: "Толикс-2 White Gloss",
    price: "230",
    active: false,
    description: "",
    width: "45",
    height: "88",
    depth: "79",
    img: "https://realmebel.pro/upload/iblock/c60/c601fd8a907c1c58eeff1b564c6f530d.jpg",
    discount: "",
    saved: false,
    id: "4",
    categoryId: "1",
  },
  {
    name: "Барные стулья",
    title: "Толикс-2 White Gloss",
    price: "230",
    active: true,
    description: "",
    width: "45",
    height: "88",
    depth: "79",
    img: "https://st.inmebelstil.ru/8/2318/354/mebel_voronezh_katalog_kuhni1.jpg",
    discount: "",
    saved: false,
    id: "6",
    categoryId: "1",
  },
  {
    name: "Барные стулья",
    title: "Толикс-2 White Gloss",
    price: "230",
    active: false,
    description: "",
    width: "45",
    height: "88",
    depth: "79",
    img: "https://realmebel.pro/upload/iblock/c60/c601fd8a907c1c58eeff1b564c6f530d.jpg",
    discount: "",
    saved: false,
    id: "4",
    categoryId: "1",
  },
  {
    name: "Барные стулья",
    title: "Толикс-2 White Gloss",
    price: "230",
    active: true,
    description: "",
    width: "45",
    height: "88",
    depth: "79",
    img: "https://st.inmebelstil.ru/8/2318/354/mebel_voronezh_katalog_kuhni1.jpg",
    discount: "",
    saved: false,
    id: "6",
    categoryId: "1",
  },
  {
    name: "Барные стулья",
    title: "Толикс-2 White Gloss",
    price: "230",
    active: false,
    description: "",
    width: "45",
    height: "88",
    depth: "79",
    img: "https://realmebel.pro/upload/iblock/c60/c601fd8a907c1c58eeff1b564c6f530d.jpg",
    discount: "",
    saved: false,
    id: "4",
    categoryId: "1",
  },
];

let korzine = [
  {
    name: "Барные стулья",
    title: "Толикс-2 White Gloss",
    price: "230",
    active: false,
    description: "",
    width: "45",
    height: "88",
    depth: "79",
    img: "https://realmebel.pro/upload/iblock/c60/c601fd8a907c1c58eeff1b564c6f530d.jpg",
    discount: "",
    saved: false,
    id: "4",
    categoryId: "1",
  },
  {
    name: "Барные стулья",
    title: "Толикс-2 White Gloss",
    price: "230",
    active: true,
    description: "",
    width: "45",
    height: "88",
    depth: "79",
    img: "https://st.inmebelstil.ru/8/2318/354/mebel_voronezh_katalog_kuhni1.jpg",
    discount: "",
    saved: false,
    id: "6",
    categoryId: "1",
  },
  {
    name: "Барные стулья",
    title: "Толикс-2 White Gloss",
    price: "230",
    active: false,
    description: "",
    width: "45",
    height: "88",
    depth: "79",
    img: "https://realmebel.pro/upload/iblock/c60/c601fd8a907c1c58eeff1b564c6f530d.jpg",
    discount: "",
    saved: false,
    id: "4",
    categoryId: "1",
  },
  {
    name: "Барные стулья",
    title: "Толикс-2 White Gloss",
    price: "230",
    active: true,
    description: "",
    width: "45",
    height: "88",
    depth: "79",
    img: "https://st.inmebelstil.ru/8/2318/354/mebel_voronezh_katalog_kuhni1.jpg",
    discount: "",
    saved: false,
    id: "6",
    categoryId: "1",
  },
];

products.forEach((item) => {
  card.innerHTML += `
        <div class="product">
            <span><ion-icon name="heart-empty"></ion-icon></span>
            <img class="aa" src="${item.img}" alt="product">
            <div class="title">
                <h3>${item.name}</h3>
                <p>${item.title}</p>
                <h4>${item.price}</h4>
            </div>
        </div>`;
});

korzine.forEach((item) => {
  kor.innerHTML += `
    <div class="card">
      <img class="imagess" src="${item.img}" alt="" />
      <span class="df1">
        <h3>${item.name}</h3>
        <h3>${item.price}</h3>
      </span>
      <span class="df2">
        <p class="color">Цвет:</p>
        <p class="kok">Темно-синий</p>
        <span class="colors"></span>
        <p class="kolichestva">Количество: 1</p>
        <p class="color">Размер(Ш×Д×В):</p>
        <p class="kok">${item.width} СМ × ${item.height} СМ × ${item.depth} СМ</p>
      </span>
      <div class="x">X</div>
    </div>`;
});
