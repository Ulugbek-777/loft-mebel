let kor = document.getElementById("kor");

function getProduct() {
  kor.innerHTML = ""; 
  fetch("https://652553ed67cfb1e59ce71adc.mockapi.io/livingrooms", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => innerProduct(data))
    .catch((error) => console.log(error));
}

function innerProduct(data) {
  data.forEach((item) => {
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
      <button class="del-btn" onclick="removeProduct(${item.id})">X</button>
    </div>`;
  });
}

function removeProduct(id) {
  fetch(`https://652553ed67cfb1e59ce71adc.mockapi.io/livingrooms/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => getProduct())
    .catch((error) => console.log(error));
}


getProduct();