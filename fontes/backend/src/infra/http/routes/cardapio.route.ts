import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { CardapioController } from '../controllers/cardapio.controller';
import { createNewCardapioValidator } from '../validators/cardapio.validator';

export default function defineRoute(app: Application){ 
  const controller : CardapioController= new CardapioController(); 
  const router: Router = Router(); 
    // Create a new Cardapio 
  router.post('/', [checkUserAccess, ...createNewCardapioValidator, validateHeaders] , controller.create);

    // Retrieve all cardapio 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout cardapio
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Cardapio with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Cardapio with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Cardapio with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Cardapio 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/cardapio', router); 
  }; 
