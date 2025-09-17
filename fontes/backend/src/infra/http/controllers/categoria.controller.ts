import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { NotFoundError } from "../../../errors/notFound.error";
import { Categoria, ICategoria } from "../../../domain/entities/categoria.model"; 
import CategoriaRepository from "../../../domain/repositories/categoria.repository";
import TenantConnection from "../../../domain/entities/tenantConnection.model";
import { ValidationError } from "sequelize";

export class CategoriaController { 

  async create(req: Request, res: Response, next: NextFunction) {  
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  categoriaRepository : CategoriaRepository = new CategoriaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICategoria, Categoria> = new BaseController(categoriaRepository,  "categoria"); 

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
    const  categoriaRepository : CategoriaRepository = new CategoriaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICategoria, Categoria> = new BaseController(categoriaRepository,  "categoria"); 

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
    const  categoriaRepository : CategoriaRepository = new CategoriaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICategoria, Categoria> = new BaseController(categoriaRepository,  "categoria"); 

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
    const  categoriaRepository : CategoriaRepository = new CategoriaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICategoria, Categoria> = new BaseController(categoriaRepository,  "categoria"); 

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
    const  categoriaRepository : CategoriaRepository = new CategoriaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICategoria, Categoria> = new BaseController(categoriaRepository,  "categoria"); 

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
    const  categoriaRepository : CategoriaRepository = new CategoriaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICategoria, Categoria> = new BaseController(categoriaRepository,  "categoria"); 

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
    const  categoriaRepository : CategoriaRepository = new CategoriaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICategoria, Categoria> = new BaseController(categoriaRepository,  "categoria"); 

      baseController.findCustom(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
