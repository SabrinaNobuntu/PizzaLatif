import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { PagamentoController } from '../controllers/pagamento.controller';
import { createNewPagamentoValidator } from '../validators/pagamento.validator';

export default function defineRoute(app: Application){ 
  const controller : PagamentoController= new PagamentoController(); 
  const router: Router = Router(); 
    // Create a new Pagamento 
  router.post('/', [checkUserAccess, ...createNewPagamentoValidator, validateHeaders] , controller.create);

    // Retrieve all pagamento 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout pagamento
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Pagamento with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Pagamento with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Pagamento with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Pagamento 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/pagamento', router); 
  }; 
