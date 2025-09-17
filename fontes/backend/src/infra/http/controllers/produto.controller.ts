import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { NotFoundError } from "../../../errors/notFound.error";
import { Produto, IProduto } from "../../../domain/entities/produto.model"; 
import ProdutoRepository from "../../../domain/repositories/produto.repository";
import TenantConnection from "../../../domain/entities/tenantConnection.model";
import { ValidationError } from "sequelize";

export class ProdutoController { 

  async create(req: Request, res: Response, next: NextFunction) {  
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  produtoRepository : ProdutoRepository = new ProdutoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IProduto, Produto> = new BaseController(produtoRepository,  "produto"); 

    baseController.create(req, res, next); 
    } catch (error) { 
      if (error instanceof ValidationError) { 
        const validationMessages = error.errors.map(err => err.message);  
        return res.status(400).json({ 
          error: "Erro de validação", 
          details: validationMessages  
        }); 
      } 
      next(error);
    } 
  } 

  async findAll(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  produtoRepository : ProdutoRepository = new ProdutoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IProduto, Produto> = new BaseController(produtoRepository,  "produto"); 

    baseController.findAll(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async findById(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  produtoRepository : ProdutoRepository = new ProdutoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IProduto, Produto> = new BaseController(produtoRepository,  "produto"); 

    baseController.findById(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async update(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  produtoRepository : ProdutoRepository = new ProdutoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IProduto, Produto> = new BaseController(produtoRepository,  "produto"); 

    baseController.update(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async getCount(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  produtoRepository : ProdutoRepository = new ProdutoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IProduto, Produto> = new BaseController(produtoRepository,  "produto"); 

    baseController.getCount(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async delete(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  produtoRepository : ProdutoRepository = new ProdutoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IProduto, Produto> = new BaseController(produtoRepository,  "produto"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async customQuery(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  produtoRepository : ProdutoRepository = new ProdutoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IProduto, Produto> = new BaseController(produtoRepository,  "produto"); 

      baseController.findCustom(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
