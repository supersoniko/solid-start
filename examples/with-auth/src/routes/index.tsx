import { createAsync, useAction, type RouteDefinition } from "@solidjs/router";
import { getUser, logout } from "~/api";

export const route = {
  load: () => getUser()
} satisfies RouteDefinition;

export default function Home() {
  const user = createAsync(getUser);
  const logoutAction = useAction(logout);
  return (
    <main class="w-full p-4 space-y-2">
      <h2 class="font-bold text-3xl">Hello {user()?.username}</h2>
      <h3 class="font-bold text-xl">Message board</h3>
      <form onSubmit={e => {
        e.preventDefault();
        logoutAction(new FormData(e.currentTarget));
      }}>
        <button name="logout" type="submit">
          Logout
        </button>
      </form>
    </main>
  );
}
