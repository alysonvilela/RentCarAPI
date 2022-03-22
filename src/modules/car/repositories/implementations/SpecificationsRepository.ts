import { Specification } from '../../model/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

export class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!SpecificationRepository.INSTANCE) {
      console.log('new instance');
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign<Specification, Specification>(specification, { name, description });

    this.specifications.push(specification);
  }
  findByName(name: string) {
    return this.specifications.find((specification) => specification.name === name);
  }
  list(): Specification[] {
    return this.specifications;
  }
}
