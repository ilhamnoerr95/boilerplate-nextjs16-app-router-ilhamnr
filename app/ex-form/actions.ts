"use server";

import { actionError, actionSuccess } from "@/lib/form-action";
import type { ActionState } from "@/types/form.type";

type RegisterData = {
  name: string;
  email: string;
};

export async function registerAction(
  _prevState: ActionState<RegisterData>,
  formData: FormData
): Promise<ActionState<RegisterData>> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const bio = formData.get("bio") as string;

  const errors: Partial<Record<string, string>> = {};

  if (!name || name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password || password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  if (bio && bio.length > 300) {
    errors.bio = "Bio must not exceed 300 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return actionError("Please fix the errors below.", errors);
  }

  // Replace with your real DB / API call
  await new Promise((resolve) => setTimeout(resolve, 800));

  return actionSuccess<RegisterData>("Account created successfully!", { name, email });
}
