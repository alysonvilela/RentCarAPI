import { Router } from 'express';

import { createCategoryController } from '../modules/car/useCases/createCategoryUseCase/index';
import { listCategoriesController } from '../modules/car/useCases/listCategoriesUseCase/index';

export const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => createCategoryController
  .handle(request, response));

categoriesRoutes.get('/', (request, response) => listCategoriesController
  .handle(request, response));
