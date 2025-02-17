import { Users } from 'src/users/users.entity';

export class CreateAddressResponseDTO {
  readonly street: string;
  readonly city: string;
  readonly state: string;
  readonly zipCode: string;
  readonly number: number;
  readonly userId?: Users;
}
