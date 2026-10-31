import { ArrowLeft } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";

const Layout = () => {
  const { pathname } = useLocation();
  const atRoot = pathname === "/";

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="mx-auto w-full max-w-2xl">
        <header className="flex items-center justify-between gap-4 border-b pb-3">
          {atRoot ? (
            <span className="text-xl font-semibold">Posts</span>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <ArrowLeft className="size-4" />
              All posts
            </Link>
          )}
          <ModeToggle />
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
