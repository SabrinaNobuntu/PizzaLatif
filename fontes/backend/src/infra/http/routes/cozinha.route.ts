import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { CozinhaController } from '../controllers/cozinha.controller';
import { createNewCozinhaValidator } from '../validators/cozinha.validator';

export default function defineRoute(app: Application){ 
  const controller : CozinhaController= new CozinhaController(); 
  const router: Router = Router(); 
    // Create a new Cozinha 
  router.post('/', [checkUserAccess, ...createNewCozinhaValidator, validateHeaders] , controller.create);

    // Retrieve all cozinha 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout cozinha
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Cozinha with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Cozinha with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Cozinha with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Cozinha 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/cozinha', router); 
  }; 
