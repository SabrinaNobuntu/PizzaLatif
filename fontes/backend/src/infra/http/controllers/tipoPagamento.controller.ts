import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { NotFoundError } from "../../../errors/notFound.error";
import { TipoPagamento, ITipoPagamento } from "../../../domain/entities/tipoPagamento.model"; 
import TipoPagamentoRepository from "../../../domain/repositories/tipoPagamento.repository";
import TenantConnection from "../../../domain/entities/tenantConnection.model";
import { ValidationError } from "sequelize";

export class TipoPagamentoController { 

  async create(req: Request, res: Response, next: NextFunction) {  
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  tipoPagamentoRepository : TipoPagamentoRepository = new TipoPagamentoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ITipoPagamento, TipoPagamento> = new BaseController(tipoPagamentoRepository,  "tipoPagamento"); 

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
    const  tipoPagamentoRepository : TipoPagamentoRepository = new TipoPagamentoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ITipoPagamento, TipoPagamento> = new BaseController(tipoPagamentoRepository,  "tipoPagamento"); 

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
    const  tipoPagamentoRepository : TipoPagamentoRepository = new TipoPagamentoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ITipoPagamento, TipoPagamento> = new BaseController(tipoPagamentoRepository,  "tipoPagamento"); 

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
    const  tipoPagamentoRepository : TipoPagamentoRepository = new TipoPagamentoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ITipoPagamento, TipoPagamento> = new BaseController(tipoPagamentoRepository,  "tipoPagamento"); 

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
    const  tipoPagamentoRepository : TipoPagamentoRepository = new TipoPagamentoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ITipoPagamento, TipoPagamento> = new BaseController(tipoPagamentoRepository,  "tipoPagamento"); 

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
    const  tipoPagamentoRepository : TipoPagamentoRepository = new TipoPagamentoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ITipoPagamento, TipoPagamento> = new BaseController(tipoPagamentoRepository,  "tipoPagamento"); 

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
    const  tipoPagamentoRepository : TipoPagamentoRepository = new TipoPagamentoRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ITipoPagamento, TipoPagamento> = new BaseController(tipoPagamentoRepository,  "tipoPagamento"); 

      baseController.findCustom(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
