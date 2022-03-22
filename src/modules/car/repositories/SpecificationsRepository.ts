import { Specification } from '../model/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from './ISpecificationsRepository';

export class SpecificationRepository implements ISpecificationsRepository {
  private speficication: Specification[];

  constructor() {
    this.speficication = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign<Specification, Specification>(specification, { name, description });

    this.speficication.push(specification);
  }
  findByName(name: string) {
    return this.speficication.find((specification) => specification.name === name);
  }
  list(): Specification[] {
    return this.speficication;
  }
}
