import { Router } from 'express';

import { Specification } from '../modules/car/model/Specification';
import { SpecificationRepository } from '../modules/car/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/car/services/CreateSpecificationService';

export const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description }: Specification = request.body;

  const createSpecification = new CreateSpecificationService(specificationRepository);
  createSpecification.execute({ name, description });

  return response.status(201).send();
});

specificationsRoutes.get('/', (request, response) => {
  const list = specificationRepository.list();
  return response.json(list);
});
