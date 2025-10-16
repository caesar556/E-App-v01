import { Button } from "@/components/ui/button";

export default function Subscribe() {
  return (
    <div className="bg-purple-300 mb-8 w-[60%] mx-auto rounded-lg" >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            <span className="text-violet-700">Sign up </span> for our newsletter
          </h2>

          <p className="mt-4 text-gray-700">
            Subscribe for new offers and exclusive features.
          </p>
        </div>

        <form
          action="#"
          className="mx-auto mt-6 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <label htmlFor="Email" className="flex-1">
            <span className="sr-only"> Email </span>

            <input
              type="email"
              id="Email"
              placeholder="Enter your email"
              className="h-12 w-full rounded border-gray-300 shadow-sm pl-3"
            />
          </label>

          <Button 
            className="bg-violet-800"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
