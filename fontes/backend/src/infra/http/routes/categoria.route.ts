import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { CategoriaController } from '../controllers/categoria.controller';
import { createNewCategoriaValidator } from '../validators/categoria.validator';

export default function defineRoute(app: Application){ 
  const controller : CategoriaController= new CategoriaController(); 
  const router: Router = Router(); 
    // Create a new Categoria 
  router.post('/', [checkUserAccess, ...createNewCategoriaValidator, validateHeaders] , controller.create);

    // Retrieve all categoria 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout categoria
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Categoria with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Categoria with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Categoria with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Categoria 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/categoria', router); 
  }; 
