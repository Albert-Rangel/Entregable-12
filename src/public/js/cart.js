const socket = io()


// socket.on('AllProductsinCart', (data) => {
//     updateProductCartList(data);
// });


const cid = document.getElementById("cid").getAttribute("value");
cartProduct_gET()

 function cartProduct_gET() {
    //socket.emit('obtainCartInfo', cid)
     socket.emit('a')
     socket.on('b', message => {
        console.log("volio y esta en b1 " + message)
       
   
    })
    console.log("volio y esta en b2 ")
}
console.log("volio y esta en b3 ")


// Función para llamar al carrito personal
// function obtainPersonalCart() {
//     const buttongetCart= document.getElementById("personalCatalog");
//     console.log("entro en obtain cart")
//     const value = buttongetCart.value;
//     console.log(value)

//     // buttongetCart.addEventListener("click", (evt) => {
//     //     evt.preventDefault()
//     //     let pid = catalogo.id;
//     //     const cartid = document.getElementById('cartid').innerHTML;

//     //     socket.emit('addNewProducttoCart', {
//     //         pid, cartid,
//     //     })
//     // });

// }

// Función para actualizar la lista de productos disponibles en el carrito en mi página web
function updateProductCartList(productList) {
    const catalogDiv = document.getElementById("catalogo");
    let contenidocambiante = ""

    productList.docs.forEach(({ thumbnail, price, description, _id, code, stock, status, category, title }) => {
        contenidocambiante += `<div class="form-container">
            <div>
                <div class="card">
                    <img src= "${thumbnail}" alt="..." class="images">
                    <div class="card-body">
                        Title: ${title} </br> 
                        Id: ${_id} </br> 
                        Price: ${price} $ </br> 
                        Description : ${description} </br> 
                        Code: ${code}</br> 
                        Stock: ${stock}</br> 
                        Status: ${status}</br> 
                        Category: ${category}</br> 
                        <button id="btn-catalogo-${_id}" class="btn btn-success">Agregar</button>
                    </div>
                </div>
            </div>
        </div>`

    });

    cartDiv.innerHTML = contenidocambiante
}




