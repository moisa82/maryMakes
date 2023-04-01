
// products stock
const stock = [
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
        offerPercent: 10,
        img: 'https://cdn.awsli.com.br/800x800/2503/2503735/produto/207106622/screenshot_20230307-101458_o_boticrio-1-hvdfar.jpg'

    },
]



const cart = document.querySelector('.container')

const createItemCart = (array) => {
    deleteAllItensCart()
    array.forEach(stock => {
        let container = document.createElement('div')
        container.classList = 'container'

        let prod = document.createElement('div')
        prod.classList = 'prod'

        let product = document.createElement('div')
        product.classList = 'product'

        let imgProd = document.createElement('img')
        imgProd.src = stock.img

        product.append(imgProd)

        let middle = document.createElement('div')
        middle.classList = 'middle'

        let middleH2 = document.createElement('h2')
        middleH2.textContent = stock.name

        let middleBottom = document.createElement('div')
        middleBottom.classList = 'middle_bottom'

        let middleBottomP = document.createElement('p')
        middleBottomP.textContent = `R$ ${stock.price}`

        middleBottom.append(middleBottomP)

        middle.append(middleH2, middleBottom)

        product.append(middle)

        let right = document.createElement('div')
        right.classList = 'right'

        let rightP = document.createElement('p')
        rightP.textContent = 'Quantidade'

        let qtd = document.createElement('div')
        qtd.classList = 'qtd'

        let minus = document.createElement('i')
        minus.classList = 'fa-solid fa-minus'
        minus.addEventListener('click', () => {
            itemQuantity(stock.id, -1)
        })

        let quantity = document.createElement('div')
        quantity.classList = 'quantity'
        quantity.setAttribute('id', 'item' + stock.id)

        let quantityP = document.createElement('p')
        quantityP.textContent = '1'

        let plus = document.createElement('i')
        plus.classList = 'fa-solid fa-plus'
        plus.addEventListener('click', () => {
            itemQuantity(stock.id, 1)
        })

        right.append(rightP)

        quantity.append(quantityP)

        qtd.append(minus, quantity, plus)

        right.append(qtd)

        product.append(right)

        prod.append(product)

        let Xh5 = document.createElement('h5')
        Xh5.textContent = 'X'
    
        container.append(prod, Xh5)

        const cartItens = document.querySelector('.cartItens')
        cartItens.append(container)
        });


}

const cartItens = document.querySelector('.cartItens')
//function to delete all itens of cart

const deleteAllItensCart = () => {

while(cartItens.firstChild){
        cartItens.removeChild(cartItens.firstChild)
    }
 }

//funtion to add or remove itens from a item

const itemQuantity = (id, value) => {
    let item = document.getElementById(`item${id}`)
    if(item.firstChild.textContent >= 0 && value == 1){
        item.firstChild.textContent = parseInt(item.firstChild.textContent) + 1
    }else if(item.firstChild.textContent > 0 && value == -1){
        item.firstChild.textContent = parseInt(item.firstChild.textContent) - 1
    }
}

let toLoad = stock

onload = createItemCart(toLoad)

let cart = JSON.parse(sessionStorage.getItem('cartUser'));

const carregarCarrinho = ()=>{
