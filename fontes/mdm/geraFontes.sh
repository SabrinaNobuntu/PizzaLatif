#!/bin/bash
output=$(./verificaMapa.sh)
# Conte o número de linhas na saída
line_count=$(echo "$output" | wc -l)
# Verifique se o número de linhas é maior que 3
if [ "$line_count" -gt 1 ]; then
    echo "====================================================================" 
    echo "Conteúdo do mapa:" 
    echo "$output" 
    echo "====================================================================" 
    echo "Pressione qualquer tecla para sair..." 
    read -n 1 -s   
    exit 1 
else
    echo "Mapa correto, continuando a geração." 
fi
cd ..
rm -rf frontend
rm -rf backend
git clone https://github.com/nobuntu-br/frontend
git clone https://github.com/nobuntu-br/backend
cd backend
npm i
find . -type d -name ".git" -exec rm -rf {} +
cd ..
cd frontend
find . -type d -name ".git" -exec rm -rf {} + 
ng add @angular/material
npm install bootstrap@4.1.3 jquery@3.3.1 popper.js@1.14.3 --save 
cd src/app
mkdir modules
mkdir consultas
cd ../../..
mkdir frontend/src/environments
mkdir frontend/src/assets/dicionario
mkdir frontend/src/assets/dicionario/consulta
mkdir frontend/src/assets/dicionario/dashboard
mkdir frontend/src/assets/dicionario/menu
cd frontend
npm install
cd ..
cd frontend/src/app/modules/
ng g m cartaoConsumo --routing
cd cartao-consumo
ng g c CartaoConsumoForm
ng g c ListCartaoConsumo
mkdir shared
cd ..
ng g m cliente --routing
cd cliente
ng g c ClienteForm
ng g c ListCliente
mkdir shared
cd ..
ng g m cadastroCliente --routing
cd cadastro-cliente
ng g c CadastroClienteForm
ng g c ListCadastroCliente
mkdir shared
cd ..
ng g m cartaoCliente --routing
cd cartao-cliente
ng g c CartaoClienteForm
ng g c ListCartaoCliente
mkdir shared
cd ..
ng g m categoria --routing
cd categoria
ng g c CategoriaForm
ng g c ListCategoria
mkdir shared
cd ..
ng g m cozinha --routing
cd cozinha
ng g c CozinhaForm
ng g c ListCozinha
mkdir shared
cd ..
ng g m endereco --routing
cd endereco
ng g c EnderecoForm
ng g c ListEndereco
mkdir shared
cd ..
ng g m garcon --routing
cd garcon
ng g c GarconForm
ng g c ListGarcon
mkdir shared
cd ..
ng g m itemPedido --routing
cd item-pedido
ng g c ItemPedidoForm
ng g c ListItemPedido
mkdir shared
cd ..
ng g m cardapio --routing
cd cardapio
ng g c CardapioForm
ng g c ListCardapio
mkdir shared
cd ..
ng g m opcional --routing
cd opcional
ng g c OpcionalForm
ng g c ListOpcional
mkdir shared
cd ..
ng g m pagamento --routing
cd pagamento
ng g c PagamentoForm
ng g c ListPagamento
mkdir shared
cd ..
ng g m pedido --routing
cd pedido
ng g c PedidoForm
ng g c ListPedido
mkdir shared
cd ..
ng g m produto --routing
cd produto
ng g c ProdutoForm
ng g c ListProduto
mkdir shared
cd ..
ng g m tipoPagamento --routing
cd tipo-pagamento
ng g c TipoPagamentoForm
ng g c ListTipoPagamento
mkdir shared
cd ..
ng g m entrega --routing
cd entrega
ng g c EntregaForm
ng g c ListEntrega
mkdir shared
cd ..
cd ..
cd consultas
cd ../..
cd ../..
mi g app mean indexSequelize > backend/src/infra/database/sequelize/models/index.ts
mi g app mean indexMongoose > backend/src/infra/database/mongoose/models//index.ts
mi g app mean index > backend/src/infra/http/routes/index.ts
mi g app angular appModule > frontend/src/app/app.module.ts
mi g app angular appRouting > frontend/src/app/app-routing.module.ts
mi g app angular appComponentHTML > frontend/src/app/app.component.html
mi g app angular appComponentTS > frontend/src/app/app.component.ts
mi g app angular indexHTML > frontend/src/index.html
mapperidea generate app mean validator entityName=CartaoConsumo > backend/src/infra/http/validators/cartaoConsumo.validator.ts
mapperidea generate app mean validator entityName=Cliente > backend/src/infra/http/validators/cliente.validator.ts
mapperidea generate app mean validator entityName=CadastroCliente > backend/src/infra/http/validators/cadastroCliente.validator.ts
mapperidea generate app mean validator entityName=CartaoCliente > backend/src/infra/http/validators/cartaoCliente.validator.ts
mapperidea generate app mean validator entityName=Categoria > backend/src/infra/http/validators/categoria.validator.ts
mapperidea generate app mean validator entityName=Cozinha > backend/src/infra/http/validators/cozinha.validator.ts
mapperidea generate app mean validator entityName=Endereco > backend/src/infra/http/validators/endereco.validator.ts
mapperidea generate app mean validator entityName=Garcon > backend/src/infra/http/validators/garcon.validator.ts
mapperidea generate app mean validator entityName=ItemPedido > backend/src/infra/http/validators/itemPedido.validator.ts
mapperidea generate app mean validator entityName=Cardapio > backend/src/infra/http/validators/cardapio.validator.ts
mapperidea generate app mean validator entityName=Opcional > backend/src/infra/http/validators/opcional.validator.ts
mapperidea generate app mean validator entityName=Pagamento > backend/src/infra/http/validators/pagamento.validator.ts
mapperidea generate app mean validator entityName=Pedido > backend/src/infra/http/validators/pedido.validator.ts
mapperidea generate app mean validator entityName=Produto > backend/src/infra/http/validators/produto.validator.ts
mapperidea generate app mean validator entityName=TipoPagamento > backend/src/infra/http/validators/tipoPagamento.validator.ts
mapperidea generate app mean validator entityName=Entrega > backend/src/infra/http/validators/entrega.validator.ts
mapperidea generate app mean sequelizeModel entityName=CartaoConsumo > backend/src/infra/database/sequelize/models/cartaoConsumo.model.ts
mapperidea generate app mean mongoModel entityName=CartaoConsumo > backend/src/infra/database/mongoose/models/cartaoConsumo.model.ts
mapperidea generate app mean model entityName=CartaoConsumo > backend/src/domain/entities/cartaoConsumo.model.ts
mapperidea generate app mean sequelizeModel entityName=Cliente > backend/src/infra/database/sequelize/models/cliente.model.ts
mapperidea generate app mean mongoModel entityName=Cliente > backend/src/infra/database/mongoose/models/cliente.model.ts
mapperidea generate app mean model entityName=Cliente > backend/src/domain/entities/cliente.model.ts
mapperidea generate app mean sequelizeModel entityName=CadastroCliente > backend/src/infra/database/sequelize/models/cadastroCliente.model.ts
mapperidea generate app mean mongoModel entityName=CadastroCliente > backend/src/infra/database/mongoose/models/cadastroCliente.model.ts
mapperidea generate app mean model entityName=CadastroCliente > backend/src/domain/entities/cadastroCliente.model.ts
mapperidea generate app mean sequelizeModel entityName=CartaoCliente > backend/src/infra/database/sequelize/models/cartaoCliente.model.ts
mapperidea generate app mean mongoModel entityName=CartaoCliente > backend/src/infra/database/mongoose/models/cartaoCliente.model.ts
mapperidea generate app mean model entityName=CartaoCliente > backend/src/domain/entities/cartaoCliente.model.ts
mapperidea generate app mean sequelizeModel entityName=Categoria > backend/src/infra/database/sequelize/models/categoria.model.ts
mapperidea generate app mean mongoModel entityName=Categoria > backend/src/infra/database/mongoose/models/categoria.model.ts
mapperidea generate app mean model entityName=Categoria > backend/src/domain/entities/categoria.model.ts
mapperidea generate app mean sequelizeModel entityName=Cozinha > backend/src/infra/database/sequelize/models/cozinha.model.ts
mapperidea generate app mean mongoModel entityName=Cozinha > backend/src/infra/database/mongoose/models/cozinha.model.ts
mapperidea generate app mean model entityName=Cozinha > backend/src/domain/entities/cozinha.model.ts
mapperidea generate app mean sequelizeModel entityName=Endereco > backend/src/infra/database/sequelize/models/endereco.model.ts
mapperidea generate app mean mongoModel entityName=Endereco > backend/src/infra/database/mongoose/models/endereco.model.ts
mapperidea generate app mean model entityName=Endereco > backend/src/domain/entities/endereco.model.ts
mapperidea generate app mean sequelizeModel entityName=Garcon > backend/src/infra/database/sequelize/models/garcon.model.ts
mapperidea generate app mean mongoModel entityName=Garcon > backend/src/infra/database/mongoose/models/garcon.model.ts
mapperidea generate app mean model entityName=Garcon > backend/src/domain/entities/garcon.model.ts
mapperidea generate app mean sequelizeModel entityName=ItemPedido > backend/src/infra/database/sequelize/models/itemPedido.model.ts
mapperidea generate app mean mongoModel entityName=ItemPedido > backend/src/infra/database/mongoose/models/itemPedido.model.ts
mapperidea generate app mean model entityName=ItemPedido > backend/src/domain/entities/itemPedido.model.ts
mapperidea generate app mean sequelizeModel entityName=Cardapio > backend/src/infra/database/sequelize/models/cardapio.model.ts
mapperidea generate app mean mongoModel entityName=Cardapio > backend/src/infra/database/mongoose/models/cardapio.model.ts
mapperidea generate app mean model entityName=Cardapio > backend/src/domain/entities/cardapio.model.ts
mapperidea generate app mean sequelizeModel entityName=Opcional > backend/src/infra/database/sequelize/models/opcional.model.ts
mapperidea generate app mean mongoModel entityName=Opcional > backend/src/infra/database/mongoose/models/opcional.model.ts
mapperidea generate app mean model entityName=Opcional > backend/src/domain/entities/opcional.model.ts
mapperidea generate app mean sequelizeModel entityName=Pagamento > backend/src/infra/database/sequelize/models/pagamento.model.ts
mapperidea generate app mean mongoModel entityName=Pagamento > backend/src/infra/database/mongoose/models/pagamento.model.ts
mapperidea generate app mean model entityName=Pagamento > backend/src/domain/entities/pagamento.model.ts
mapperidea generate app mean sequelizeModel entityName=Pedido > backend/src/infra/database/sequelize/models/pedido.model.ts
mapperidea generate app mean mongoModel entityName=Pedido > backend/src/infra/database/mongoose/models/pedido.model.ts
mapperidea generate app mean model entityName=Pedido > backend/src/domain/entities/pedido.model.ts
mapperidea generate app mean sequelizeModel entityName=Produto > backend/src/infra/database/sequelize/models/produto.model.ts
mapperidea generate app mean mongoModel entityName=Produto > backend/src/infra/database/mongoose/models/produto.model.ts
mapperidea generate app mean model entityName=Produto > backend/src/domain/entities/produto.model.ts
mapperidea generate app mean sequelizeModel entityName=TipoPagamento > backend/src/infra/database/sequelize/models/tipoPagamento.model.ts
mapperidea generate app mean mongoModel entityName=TipoPagamento > backend/src/infra/database/mongoose/models/tipoPagamento.model.ts
mapperidea generate app mean model entityName=TipoPagamento > backend/src/domain/entities/tipoPagamento.model.ts
mapperidea generate app mean sequelizeModel entityName=Entrega > backend/src/infra/database/sequelize/models/entrega.model.ts
mapperidea generate app mean mongoModel entityName=Entrega > backend/src/infra/database/mongoose/models/entrega.model.ts
mapperidea generate app mean model entityName=Entrega > backend/src/domain/entities/entrega.model.ts
mi g app json jsonClass entityName=CartaoConsumo > frontend/src/assets/dicionario/cartaoConsumo.json
mi g app json jsonClass entityName=Cliente > frontend/src/assets/dicionario/cliente.json
mi g app json jsonClass entityName=CadastroCliente > frontend/src/assets/dicionario/cadastroCliente.json
mi g app json jsonClass entityName=CartaoCliente > frontend/src/assets/dicionario/cartaoCliente.json
mi g app json jsonClass entityName=Categoria > frontend/src/assets/dicionario/categoria.json
mi g app json jsonClass entityName=Cozinha > frontend/src/assets/dicionario/cozinha.json
mi g app json jsonClass entityName=Endereco > frontend/src/assets/dicionario/endereco.json
mi g app json jsonClass entityName=Garcon > frontend/src/assets/dicionario/garcon.json
mi g app json jsonClass entityName=ItemPedido > frontend/src/assets/dicionario/itemPedido.json
mi g app json jsonClass entityName=Cardapio > frontend/src/assets/dicionario/cardapio.json
mi g app json jsonClass entityName=Opcional > frontend/src/assets/dicionario/opcional.json
mi g app json jsonClass entityName=Pagamento > frontend/src/assets/dicionario/pagamento.json
mi g app json jsonClass entityName=Pedido > frontend/src/assets/dicionario/pedido.json
mi g app json jsonClass entityName=Produto > frontend/src/assets/dicionario/produto.json
mi g app json jsonClass entityName=TipoPagamento > frontend/src/assets/dicionario/tipoPagamento.json
mi g app json jsonClass entityName=Entrega > frontend/src/assets/dicionario/entrega.json
mapperidea generate app mean repository entityName=CartaoConsumo > backend/src/domain/repositories/cartaoConsumo.repository.ts
mapperidea generate app mean repository entityName=Cliente > backend/src/domain/repositories/cliente.repository.ts
mapperidea generate app mean repository entityName=CadastroCliente > backend/src/domain/repositories/cadastroCliente.repository.ts
mapperidea generate app mean repository entityName=CartaoCliente > backend/src/domain/repositories/cartaoCliente.repository.ts
mapperidea generate app mean repository entityName=Categoria > backend/src/domain/repositories/categoria.repository.ts
mapperidea generate app mean repository entityName=Cozinha > backend/src/domain/repositories/cozinha.repository.ts
mapperidea generate app mean repository entityName=Endereco > backend/src/domain/repositories/endereco.repository.ts
mapperidea generate app mean repository entityName=Garcon > backend/src/domain/repositories/garcon.repository.ts
mapperidea generate app mean repository entityName=ItemPedido > backend/src/domain/repositories/itemPedido.repository.ts
mapperidea generate app mean repository entityName=Cardapio > backend/src/domain/repositories/cardapio.repository.ts
mapperidea generate app mean repository entityName=Opcional > backend/src/domain/repositories/opcional.repository.ts
mapperidea generate app mean repository entityName=Pagamento > backend/src/domain/repositories/pagamento.repository.ts
mapperidea generate app mean repository entityName=Pedido > backend/src/domain/repositories/pedido.repository.ts
mapperidea generate app mean repository entityName=Produto > backend/src/domain/repositories/produto.repository.ts
mapperidea generate app mean repository entityName=TipoPagamento > backend/src/domain/repositories/tipoPagamento.repository.ts
mapperidea generate app mean repository entityName=Entrega > backend/src/domain/repositories/entrega.repository.ts
mapperidea generate app mean apiController entityName=CartaoConsumo > backend/src/infra/http/controllers/cartaoConsumo.controller.ts
mapperidea generate app mean apiController entityName=Cliente > backend/src/infra/http/controllers/cliente.controller.ts
mapperidea generate app mean apiController entityName=CadastroCliente > backend/src/infra/http/controllers/cadastroCliente.controller.ts
mapperidea generate app mean apiController entityName=CartaoCliente > backend/src/infra/http/controllers/cartaoCliente.controller.ts
mapperidea generate app mean apiController entityName=Categoria > backend/src/infra/http/controllers/categoria.controller.ts
mapperidea generate app mean apiController entityName=Cozinha > backend/src/infra/http/controllers/cozinha.controller.ts
mapperidea generate app mean apiController entityName=Endereco > backend/src/infra/http/controllers/endereco.controller.ts
mapperidea generate app mean apiController entityName=Garcon > backend/src/infra/http/controllers/garcon.controller.ts
mapperidea generate app mean apiController entityName=ItemPedido > backend/src/infra/http/controllers/itemPedido.controller.ts
mapperidea generate app mean apiController entityName=Cardapio > backend/src/infra/http/controllers/cardapio.controller.ts
mapperidea generate app mean apiController entityName=Opcional > backend/src/infra/http/controllers/opcional.controller.ts
mapperidea generate app mean apiController entityName=Pagamento > backend/src/infra/http/controllers/pagamento.controller.ts
mapperidea generate app mean apiController entityName=Pedido > backend/src/infra/http/controllers/pedido.controller.ts
mapperidea generate app mean apiController entityName=Produto > backend/src/infra/http/controllers/produto.controller.ts
mapperidea generate app mean apiController entityName=TipoPagamento > backend/src/infra/http/controllers/tipoPagamento.controller.ts
mapperidea generate app mean apiController entityName=Entrega > backend/src/infra/http/controllers/entrega.controller.ts
mapperidea generate app angular model entityName=CartaoConsumo > frontend/src/app/modules/cartao-consumo/shared/cartao-consumo.model.ts
mapperidea generate app angular model entityName=Cliente > frontend/src/app/modules/cliente/shared/cliente.model.ts
mapperidea generate app angular model entityName=CadastroCliente > frontend/src/app/modules/cadastro-cliente/shared/cadastro-cliente.model.ts
mapperidea generate app angular model entityName=CartaoCliente > frontend/src/app/modules/cartao-cliente/shared/cartao-cliente.model.ts
mapperidea generate app angular model entityName=Categoria > frontend/src/app/modules/categoria/shared/categoria.model.ts
mapperidea generate app angular model entityName=Cozinha > frontend/src/app/modules/cozinha/shared/cozinha.model.ts
mapperidea generate app angular model entityName=Endereco > frontend/src/app/modules/endereco/shared/endereco.model.ts
mapperidea generate app angular model entityName=Garcon > frontend/src/app/modules/garcon/shared/garcon.model.ts
mapperidea generate app angular model entityName=ItemPedido > frontend/src/app/modules/item-pedido/shared/item-pedido.model.ts
mapperidea generate app angular model entityName=Cardapio > frontend/src/app/modules/cardapio/shared/cardapio.model.ts
mapperidea generate app angular model entityName=Opcional > frontend/src/app/modules/opcional/shared/opcional.model.ts
mapperidea generate app angular model entityName=Pagamento > frontend/src/app/modules/pagamento/shared/pagamento.model.ts
mapperidea generate app angular model entityName=Pedido > frontend/src/app/modules/pedido/shared/pedido.model.ts
mapperidea generate app angular model entityName=Produto > frontend/src/app/modules/produto/shared/produto.model.ts
mapperidea generate app angular model entityName=TipoPagamento > frontend/src/app/modules/tipo-pagamento/shared/tipo-pagamento.model.ts
mapperidea generate app angular model entityName=Entrega > frontend/src/app/modules/entrega/shared/entrega.model.ts
mi g app angular dataService entityName=CartaoConsumo > frontend/src/app/modules/cartao-consumo/shared/cartao-consumo.service.ts
mi g app angular dataService entityName=Cliente > frontend/src/app/modules/cliente/shared/cliente.service.ts
mi g app angular dataService entityName=CadastroCliente > frontend/src/app/modules/cadastro-cliente/shared/cadastro-cliente.service.ts
mi g app angular dataService entityName=CartaoCliente > frontend/src/app/modules/cartao-cliente/shared/cartao-cliente.service.ts
mi g app angular dataService entityName=Categoria > frontend/src/app/modules/categoria/shared/categoria.service.ts
mi g app angular dataService entityName=Cozinha > frontend/src/app/modules/cozinha/shared/cozinha.service.ts
mi g app angular dataService entityName=Endereco > frontend/src/app/modules/endereco/shared/endereco.service.ts
mi g app angular dataService entityName=Garcon > frontend/src/app/modules/garcon/shared/garcon.service.ts
mi g app angular dataService entityName=ItemPedido > frontend/src/app/modules/item-pedido/shared/item-pedido.service.ts
mi g app angular dataService entityName=Cardapio > frontend/src/app/modules/cardapio/shared/cardapio.service.ts
mi g app angular dataService entityName=Opcional > frontend/src/app/modules/opcional/shared/opcional.service.ts
mi g app angular dataService entityName=Pagamento > frontend/src/app/modules/pagamento/shared/pagamento.service.ts
mi g app angular dataService entityName=Pedido > frontend/src/app/modules/pedido/shared/pedido.service.ts
mi g app angular dataService entityName=Produto > frontend/src/app/modules/produto/shared/produto.service.ts
mi g app angular dataService entityName=TipoPagamento > frontend/src/app/modules/tipo-pagamento/shared/tipo-pagamento.service.ts
mi g app angular dataService entityName=Entrega > frontend/src/app/modules/entrega/shared/entrega.service.ts
mi g app angular appRoutingChild entityName=CartaoConsumo > frontend/src/app/modules/cartao-consumo/cartao-consumo-routing.module.ts
mi g app angular appRoutingChild entityName=Cliente > frontend/src/app/modules/cliente/cliente-routing.module.ts
mi g app angular appRoutingChild entityName=CadastroCliente > frontend/src/app/modules/cadastro-cliente/cadastro-cliente-routing.module.ts
mi g app angular appRoutingChild entityName=CartaoCliente > frontend/src/app/modules/cartao-cliente/cartao-cliente-routing.module.ts
mi g app angular appRoutingChild entityName=Categoria > frontend/src/app/modules/categoria/categoria-routing.module.ts
mi g app angular appRoutingChild entityName=Cozinha > frontend/src/app/modules/cozinha/cozinha-routing.module.ts
mi g app angular appRoutingChild entityName=Endereco > frontend/src/app/modules/endereco/endereco-routing.module.ts
mi g app angular appRoutingChild entityName=Garcon > frontend/src/app/modules/garcon/garcon-routing.module.ts
mi g app angular appRoutingChild entityName=ItemPedido > frontend/src/app/modules/item-pedido/item-pedido-routing.module.ts
mi g app angular appRoutingChild entityName=Cardapio > frontend/src/app/modules/cardapio/cardapio-routing.module.ts
mi g app angular appRoutingChild entityName=Opcional > frontend/src/app/modules/opcional/opcional-routing.module.ts
mi g app angular appRoutingChild entityName=Pagamento > frontend/src/app/modules/pagamento/pagamento-routing.module.ts
mi g app angular appRoutingChild entityName=Pedido > frontend/src/app/modules/pedido/pedido-routing.module.ts
mi g app angular appRoutingChild entityName=Produto > frontend/src/app/modules/produto/produto-routing.module.ts
mi g app angular appRoutingChild entityName=TipoPagamento > frontend/src/app/modules/tipo-pagamento/tipo-pagamento-routing.module.ts
mi g app angular appRoutingChild entityName=Entrega > frontend/src/app/modules/entrega/entrega-routing.module.ts
mi g app mean routes entityName=CartaoConsumo > backend/src/infra/http/routes/cartaoConsumo.route.ts
mi g app mean routes entityName=Cliente > backend/src/infra/http/routes/cliente.route.ts
mi g app mean routes entityName=CadastroCliente > backend/src/infra/http/routes/cadastroCliente.route.ts
mi g app mean routes entityName=CartaoCliente > backend/src/infra/http/routes/cartaoCliente.route.ts
mi g app mean routes entityName=Categoria > backend/src/infra/http/routes/categoria.route.ts
mi g app mean routes entityName=Cozinha > backend/src/infra/http/routes/cozinha.route.ts
mi g app mean routes entityName=Endereco > backend/src/infra/http/routes/endereco.route.ts
mi g app mean routes entityName=Garcon > backend/src/infra/http/routes/garcon.route.ts
mi g app mean routes entityName=ItemPedido > backend/src/infra/http/routes/itemPedido.route.ts
mi g app mean routes entityName=Cardapio > backend/src/infra/http/routes/cardapio.route.ts
mi g app mean routes entityName=Opcional > backend/src/infra/http/routes/opcional.route.ts
mi g app mean routes entityName=Pagamento > backend/src/infra/http/routes/pagamento.route.ts
mi g app mean routes entityName=Pedido > backend/src/infra/http/routes/pedido.route.ts
mi g app mean routes entityName=Produto > backend/src/infra/http/routes/produto.route.ts
mi g app mean routes entityName=TipoPagamento > backend/src/infra/http/routes/tipoPagamento.route.ts
mi g app mean routes entityName=Entrega > backend/src/infra/http/routes/entrega.route.ts
mi g app angular listComponentHTML listName=CartaoConsumo >  frontend/src/app/modules/cartao-consumo/list-cartao-consumo/list-cartao-consumo.component.html
mi g app angular listComponentTS listName=CartaoConsumo >  frontend/src/app/modules/cartao-consumo/list-cartao-consumo/list-cartao-consumo.component.ts
mi g app angular detailsComponentHTML editorName=CartaoConsumo >  frontend/src/app/modules/cartao-consumo/cartao-consumo-form/cartao-consumo-form.component.html
mi g app angular detailsComponentTS editorName=CartaoConsumo >  frontend/src/app/modules/cartao-consumo/cartao-consumo-form/cartao-consumo-form.component.ts
mi g app angular listComponentHTML listName=Cliente >  frontend/src/app/modules/cliente/list-cliente/list-cliente.component.html
mi g app angular listComponentTS listName=Cliente >  frontend/src/app/modules/cliente/list-cliente/list-cliente.component.ts
mi g app angular detailsComponentHTML editorName=Cliente >  frontend/src/app/modules/cliente/cliente-form/cliente-form.component.html
mi g app angular detailsComponentTS editorName=Cliente >  frontend/src/app/modules/cliente/cliente-form/cliente-form.component.ts
mi g app angular listComponentHTML listName=CadastroCliente >  frontend/src/app/modules/cadastro-cliente/list-cadastro-cliente/list-cadastro-cliente.component.html
mi g app angular listComponentTS listName=CadastroCliente >  frontend/src/app/modules/cadastro-cliente/list-cadastro-cliente/list-cadastro-cliente.component.ts
mi g app angular detailsComponentHTML editorName=CadastroCliente >  frontend/src/app/modules/cadastro-cliente/cadastro-cliente-form/cadastro-cliente-form.component.html
mi g app angular detailsComponentTS editorName=CadastroCliente >  frontend/src/app/modules/cadastro-cliente/cadastro-cliente-form/cadastro-cliente-form.component.ts
mi g app angular listComponentHTML listName=CartaoCliente >  frontend/src/app/modules/cartao-cliente/list-cartao-cliente/list-cartao-cliente.component.html
mi g app angular listComponentTS listName=CartaoCliente >  frontend/src/app/modules/cartao-cliente/list-cartao-cliente/list-cartao-cliente.component.ts
mi g app angular detailsComponentHTML editorName=CartaoCliente >  frontend/src/app/modules/cartao-cliente/cartao-cliente-form/cartao-cliente-form.component.html
mi g app angular detailsComponentTS editorName=CartaoCliente >  frontend/src/app/modules/cartao-cliente/cartao-cliente-form/cartao-cliente-form.component.ts
mi g app angular listComponentHTML listName=Categoria >  frontend/src/app/modules/categoria/list-categoria/list-categoria.component.html
mi g app angular listComponentTS listName=Categoria >  frontend/src/app/modules/categoria/list-categoria/list-categoria.component.ts
mi g app angular detailsComponentHTML editorName=Categoria >  frontend/src/app/modules/categoria/categoria-form/categoria-form.component.html
mi g app angular detailsComponentTS editorName=Categoria >  frontend/src/app/modules/categoria/categoria-form/categoria-form.component.ts
mi g app angular listComponentHTML listName=Cozinha >  frontend/src/app/modules/cozinha/list-cozinha/list-cozinha.component.html
mi g app angular listComponentTS listName=Cozinha >  frontend/src/app/modules/cozinha/list-cozinha/list-cozinha.component.ts
mi g app angular detailsComponentHTML editorName=Cozinha >  frontend/src/app/modules/cozinha/cozinha-form/cozinha-form.component.html
mi g app angular detailsComponentTS editorName=Cozinha >  frontend/src/app/modules/cozinha/cozinha-form/cozinha-form.component.ts
mi g app angular listComponentHTML listName=Endereco >  frontend/src/app/modules/endereco/list-endereco/list-endereco.component.html
mi g app angular listComponentTS listName=Endereco >  frontend/src/app/modules/endereco/list-endereco/list-endereco.component.ts
mi g app angular detailsComponentHTML editorName=Endereco >  frontend/src/app/modules/endereco/endereco-form/endereco-form.component.html
mi g app angular detailsComponentTS editorName=Endereco >  frontend/src/app/modules/endereco/endereco-form/endereco-form.component.ts
mi g app angular listComponentHTML listName=Garcon >  frontend/src/app/modules/garcon/list-garcon/list-garcon.component.html
mi g app angular listComponentTS listName=Garcon >  frontend/src/app/modules/garcon/list-garcon/list-garcon.component.ts
mi g app angular detailsComponentHTML editorName=Garcon >  frontend/src/app/modules/garcon/garcon-form/garcon-form.component.html
mi g app angular detailsComponentTS editorName=Garcon >  frontend/src/app/modules/garcon/garcon-form/garcon-form.component.ts
mi g app angular listComponentHTML listName=ItemPedido >  frontend/src/app/modules/item-pedido/list-item-pedido/list-item-pedido.component.html
mi g app angular listComponentTS listName=ItemPedido >  frontend/src/app/modules/item-pedido/list-item-pedido/list-item-pedido.component.ts
mi g app angular detailsComponentHTML editorName=ItemPedido >  frontend/src/app/modules/item-pedido/item-pedido-form/item-pedido-form.component.html
mi g app angular detailsComponentTS editorName=ItemPedido >  frontend/src/app/modules/item-pedido/item-pedido-form/item-pedido-form.component.ts
mi g app angular listComponentHTML listName=Cardapio >  frontend/src/app/modules/cardapio/list-cardapio/list-cardapio.component.html
mi g app angular listComponentTS listName=Cardapio >  frontend/src/app/modules/cardapio/list-cardapio/list-cardapio.component.ts
mi g app angular detailsComponentHTML editorName=Cardapio >  frontend/src/app/modules/cardapio/cardapio-form/cardapio-form.component.html
mi g app angular detailsComponentTS editorName=Cardapio >  frontend/src/app/modules/cardapio/cardapio-form/cardapio-form.component.ts
mi g app angular listComponentHTML listName=Opcional >  frontend/src/app/modules/opcional/list-opcional/list-opcional.component.html
mi g app angular listComponentTS listName=Opcional >  frontend/src/app/modules/opcional/list-opcional/list-opcional.component.ts
mi g app angular detailsComponentHTML editorName=Opcional >  frontend/src/app/modules/opcional/opcional-form/opcional-form.component.html
mi g app angular detailsComponentTS editorName=Opcional >  frontend/src/app/modules/opcional/opcional-form/opcional-form.component.ts
mi g app angular listComponentHTML listName=Pagamento >  frontend/src/app/modules/pagamento/list-pagamento/list-pagamento.component.html
mi g app angular listComponentTS listName=Pagamento >  frontend/src/app/modules/pagamento/list-pagamento/list-pagamento.component.ts
mi g app angular detailsComponentHTML editorName=Pagamento >  frontend/src/app/modules/pagamento/pagamento-form/pagamento-form.component.html
mi g app angular detailsComponentTS editorName=Pagamento >  frontend/src/app/modules/pagamento/pagamento-form/pagamento-form.component.ts
mi g app angular listComponentHTML listName=Pedido >  frontend/src/app/modules/pedido/list-pedido/list-pedido.component.html
mi g app angular listComponentTS listName=Pedido >  frontend/src/app/modules/pedido/list-pedido/list-pedido.component.ts
mi g app angular detailsComponentHTML editorName=Pedido >  frontend/src/app/modules/pedido/pedido-form/pedido-form.component.html
mi g app angular detailsComponentTS editorName=Pedido >  frontend/src/app/modules/pedido/pedido-form/pedido-form.component.ts
mi g app angular listComponentHTML listName=Produto >  frontend/src/app/modules/produto/list-produto/list-produto.component.html
mi g app angular listComponentTS listName=Produto >  frontend/src/app/modules/produto/list-produto/list-produto.component.ts
mi g app angular detailsComponentHTML editorName=Produto >  frontend/src/app/modules/produto/produto-form/produto-form.component.html
mi g app angular detailsComponentTS editorName=Produto >  frontend/src/app/modules/produto/produto-form/produto-form.component.ts
mi g app angular listComponentHTML listName=TipoPagamento >  frontend/src/app/modules/tipo-pagamento/list-tipo-pagamento/list-tipo-pagamento.component.html
mi g app angular listComponentTS listName=TipoPagamento >  frontend/src/app/modules/tipo-pagamento/list-tipo-pagamento/list-tipo-pagamento.component.ts
mi g app angular detailsComponentHTML editorName=TipoPagamento >  frontend/src/app/modules/tipo-pagamento/tipo-pagamento-form/tipo-pagamento-form.component.html
mi g app angular detailsComponentTS editorName=TipoPagamento >  frontend/src/app/modules/tipo-pagamento/tipo-pagamento-form/tipo-pagamento-form.component.ts
mi g app angular listComponentHTML listName=Entrega >  frontend/src/app/modules/entrega/list-entrega/list-entrega.component.html
mi g app angular listComponentTS listName=Entrega >  frontend/src/app/modules/entrega/list-entrega/list-entrega.component.ts
mi g app angular detailsComponentHTML editorName=Entrega >  frontend/src/app/modules/entrega/entrega-form/entrega-form.component.html
mi g app angular detailsComponentTS editorName=Entrega >  frontend/src/app/modules/entrega/entrega-form/entrega-form.component.ts
mi g app json jsonClass entityName=CartaoConsumo > frontend/src/assets/dicionario/cartaoConsumo.json
mi g app json jsonClass entityName=Cliente > frontend/src/assets/dicionario/cliente.json
mi g app json jsonClass entityName=CadastroCliente > frontend/src/assets/dicionario/cadastroCliente.json
mi g app json jsonClass entityName=CartaoCliente > frontend/src/assets/dicionario/cartaoCliente.json
mi g app json jsonClass entityName=Categoria > frontend/src/assets/dicionario/categoria.json
mi g app json jsonClass entityName=Cozinha > frontend/src/assets/dicionario/cozinha.json
mi g app json jsonClass entityName=Endereco > frontend/src/assets/dicionario/endereco.json
mi g app json jsonClass entityName=Garcon > frontend/src/assets/dicionario/garcon.json
mi g app json jsonClass entityName=ItemPedido > frontend/src/assets/dicionario/itemPedido.json
mi g app json jsonClass entityName=Cardapio > frontend/src/assets/dicionario/cardapio.json
mi g app json jsonClass entityName=Opcional > frontend/src/assets/dicionario/opcional.json
mi g app json jsonClass entityName=Pagamento > frontend/src/assets/dicionario/pagamento.json
mi g app json jsonClass entityName=Pedido > frontend/src/assets/dicionario/pedido.json
mi g app json jsonClass entityName=Produto > frontend/src/assets/dicionario/produto.json
mi g app json jsonClass entityName=TipoPagamento > frontend/src/assets/dicionario/tipoPagamento.json
mi g app json jsonClass entityName=Entrega > frontend/src/assets/dicionario/entrega.json
mi g app json jsonTransloco translate=en > frontend/src/assets/i18n/en.json
mi g app json jsonTransloco translate=pt > frontend/src/assets/i18n/pt.json
mi g app angular environment > frontend/src/environments/environment.ts
mi g app angular environment > frontend/src/environments/environment.development.ts
mi g app mean envBackend > backend/.env
mi g app mean routeConsultas > backend/src/infra/http/routes/consulta.route.ts
mi g app mean controllerConsultas > backend/src/infra/http/controllers/consulta.controller.ts
mi g app mean serviceConsultas > backend/src/domain/services/consulta.service.ts
mi g app mean repositoryConsultas > backend/src/domain/repositories/consulta.repository.ts
mi g app mean routeRelatorios > backend/src/infra/http/routes/dashboard.route.ts
mi g app mean controllerRelatorios > backend/src/infra/http/controllers/dashboard.controller.ts
mi g app json jsonMenu menuName=home > frontend/src/assets/dicionario/menu/home.json
mi g app json jsonMenu menuName=home > backend/src/resources/menu/home.json
