"use client";

import React from "react";
import clsx from "clsx";
import type { ActionState, ServerAction } from "@/types/form.type";
import { useFormAction } from "@/hook/useFormAction";

type ServerFormProps<T = unknown> = {
  action: ServerAction<T>;
  children: (ctx: { state: ActionState<T>; isPending: boolean }) => React.ReactNode;
  className?: string;
};

function ServerForm<T = unknown>({ action, children, className }: ServerFormProps<T>) {
  const { state, formAction, isPending } = useFormAction(action);

  return (
    <form action={formAction} noValidate className={clsx("flex flex-col gap-4", className)}>
      {state.message && (
        <div
          role="status"
          aria-live="polite"
          className={clsx(
            "rounded-lg border px-4 py-3 text-sm",
            state.success
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          )}
        >
          {state.message}
        </div>
      )}

      {children({ state, isPending })}
    </form>
  );
}

export default ServerForm;
