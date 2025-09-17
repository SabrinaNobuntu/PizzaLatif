import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { EntregaController } from '../controllers/entrega.controller';
import { createNewEntregaValidator } from '../validators/entrega.validator';

export default function defineRoute(app: Application){ 
  const controller : EntregaController= new EntregaController(); 
  const router: Router = Router(); 
    // Create a new Entrega 
  router.post('/', [checkUserAccess, ...createNewEntregaValidator, validateHeaders] , controller.create);

    // Retrieve all entrega 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout entrega
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Entrega with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Entrega with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Entrega with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Entrega 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/entrega', router); 
  }; 
