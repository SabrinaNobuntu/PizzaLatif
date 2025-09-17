import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { NotFoundError } from "../../../errors/notFound.error";
import { CartaoCliente, ICartaoCliente } from "../../../domain/entities/cartaoCliente.model"; 
import CartaoClienteRepository from "../../../domain/repositories/cartaoCliente.repository";
import TenantConnection from "../../../domain/entities/tenantConnection.model";
import { ValidationError } from "sequelize";

export class CartaoClienteController { 

  async create(req: Request, res: Response, next: NextFunction) {  
    try { 
      if (req.body.tenantConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
    const  cartaoClienteRepository : CartaoClienteRepository = new CartaoClienteRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICartaoCliente, CartaoCliente> = new BaseController(cartaoClienteRepository,  "cartaoCliente"); 

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
    const  cartaoClienteRepository : CartaoClienteRepository = new CartaoClienteRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICartaoCliente, CartaoCliente> = new BaseController(cartaoClienteRepository,  "cartaoCliente"); 

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
    const  cartaoClienteRepository : CartaoClienteRepository = new CartaoClienteRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICartaoCliente, CartaoCliente> = new BaseController(cartaoClienteRepository,  "cartaoCliente"); 

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
    const  cartaoClienteRepository : CartaoClienteRepository = new CartaoClienteRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICartaoCliente, CartaoCliente> = new BaseController(cartaoClienteRepository,  "cartaoCliente"); 

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
    const  cartaoClienteRepository : CartaoClienteRepository = new CartaoClienteRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICartaoCliente, CartaoCliente> = new BaseController(cartaoClienteRepository,  "cartaoCliente"); 

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
    const  cartaoClienteRepository : CartaoClienteRepository = new CartaoClienteRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICartaoCliente, CartaoCliente> = new BaseController(cartaoClienteRepository,  "cartaoCliente"); 

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
    const  cartaoClienteRepository : CartaoClienteRepository = new CartaoClienteRepository(req.body.tenantConnection as TenantConnection);
    const baseController : BaseController<ICartaoCliente, CartaoCliente> = new BaseController(cartaoClienteRepository,  "cartaoCliente"); 

      baseController.findCustom(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
