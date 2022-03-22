import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
    name: string
    description: string
}

export class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) { }
  execute({ name, description }: IRequest) {
    const alreadyExists = this.specificationRepository.findByName(name);
    if (alreadyExists) {
      throw new Error('This repository already exists.');
    }

    this.specificationRepository.create({ name, description });
  }
}
