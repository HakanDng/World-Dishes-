const menu = [
    {
        id: 1,
        title: "Sushi Nigiri",
        category: "Chinese",
        price: 150.00,
        img:
            "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/nigiri-sushi_23_11zon-586.webp",
        desc: `Nigiri (sushi) yaparken levrek, karides ve somon gibi deniz ürünleri tercih edilir. Minik balık filetonun üzeri pirinç ile kaplandıktan sonra, sushi sosları eşliğinde servis edilir.`,
    },
    {
        id: 2,
        title: "Kebab",
        category: "Turkish",
        price: 120.00,
        img:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/1024px-Lula_kebab_2.jpg",
        desc: `Kebap, mangalda meşe kömüründe veya odun fırınında.`,
    },
    {
        id: 3,
        title: "Noodle",
        category: "Chinese",
        price: 100.00,
        img:
            "https://www.potelounge.com/asset/poteLounge/img/sebzelinoddledscf6300-kopya.jpg",
        desc: `Karışık Sebze, Soya Sos, İstridye Sos, Soya Filizi, Taze Yeşil Soğan.`,
    },
    {
        id: 4,
        title: "Tavuk Şiş",
        category: "Turkish",
        price: 115.00,
        img:
            "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/03/firinda-tavuk-sis-asama-one-cikan.jpg",
        desc: `Yumuşacık pişmiş tavuk etleri.`,
    },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
    (values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
    ["All"]
);

const categoryList = () => {
    const categoryBtns = categories
        .map((category) => {
            return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");

    //filter menu
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;
            console.log(category);
            const menuCategory = menu.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "All") {
                menuList(menu);
            } else {
                menuList(menuCategory);
            }
        });
    });
};

const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
        return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
