import { Request, Response } from 'express';

import { Specification } from '../../model/Specification';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description }: Specification = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
