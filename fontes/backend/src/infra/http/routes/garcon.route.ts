import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { GarconController } from '../controllers/garcon.controller';
import { createNewGarconValidator } from '../validators/garcon.validator';

export default function defineRoute(app: Application){ 
  const controller : GarconController= new GarconController(); 
  const router: Router = Router(); 
    // Create a new Garcon 
  router.post('/', [checkUserAccess, ...createNewGarconValidator, validateHeaders] , controller.create);

    // Retrieve all garcon 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout garcon
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Garcon with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Garcon with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Garcon with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Garcon 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/garcon', router); 
  }; 
