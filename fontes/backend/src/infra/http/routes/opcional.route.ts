import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { OpcionalController } from '../controllers/opcional.controller';
import { createNewOpcionalValidator } from '../validators/opcional.validator';

export default function defineRoute(app: Application){ 
  const controller : OpcionalController= new OpcionalController(); 
  const router: Router = Router(); 
    // Create a new Opcional 
  router.post('/', [checkUserAccess, ...createNewOpcionalValidator, validateHeaders] , controller.create);

    // Retrieve all opcional 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout opcional
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Opcional with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Opcional with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Opcional with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Opcional 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/opcional', router); 
  }; 
