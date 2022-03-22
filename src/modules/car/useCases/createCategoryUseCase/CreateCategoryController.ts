import { Request, Response } from 'express';

import { Category } from '../../model/Category';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description }: Category = request.body;

    this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
