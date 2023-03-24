const items = [
    {
        id: 0,
        tipo: 0,
        nome: 'Calça Masculina',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: 'img/calca-masculina.webp',
        quantidade: 0,
        valor: 50.99,
        tamanho: '36',
        cor: 'Preta'
    },
    {
        id: 1,
        tipo: 0,
        nome: 'Camisa Masculina',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: '/img/camisa-masculina.webp',
        quantidade: 0,
        valor: 35.99,
        tamanho: 'Padrão',
        cor: 'Preta'
    },
    {
        id: 2,
        tipo: 1,
        nome: 'Short Feminino',
        descricao: 'Lorem Ips typesetting industry.',
        img: '/img/short-feminino.webp',
        quantidade: 0,
        valor: 42.99,
        tamanho: 'Padrão',
        cor: 'Preta'
    },
    {
        id: 3,
        tipo: 1,
        nome: 'Calça Feminina',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: '/img/calca-feminina.webp',
        quantidade: 0,
        valor: 74.99,
        tamanho: 'Padrão',
        cor: 'Preta'
    },
    {
        id: 4,
        tipo: 1,
        nome: 'Camisa Feminina',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: '/img/camisa-feminina.jfif',
        quantidade: 0,
        valor: 23.99,
        tamanho: 'Padrão',
        cor: 'Preta'
    },
    {
        id: 5,
        tipo: 2,
        nome: 'Mochila de criança',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: '/img/mochila-crianca.jfif',
        quantidade: 0,
        valor: 19.99,
        tamanho: 'Padrão',
        cor: 'Preta'
    },
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML += `

        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 articles">
            <div class="articles-content">
                <img src="`+ val.img +`" alt="" srcset="">
                <br/>
                <h3>`+val.nome+`</h3>
                <p>`+val.descricao+`</p>

                <div class="div-size mb-3">
                    <button class="size">PP</button>
                    <button class="size">P</button>
                    <button class="size">M</button>
                    <button class="size">G</button>
                    <button class="size">GG</button>
                </div>

                <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Selecione</option>
                    <option value="1">Preto</option>
                    <option value="2">Azul</option>
                    <option value="3">Vermelho</option>
                    <option value="4">Rosa</option>
                </select>

                <p class="w-100 text-center p-2 rounded" 
                style="font-size:18px; background-color: #eeeeee; font-weight: 600;"> 
                    R$ `+val.valor+`
                </p>

                <a key="`+val.id+`" class="btn btn-outline-success d-flex justify-content-center align-items-center">
                    <span>Adicionar ao carrinho</span> 
                    <i class="material-symbols-outlined" style="margin-left:5px;"> add_circle </i>
                </a>
            </div>
        </div>`;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('list-shop');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
        containerCarrinho.innerHTML += `
            <div class="info-single-checkout d-flex justify-content-between w-100">
                <div><p> Produto: `+val.nome+` | `+ val.quantidade +` unidade${val.quantidade > 1 ? 's' : ''}</p></div>
                <div><p> Valor: `+val.valor+`</p></div>
                <div class="d-none" style="clear:both"></div>
            </div>
            `;
        }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}