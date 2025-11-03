import { AuthModule } from "@/components/auth-module";

export default function AuthPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <AuthModule />
      </div>
    </div>
  );
}
