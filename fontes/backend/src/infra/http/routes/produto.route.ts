import { Application, Router } from 'express';
import { checkUserAccess } from '../middlewares/checkUserAccess.middleware';
import validateHeaders from '../validators/index.validator';
import { ProdutoController } from '../controllers/produto.controller';
import { createNewProdutoValidator } from '../validators/produto.validator';

export default function defineRoute(app: Application){ 
  const controller : ProdutoController= new ProdutoController(); 
  const router: Router = Router(); 
    // Create a new Produto 
  router.post('/', [checkUserAccess, ...createNewProdutoValidator, validateHeaders] , controller.create);

    // Retrieve all produto 
  router.get('/', [checkUserAccess, validateHeaders], controller.findAll); 
    // Retrieve cout produto
  router.get('/count', [checkUserAccess], controller.getCount); 
    // Retrieve a single Produto with id 
  router.get('/:id', [checkUserAccess], controller.findById); 
    // Update a Produto with id 
  router.put('/:id', [checkUserAccess], controller.update); 
    // Delete a Produto with id 
  router.delete('/:id', [checkUserAccess], controller.delete); 
    // Custom get Produto 
    router.post("/custom", [checkUserAccess], controller.customQuery);

    app.use('/api/produto', router); 
  }; 
