import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { EnderecoController } from '../controllers/endereco.controller';
import { createNewEnderecoValidator } from '../validators/endereco.validator';

export default function defineRoute(app: Application){ 
  const controller : EnderecoController= new EnderecoController(); 
  const router: Router = Router(); 
    // Create a new Endereco 
  router.post('/', [checkUserAccess, ...createNewEnderecoValidator, validateHeaders] , controller.create);

    // Retrieve all endereco 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout endereco
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Endereco with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Endereco with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Endereco with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Endereco 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/endereco', router); 
  }; 
