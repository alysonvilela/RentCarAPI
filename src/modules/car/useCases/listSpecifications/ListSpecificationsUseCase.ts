import { Specification } from '../../model/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

export class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();
    console.log(specifications);
    return specifications;
  }
}
