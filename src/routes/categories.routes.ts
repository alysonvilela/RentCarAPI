import { Router } from 'express';

import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepositories';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description }: Category = request.body;
  categoriesRepository.create({ name, description });
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const list = categoriesRepository.list();
  return response.json(list);
});
