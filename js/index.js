// products stock
// const prod = [
//     {
//         id:0,
//         name: 'maquiagem 1',
//         brand: 'AAAAA',
//         price: 22.30,
//         offer: false,
//         offerPercent: 0,
//         img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'
//     },
//     {
//         id:1,
//         name: 'maquiagem 2',
//         brand: 'BBBBB',
//         price: 56.80,
//         offer: false,
//         offerPercent: 0,
//         img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

//     },
//     {
//         id:2,
//         name: 'maquiagem 3',
//         brand: 'CCCCC',
//         price: 74.30,
//         offer: false,
//         offerPercent: 0,
//         img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

//     },
//     {
//         id:3,
//         name: 'maquiagem 4',
//         brand: 'DDDDD',
//         price: 92.50,
//         offer: false,
//         offerPercent: 0,
//         img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

//     },
//     {
//         id:4,
//         name: 'maquiagem 5',
//         brand: 'EEEEE',
//         price: 10.00,
//         offer: false,
//         offerPercent: 0,
//         img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

//     },
//     {
//         id:5,
//         name: 'maquiagem 6',
//         brand: 'FFFFF',
//         price: 11.90,
//         offer: false,
//         offerPercent: 10,
//         img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

//     },
// ]

// get products from API

const getProducts = (url) => {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
} 

// tranform the products request from string to json
const productsFromAPI = JSON.parse(getProducts('https://marymakes-back-production.up.railway.app/api/produtos'))


// function clear filter button
const clearFilter = () => {
    currentPriceSearch = null
    currentTypeSearch = null
    currentCategorySearch= null
    currentMarca="Todas"
    changeParagraphName("Marcas");

    deleteProds()
    createProductCard(productsFromAPI)            
    
    let btnClearFilter = document.querySelector('.clearFilter')   
    btnClearFilter.remove()
    updateAvailableBrands(productsFromAPI)
           
}

//function to add btn clear filter in DOM

const containerFilter = document.querySelector('.button')

const addBtnClearFilter = () => {
    let btnClearFilter = document.querySelector('.clearFilter')
    if(!btnClearFilter){
        let iconClearFilter = document.createElement('i')
        iconClearFilter.classList = 'fa-solid fa-square-xmark clearFilter'
        iconClearFilter.title = 'Limpar filtro'
        iconClearFilter.addEventListener('click', clearFilter)
        containerFilter.prepend(iconClearFilter) 
    }

}

const changeParagraphName = (_name) => {
    var paragraph = document.getElementById("marcaPara");
    paragraph.innerHTML = _name;
}

// function to filter products

const FilterArray = (idTypeFilter = null, price = null, idCategoryFilter=null, marcaName="Todas") => {
    let newArrayFilter = productsFromAPI

    if(idTypeFilter){
        newArrayFilter = newArrayFilter.filter((item) => item.tipo_id == idTypeFilter)
                      
    }
    if(idCategoryFilter){
        newArrayFilter = newArrayFilter.filter((item) => item.categoria_id == idCategoryFilter)                
    }        
    if(price){
        newArrayFilter = newArrayFilter.filter(item => Math.floor(item.preco) <= price)            
    }
    updateAvailableBrands(newArrayFilter) 
    if(marcaName!="Todas"){
        newArrayFilter = newArrayFilter.filter(item => item.marca == marcaName)    
        changeParagraphName(marcaName);
    }else{
        changeParagraphName("Marcas");
    }

        
    addBtnClearFilter() 
    deleteProds()  
    createProductCard(newArrayFilter)  

    if(!idTypeFilter && !idCategoryFilter && !price && marcaName=="Todas"){
        clearFilter();
    }
                       
}

//add functions to buttons on navbar

let currentTypeSearch = null
let currentPriceSearch = null
let currentCategorySearch = null

const btnLanc= document.querySelector('#btnLancamentos')

btnLanc.addEventListener('click', () => {
    currentTypeSearch = 2
    currentCategorySearch=null
    FilterArray(currentTypeSearch, currentPriceSearch, currentCategorySearch,currentMarca)
}, false)


const btnPromo = document.querySelector('#btnPromo')



btnPromo.addEventListener('click', () => {
    currentTypeSearch = 3
    currentCategorySearch=null;
    FilterArray(currentTypeSearch, currentPriceSearch, currentCategorySearch, currentMarca)
}, false)

// BOTÃO DO CORRETIVO NAVBAR
const btnCorretivo = document.querySelector('#btnCorretivo')

btnCorretivo.addEventListener('click', () => {
    currentPriceSearch = null
    currentTypeSearch = null    
    currentCategorySearch = 3
    FilterArray(currentTypeSearch, currentPriceSearch,currentCategorySearch, currentMarca)
}, false)


// BOTÃO DO BATOM NAVBAR
const btnBatom = document.querySelectorAll('#btnBatom')

btnBatom.addEventListener('click', () => {
    currentPriceSearch = null
    currentTypeSearch = null
    currentCategorySearch = 2
    FilterArray(currentTypeSearch, currentPriceSearch,currentCategorySearch, currentMarca)
}, false)

// BOTÃO DA BASE NAVBAR
const btnBase = document.querySelector('#btnBase')

