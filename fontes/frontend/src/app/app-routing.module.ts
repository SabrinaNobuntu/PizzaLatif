import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { EditProfileComponent } from './shared/components/edit-profile/edit-profile.component';
import { DefaultDashboardComponent } from './shared/components/default-dashboard/default-dashboard.component';


export const appRoutes: Route[] = [ 

    // Auth routes for guests 
    { path: '', pathMatch: 'full', loadChildren: () => import('app/core/pages/home-page/home-page.module').then(m => m.HomePageModule) }, 
    { path: 'signin', loadChildren: () => import('app/core/pages/signin/signin.module').then(m => m.SigninModule) }, 
    { path: 'signup', loadChildren: () => import('app/core/pages/signup/signup.module').then(m => m.SignupModule) }, 
    { path: 'resetPassword', loadChildren: () => import('app/core/pages/reset-password/reset-password.module').then(m => m.ResetPasswordModule) }, 
    { path: 'error-404', loadChildren: () => import('app/core/pages/error/error-404/error-404.module').then(m => m.Error404Module) }, 
    { path: 'error-500', loadChildren: () => import('app/core/pages/error/error-500/error-500.module').then(m => m.Error500Module) }, 
    { path: 'callback',  loadChildren: () => import('app/core/pages/callback/callback.module').then(m => m.CallbackModule) }, 
    { path: 'home', canMatch: [AuthGuard], component: SideNavComponent }, 

    { 
        path: 'tenant', 
        canMatch: [AuthGuard], 
        component: SideNavComponent, 
        children: [ 
            { path: '', loadChildren: () => import('app/core/tenant/tenant.module').then(m => m.TenantModule) } 
        ]    
    }, 

    // Admin routes 
    { 
        path: '', 
        canMatch: [AuthGuard], 
        component: SideNavComponent, 
        children: [ 
    { path: 'dashboard/:id', component: DefaultDashboardComponent }, 
	{ path: '', loadChildren: () => import('./modules/cartao-consumo/cartao-consumo.module' ).then(m => m.CartaoConsumoModule) },
	{ path: '', loadChildren: () => import('./modules/cliente/cliente.module' ).then(m => m.ClienteModule) },
	{ path: '', loadChildren: () => import('./modules/cadastro-cliente/cadastro-cliente.module' ).then(m => m.CadastroClienteModule) },
	{ path: '', loadChildren: () => import('./modules/cartao-cliente/cartao-cliente.module' ).then(m => m.CartaoClienteModule) },
	{ path: '', loadChildren: () => import('./modules/categoria/categoria.module' ).then(m => m.CategoriaModule) },
	{ path: '', loadChildren: () => import('./modules/cozinha/cozinha.module' ).then(m => m.CozinhaModule) },
	{ path: '', loadChildren: () => import('./modules/endereco/endereco.module' ).then(m => m.EnderecoModule) },
	{ path: '', loadChildren: () => import('./modules/garcon/garcon.module' ).then(m => m.GarconModule) },
	{ path: '', loadChildren: () => import('./modules/item-pedido/item-pedido.module' ).then(m => m.ItemPedidoModule) },
	{ path: '', loadChildren: () => import('./modules/cardapio/cardapio.module' ).then(m => m.CardapioModule) },
	{ path: '', loadChildren: () => import('./modules/opcional/opcional.module' ).then(m => m.OpcionalModule) },
	{ path: '', loadChildren: () => import('./modules/pagamento/pagamento.module' ).then(m => m.PagamentoModule) },
	{ path: '', loadChildren: () => import('./modules/pedido/pedido.module' ).then(m => m.PedidoModule) },
	{ path: '', loadChildren: () => import('./modules/produto/produto.module' ).then(m => m.ProdutoModule) },
	{ path: '', loadChildren: () => import('./modules/tipo-pagamento/tipo-pagamento.module' ).then(m => m.TipoPagamentoModule) },
	{ path: '', loadChildren: () => import('./modules/entrega/entrega.module' ).then(m => m.EntregaModule) },
          {path: 'editProfile', pathMatch: 'full', component: EditProfileComponent},  
        ] 
    }, 
    { path: '**', loadChildren: () => import('app/core/pages/error/error-404/error-404.module').then(m => m.Error404Module) }
]; 
