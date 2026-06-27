import AuthNavbar from "../auth/AuthNavbar";
import AuthFooter from "../auth/AuthFooter";

function AuthLayout({
  children,
  page = "login",
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <AuthNavbar page={page} />

      <main className="flex-1">
        {children}
      </main>

      <AuthFooter />
    </div>
  );
}

export default AuthLayout;