import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { CartaoClienteController } from '../controllers/cartaoCliente.controller';
import { createNewCartaoClienteValidator } from '../validators/cartaoCliente.validator';

export default function defineRoute(app: Application){ 
  const controller : CartaoClienteController= new CartaoClienteController(); 
  const router: Router = Router(); 
    // Create a new CartaoCliente 
  router.post('/', [checkUserAccess, ...createNewCartaoClienteValidator, validateHeaders] , controller.create);

    // Retrieve all cartaoCliente 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout cartaoCliente
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single CartaoCliente with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a CartaoCliente with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a CartaoCliente with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get CartaoCliente 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/cartao-cliente', router); 
  }; 