btnBase.addEventListener('click', () => {
    currentPriceSearch = null
    currentTypeSearch = null
    currentCategorySearch = 1
    FilterArray(currentTypeSearch, currentPriceSearch,currentCategorySearch, currentMarca)
}, false)

const btnFilter = document.querySelector('.btnFilter')
const inpPriceValue = document.querySelector('#priceInp')

btnFilter.addEventListener('click', () => {
    currentPriceSearch = inpPriceValue.value
    FilterArray(currentTypeSearch, currentPriceSearch, currentCategorySearch, currentMarca)
})


//function that create products cards

const createProductCard = (arrayrod) => {
    console.log(arrayrod)
    arrayrod.forEach(product => {
        
        let cardProd = document.createElement('div')
        cardProd.classList = 'cardProd'

        let cartFav = document.createElement('div')
        cartFav.classList = 'cartFav'

        let cartI = document.createElement('i')
        cartI.classList = 'fa-solid fa-cart-shopping'
        cartI.title = 'adicionar ao carrinho'
        cartI.addEventListener('click', addCart)

        let heartI = document.createElement('i')
        heartI.classList = 'fa-regular fa-heart'
        heartI.title = 'Adicionar aos favoritos'
        heartI.setAttribute('id', product.id)
        heartI.addEventListener('click', addFav)

        cartFav.append(cartI, heartI)

        let prodImg = document.createElement('div')
        prodImg.classList = 'prodImg'

        let imgCard = document.createElement('img')
        imgCard.src = product.imagens
        imgCard.alt = 'product image'

        prodImg.append(imgCard)


        let infoProd = document.createElement('div')
        infoProd.classList = 'infoProd'

        let prodName = document.createElement('div')
        prodName.classList = 'prodName'

        let spanProd = document.createElement('span')
        spanProd.classList = 'nameProd'
        let productNameVerify = product.nome
        if(productNameVerify.length > 15){
            productNameVerify = productNameVerify.slice(0,18)+'...'
        }
        spanProd.textContent = productNameVerify

        prodName.append(spanProd)

        let prodPrices = document.createElement('div')
        prodPrices.classList = 'prodPrices'

        let spanPriceOff = document.createElement('span')
        spanPriceOff.classList = 'priceOff'   
        spanPriceOff.textContent = `R$${parseFloat(product.preco).toFixed(2)}`

        let spanPriceProd = document.createElement('span')
        spanPriceProd.classList = 'priceProd'
        spanPriceProd.textContent = `R$${parseFloat(product.preco - (product.preco *(product.desconto/100))).toFixed(2)}`

        if(product.desconto != 0){
            prodPrices.append(spanPriceOff, spanPriceProd)
        }else{
            prodPrices.append(spanPriceProd)
        }

        infoProd.append(prodName, prodPrices)

        cardProd.append(cartFav, prodImg, infoProd)

        const containerProd = document.querySelector('.containerProd')
        containerProd.append(cardProd)

    });

}

// function to detele all cards before filter the cards
const deleteProds = () => {
    const containerProd = document.querySelector('.containerProd')
    while(containerProd.firstChild){
        containerProd.removeChild(containerProd.firstChild)
    }
}

// funtion to changing the heart icon
const addFav = (e) => {
    const toFav = e.target

    if(toFav.classList != 'fa-solid fa-heart'){
        toFav.classList = 'fa-solid fa-heart'
        toFav.style.color = '#FF7170'
    }else{
        toFav.classList = 'fa-regular fa-heart'
        toFav.style.color = '#FF7170'
    }
    
}

// function to add to cart
const addCart = () => {
    /* code here */
    console.log('add cart')
}


// function to show the product modal

const showProductModal = () => {
    /* code here */
}

//update brands avaliable to be filtered
let marcasArray = []
const containerMarcas = document.querySelector('.listMarcas')
let currentMarca = "Todas";
const updateAvailableBrands = (arrayprods) => {
    containerMarcas.replaceChildren();
    let newArrayFilter2 = arrayprods
    marcasArray = []
    marcasArray.push("Todas")

    newArrayFilter2.forEach(product => {
        marcaProd = product.marca;        
        if(!marcasArray.includes(marcaProd)){
            marcasArray.push(marcaProd)
        }                
    })    

    marcasArray.forEach(marca => {
        let marcaOption = document.createElement('a')
        marcaOption.id = `btn${String(marca).replace(/\s+/g, "")}`
        marcaOption.innerText = marca
        marcaOption.addEventListener('click', () => {
            currentMarca = marca;
            FilterArray(currentTypeSearch, currentPriceSearch,currentCategorySearch, currentMarca)            
        })
        containerMarcas.prepend(marcaOption) 
        
    })
}


//updateAvailableBrands
updateAvailableBrands(productsFromAPI)

// input range price of filter section

const inpPriceRange = document.querySelector('#priceInp')
const outputPriceRange = document.querySelector('#valuePrice')

outputPriceRange.textContent = inpPriceRange.value

inpPriceRange.addEventListener('input', (event) => {
    outputPriceRange.textContent = event.target.value
})

// initializing the function for crete the elements in HTML
createProductCard(productsFromAPI) 
