function toggleSidebar() {
    document.querySelector('.main-menu').classList.toggle('active');
}

let favoriteProduct = [
    {
        imageURL: "./Images/product.png",
        title1: "Khai trương hồng phát 2",
        title2: "VS035",
        price1: "890,000đ",
        price2: "807,500đ",
        label: "-10%"
    },
    {
        imageURL: "./Images/product.png",
        title1: "Tình bền lâu",
        title2: "VS002",
        price1: "",
        price2: "300,500đ",
        label: "-10%"
    },
    {
        imageURL: "./Images/product.png",
        title1: "Ngày nắng",
        title2: "VS005",
        price1: "550,000đ",
        price2: "470,500đ",
        label: "-10%"
    },
    {
        imageURL: "./Images/product.png",
        title1: "Chúc mừng tốt nghiệp",
        title2: "VS004",
        price1: "",
        price2: "350,000đ",
        label: "-10%"
    },
    {
        imageURL: "./Images/product.png",
        title1: "Khai trương hồng phát 2",
        title2: "VS035",
        price1: "890,000đ",
        price2: "807,500đ",
        label: "-20%"
    },
    {
        imageURL: "./Images/product.png",
        title1: "Tình bền lâu",
        title2: "VS002",
        price1: "",
        price2: "300,500đ",
        label: "-30%"
    },
    {
        imageURL: "./Images/product.png",
        title1: "Ngày nắng",
        title2: "VS005",
        price1: "550,000đ",
        price2: "470,500đ",
        label: "-69%"
    },
    {
        imageURL: "./Images/product.png",
        title1: "Chúc mừng tốt nghiệp",
        title2: "VS004",
        price1: "",
        price2: "350,000đ",
        label: ""
    },
];

let string = "";
for (let i = 0; i < 8; i++) {
    string += `<div class="col-md-3 col-6">
                <div class="card discount" style="width: 100%;">
                    <img src="${favoriteProduct[i].imageURL}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3>${favoriteProduct[i].title1}</h3>
                        <h4>${favoriteProduct[i].title2}</h4>
                        <h6>${favoriteProduct[i].price1}</h6>
                        <h5><b>${favoriteProduct[i].price2}</b></h5>
                    </div>
                    ${favoriteProduct[i].label === "" ? "" : `<span class="label">
                        <p><b>${favoriteProduct[i].label}</b></p></span>`}
                </div>
            </div>`;
}
document.getElementById("favorite").innerHTML = string;

//lab 7
function addNewProduct() {
    const newProduct = {
        imageURL: "./Images/product.png",
        title1: "Hạnh Phúc Vẹn Tròn",
        title2: "VS099",
        price1: "600,000đ",
        price2: "510,000đ",
        label: "-15%"
    };

    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-3 col-6';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card discount';
    cardDiv.style.width = '100%';

    const img = document.createElement('img');
    img.src = newProduct.imageURL;
    img.className = 'card-img-top';
    img.alt = newProduct.title1;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const h3 = document.createElement('h3');
    h3.textContent = newProduct.title1;

    const h4 = document.createElement('h4');
    h4.textContent = newProduct.title2;

    const h6 = document.createElement('h6');
    h6.textContent = newProduct.price1;

    const h5 = document.createElement('h5');
    h5.innerHTML = `<b>${newProduct.price2}</b>`;

    cardBody.appendChild(h3);
    cardBody.appendChild(h4);
    cardBody.appendChild(h6);
    cardBody.appendChild(h5);

    //thêm cái khung dícount
    if (newProduct.label !== "") {
        const labelSpan = document.createElement('span');
        labelSpan.className = 'label';
        labelSpan.innerHTML = `<p><b>${newProduct.label}</b></p>`;
        cardDiv.appendChild(labelSpan);
    }

    //append lại cái card
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);

    document.getElementById('favorite').appendChild(colDiv);
}

addNewProduct();