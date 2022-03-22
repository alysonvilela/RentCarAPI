import { Router } from 'express';

import { createSpecificationController } from '../modules/car/useCases/createSpecification';
import { listSpecificationsController } from '../modules/car/useCases/listSpecifications';

export const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => createSpecificationController
  .handle(request, response));

specificationsRoutes.get('/', (request, response) => listSpecificationsController
  .handle(request, response));
