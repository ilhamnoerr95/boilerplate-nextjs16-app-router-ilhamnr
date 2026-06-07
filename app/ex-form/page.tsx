import ServerForm from "@/components/molecules/ServerForm";
import FormField from "@/components/atom/FormField";
import Button from "@/components/atom/Button";
import { registerAction } from "./actions";

export default function ExFormPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Create Account</h1>
          <p className="mt-1 text-sm text-gray-500">
            Example of reusable server action form.
          </p>
        </div>

        <ServerForm action={registerAction}>
          {({ state, isPending }) => (
            <>
              <FormField
                name="name"
                label="Full Name"
                placeholder="John Doe"
                required
                error={state.errors?.name}
                disabled={isPending}
              />

              <FormField
                name="email"
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                required
                error={state.errors?.email}
                disabled={isPending}
              />

              <FormField
                name="password"
                label="Password"
                type="password"
                placeholder="Min. 8 characters"
                required
                error={state.errors?.password}
                disabled={isPending}
              />

              <FormField
                name="bio"
                label="Bio"
                as="textarea"
                placeholder="Tell us about yourself... (max 300 chars)"
                error={state.errors?.bio}
                disabled={isPending}
              />

              <Button
                type="submit"
                label="Create Account"
                loadingName="Creating account..."
                isLoading={isPending}
              />
            </>
          )}
        </ServerForm>
      </div>
    </div>
  );
}
