import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { ClienteController } from '../controllers/cliente.controller';
import { createNewClienteValidator } from '../validators/cliente.validator';

export default function defineRoute(app: Application){ 
  const controller : ClienteController= new ClienteController(); 
  const router: Router = Router(); 
    // Create a new Cliente 
  router.post('/', [checkUserAccess, ...createNewClienteValidator, validateHeaders] , controller.create);

    // Retrieve all clientes 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout clientes
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Cliente with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Cliente with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Cliente with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Cliente 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/clientes', router); 
  }; 
