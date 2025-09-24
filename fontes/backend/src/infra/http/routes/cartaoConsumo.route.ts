import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { CartaoConsumoController } from '../controllers/cartaoConsumo.controller';
import { createNewCartaoConsumoValidator } from '../validators/cartaoConsumo.validator';

export default function defineRoute(app: Application){ 
  const controller : CartaoConsumoController= new CartaoConsumoController(); 
  const router: Router = Router(); 
    // Create a new CartaoConsumo 
  router.post('/', [checkUserAccess, ...createNewCartaoConsumoValidator, validateHeaders] , controller.create);

    // Retrieve all cartaoConsumo 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout cartaoConsumo
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single CartaoConsumo with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a CartaoConsumo with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a CartaoConsumo with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get CartaoConsumo 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/cartao-consumo', router); 
  }; 
