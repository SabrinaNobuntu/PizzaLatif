import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { PedidoController } from '../controllers/pedido.controller';
import { createNewPedidoValidator } from '../validators/pedido.validator';

export default function defineRoute(app: Application){ 
  const controller : PedidoController= new PedidoController(); 
  const router: Router = Router(); 
    // Create a new Pedido 
  router.post('/', [checkUserAccess, ...createNewPedidoValidator, validateHeaders] , controller.create);

    // Retrieve all pedido 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout pedido
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Pedido with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Pedido with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Pedido with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Pedido 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/pedido', router); 
  }; 
