
        const items = [
            {
                id:0,
                nome: 'tenis1',
                img: '../img/nike1.jpg',
                quantidade: 0
            },
            {
                id:1,
                nome: 'tenis2',
                img: '../img/nike2.jpg',
                quantidade: 0
            },
            {
                id:3,
                nome: 'chine1',
                img: '../img/chine1.jpg',
                quantidade: 0
            },
            {
                id:4,
                nome: 'chine2',
                img: '../img/chine2.jpg',
                quantidade: 0
            },
            {
                id:5,
                nome: 'sapat1',
                img: '../img/sapat1.jpg',
                quantidade: 0
            },
            {
                id:6,
                nome: 'sapat2',
                img: '../img/sapat2.jpg',
                quantidade: 0
            },
        ]
        inicializarLoja = () => {
            var containerProdutos = document.getElementById('Produtos');
            items.map((val)=>{
                containerProdutos.innerHTML += ` 
                <div class="produtoss">
                <img src="`+val.img+`"/>
                <p>`+val.nome+`</p>
                <a key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
                </div>
                `;
            })
        }
        inicializarLoja();

        atualizarcarrinho = () => {
            var containerCarrinho = document.getElementById('Carrinho');
            containerCarrinho.innerHTML = "";
            items.map((val)=>{
                if(val.quantidade > 0){
                containerCarrinho.innerHTML += ` 
                <p>` +val.nome+`  | quantidade: `+val.quantidade+`</p>
                <hr>
                `;
                }
            })
        }
 
        var links = document.getElementsByTagName('a'); 
        for(var     i=0;i< links.length;i++){
                links[i].addEventListener("click",function(){  
                    let key = this.getAttribute('key');
                    items[key].quantidade++;
                    atualizarcarrinho();
                    return false;
                    
                })
        
        }