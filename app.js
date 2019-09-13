
var ListaDeProdutos = []

ListaDeProdutos[0] = ["Seila", 2]
ListaDeProdutos[1] = ["Fulano", 3]


function listarProduto(ListaDeProdutos){
    var listagem = "";
    for(i=0; i<2; i++){
        listagem += "<li>"
        for(j=0; j<2; j++){
            listagem += ListaDeProdutos[i][j] + " ";
        }
        listagem += "</li>";
    }
    return listagem;
}

//{
//The window object calls the function:
document.getElementById("listaProduto").innerHTML = listarProduto(ListaDeProdutos);
//}


//A button object calls the function:
document.getElementById("btn").addEventListener("click", listarProduto );

console.log(ListaDeProdutos)