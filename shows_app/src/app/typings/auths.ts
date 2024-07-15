export interface IRegisterArgs {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ILoginArgs {
  email: string;
  password: string;
}

export type MutatorArgs = IRegisterArgs | ILoginArgs;
