import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { TipoPagamentoController } from '../controllers/tipoPagamento.controller';
import { createNewTipoPagamentoValidator } from '../validators/tipoPagamento.validator';

export default function defineRoute(app: Application){ 
  const controller : TipoPagamentoController= new TipoPagamentoController(); 
  const router: Router = Router(); 
    // Create a new TipoPagamento 
  router.post('/', [checkUserAccess, ...createNewTipoPagamentoValidator, validateHeaders] , controller.create);

    // Retrieve all tipoPagamento 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout tipoPagamento
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single TipoPagamento with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a TipoPagamento with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a TipoPagamento with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get TipoPagamento 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/tipo-pagamento', router); 
  }; 
