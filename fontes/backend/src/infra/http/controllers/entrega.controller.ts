import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { NotFoundError } from "../../../errors/notFound.error";
import { Entrega, IEntrega } from "../../../domain/entities/entrega.model"; 
import EntregaRepository from "../../../domain/repositories/entrega.repository";
import TenantConnection from "../../../domain/entities/tenantConnection.model";
import { ValidationError } from "sequelize";

export class EntregaController { 

  async create(req: Request, res: Response, next: NextFunction) {  
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  entregaRepository : EntregaRepository = new EntregaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IEntrega, Entrega> = new BaseController(entregaRepository,  "entrega"); 

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
    const  entregaRepository : EntregaRepository = new EntregaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IEntrega, Entrega> = new BaseController(entregaRepository,  "entrega"); 

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
    const  entregaRepository : EntregaRepository = new EntregaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IEntrega, Entrega> = new BaseController(entregaRepository,  "entrega"); 

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
    const  entregaRepository : EntregaRepository = new EntregaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IEntrega, Entrega> = new BaseController(entregaRepository,  "entrega"); 

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
    const  entregaRepository : EntregaRepository = new EntregaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IEntrega, Entrega> = new BaseController(entregaRepository,  "entrega"); 

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
    const  entregaRepository : EntregaRepository = new EntregaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IEntrega, Entrega> = new BaseController(entregaRepository,  "entrega"); 

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
    const  entregaRepository : EntregaRepository = new EntregaRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<IEntrega, Entrega> = new BaseController(entregaRepository,  "entrega"); 

      baseController.findCustom(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
