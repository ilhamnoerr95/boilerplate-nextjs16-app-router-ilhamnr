"use client";

import { useActionState } from "react";
import type { ActionState, ServerAction } from "@/types/form.type";
import { initialActionState } from "@/lib/form-action";

export function useFormAction<T = unknown>(action: ServerAction<T>) {
  const [state, formAction, isPending] = useActionState<ActionState<T>, FormData>(
    action,
    initialActionState as ActionState<T>
  );

  return { state, formAction, isPending };
}
