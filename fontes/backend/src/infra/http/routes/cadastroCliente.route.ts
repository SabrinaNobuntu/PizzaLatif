import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { CadastroClienteController } from '../controllers/cadastroCliente.controller';
import { createNewCadastroClienteValidator } from '../validators/cadastroCliente.validator';

export default function defineRoute(app: Application){ 
  const controller : CadastroClienteController= new CadastroClienteController(); 
  const router: Router = Router(); 
    // Create a new CadastroCliente 
  router.post('/', [checkUserAccess, ...createNewCadastroClienteValidator, validateHeaders] , controller.create);

    // Retrieve all cadastroCliente 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout cadastroCliente
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single CadastroCliente with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a CadastroCliente with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a CadastroCliente with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get CadastroCliente 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/cadastro-cliente', router); 
  }; 
