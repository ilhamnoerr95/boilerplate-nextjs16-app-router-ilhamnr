export type ActionState<T = unknown> = {
  success: boolean;
  message: string;
  errors?: Partial<Record<string, string>>;
  data?: T;
};

export type ServerAction<T = unknown> = (
  prevState: ActionState<T>,
  formData: FormData
) => Promise<ActionState<T>>;
