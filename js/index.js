// products stock
const prod = [
    {
        id:0,
        name: 'maquiagem 1',
        brand: 'AAAAA',
        price: 22.30,
        offer: false,
        offerPercent: 0,
        img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'
    },
    {
        id:1,
        name: 'maquiagem 2',
        brand: 'BBBBB',
        price: 56.80,
        offer: false,
        offerPercent: 0,
        img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

    },
    {
        id:2,
        name: 'maquiagem 3',
        brand: 'CCCCC',
        price: 74.30,
        offer: false,
        offerPercent: 0,
        img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

    },
    {
        id:3,
        name: 'maquiagem 4',
        brand: 'DDDDD',
        price: 92.50,
        offer: false,
        offerPercent: 0,
        img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

    },
    {
        id:4,
        name: 'maquiagem 5',
        brand: 'EEEEE',
        price: 10.00,
        offer: false,
        offerPercent: 0,
        img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

    },
    {
        id:5,
        name: 'maquiagem 6',
        brand: 'FFFFF',
        price: 11.90,
        offer: false,
        offerPercent: 0,
        img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

    },
]


//function that create products cards

const createProductCard = () => {

    prod.forEach(product => {
        
        let cardProd = document.createElement('div')
        cardProd.classList = 'cardProd'

        let cartFav = document.createElement('div')
        cartFav.classList = 'cartFav'

        let cartI = document.createElement('i')
        cartI.classList = 'fa-solid fa-cart-shopping'
        cartI.title = 'adicionar ao carrinho'

        let heartI = document.createElement('i')
        heartI.classList = 'fa-regular fa-heart'
        heartI.title = 'Adicionar aos favoritos'
        heartI.setAttribute('id', product.id)

        cartFav.append(cartI, heartI)



        let prodImg = document.createElement('div')
        prodImg.classList = 'prodImg'

        let imgCard = document.createElement('img')
        imgCard.src = product.img
        imgCard.alt = 'product image'

        prodImg.append(imgCard)


        let infoProd = document.createElement('div')
        infoProd.classList = 'infoProd'

        let prodNameBrand = document.createElement('div')
        prodNameBrand.classList = 'prodNameBrand'

        let spanBrand = document.createElement('span')
        spanBrand.classList = 'brand'
        spanBrand.textContent = product.brand

        let spanProd = document.createElement('span')
        spanProd.classList = 'nameProd'
        spanProd.textContent = product.name

        prodNameBrand.append(spanBrand, spanProd)

        let spanPriceProd = document.createElement('span')
        spanPriceProd.classList = 'priceProd'
        spanPriceProd.textContent = `R$ ${product.price}`

        infoProd.append(prodNameBrand, spanPriceProd)

        cardProd.append(cartFav, prodImg, infoProd)

        const containerProd = document.querySelector('.containerProd')
        containerProd.append(cardProd)

    });
    
    

}






// function to show the product modal

const showProductModal = () => {
    /* code here */
}




setTimeout(() => {
    // funtion to changing the heart icon
    const heartIcon = document.querySelectorAll('.fa-regular', '.fa-heart')
    
    const addFav = (e) => {
        const toFav = e.target

        if(toFav.classList != 'fa-solid fa-heart'){
            toFav.classList = 'fa-solid fa-heart'
            toFav.style.color = 'red'
        }else{
            toFav.classList = 'fa-regular fa-heart'
            toFav.style.color = 'black'
        }
        
    }
    
    heartIcon.forEach(e => {
        e.addEventListener('click', addFav)
    });


    // function to sounding after click in cart shopping

    const allCarts = document.querySelectorAll('.fa-solid','.fa-cart-shopping')
    const addCart = () => {
        /* code here */
    }

    allCarts.forEach(cart => {
        cart.addEventListener('click', addCart)
    });

   
},10)

// initializing the function for crete the elements in HTML
createProductCard() 