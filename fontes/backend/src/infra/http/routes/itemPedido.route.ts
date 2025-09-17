import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { ItemPedidoController } from '../controllers/itemPedido.controller';
import { createNewItemPedidoValidator } from '../validators/itemPedido.validator';

export default function defineRoute(app: Application){ 
  const controller : ItemPedidoController= new ItemPedidoController(); 
  const router: Router = Router(); 
    // Create a new ItemPedido 
  router.post('/', [checkUserAccess, ...createNewItemPedidoValidator, validateHeaders] , controller.create);

    // Retrieve all itemPedido 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout itemPedido
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single ItemPedido with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a ItemPedido with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a ItemPedido with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get ItemPedido 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/itemPedido', router); 
  }; 
