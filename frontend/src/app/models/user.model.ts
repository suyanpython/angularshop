export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UpdateUserProfile {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  currentPassword?: string;
  newPassword?: string;
}