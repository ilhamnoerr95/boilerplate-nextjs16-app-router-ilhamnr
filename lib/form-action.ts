import type { ActionState } from "@/types/form.type";

export const initialActionState: ActionState = {
  success: false,
  message: "",
};

export function actionSuccess<T>(message = "Success", data?: T): ActionState<T> {
  return { success: true, message, data };
}

export function actionError<T>(
  message: string,
  errors?: Partial<Record<string, string>>
): ActionState<T> {
  return { success: false, message, errors };
}
