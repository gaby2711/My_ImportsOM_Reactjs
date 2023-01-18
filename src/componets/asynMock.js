const products =[
    {
    "id":1,
    "nombre":"",
    "category": "",
    "cantidad":1,
    "precio":1200,
    "img": ""
    },
    {
    "id":2,
    "nombre":"",
    "category": "",
    "cantidad":1,
    "precio":1200,
    "img": ""
    },
    {
    "id":3,
    "nombre":"",
    "category": "",
    "cantidad":1,
    "precio":1400,
    "img": ""
    },
    {
    "id":4,
    "nombre":"",
    "category": "",
    "cantidad":1,
    "precio":1300,
    "img": ""
    } ,
    {
    "id":5,
    "nombre":"",
    "category": "",
    "cantidad":1,
    "precio":1300,
    "img": ""
    },
    {
    "id":6,
    "nombre":"",
    "category": "",
    "cantidad":1,
    "precio":1300,
    "img": ""
    }   
]

export const getProducts = () =>{
return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve (products)
    }, 1000)
})
}


export const getProductsByCategory = (categoryId) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId))
    }, 500)
})
}

export const getProductById = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod => prod.id === id))
    }, 500)
})
}
