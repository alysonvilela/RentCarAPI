import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

export class ListSpecificationsController {
  constructor(private listSpecificationUseCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response) {
    response.json(this.listSpecificationUseCase.execute());
  }
}
