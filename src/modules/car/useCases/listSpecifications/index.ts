import { SpecificationRepository } from '../../repositories/implementations/SpecificationsRepository';
import { ListSpecificationsController } from './ListSpecificationsController';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationRepository);
export const listSpecificationsController = new
ListSpecificationsController(listSpecificationsUseCase);
