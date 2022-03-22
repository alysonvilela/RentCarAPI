import { Router } from 'express';

import { Category } from '../modules/car/model/Category';
import { CategoriesRepository } from '../modules/car/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/car/services/CreateCategoryService';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description }: Category = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const list = categoriesRepository.list();
  return response.json(list);
});
