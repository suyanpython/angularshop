export class CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
}

export class UpdateUserDto {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  currentPassword?: string;
  newPassword?: string;
}

export class LoginDto {
  email: string;
  password: string;
}