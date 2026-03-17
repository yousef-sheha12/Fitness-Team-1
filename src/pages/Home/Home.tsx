import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main className="mx-auto grid w-full max-w-5xl gap-4 px-4 pb-10 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="surface-card rounded-xl p-5">
          <p className="type-body-m">BG-Primary</p>
        </div>
        <div className="rounded-xl border border-border-subtle bg-cta-primary p-5">
          <p className="type-body-m">Primary CTA</p>
        </div>
        <div className="rounded-xl border border-border-subtle bg-cta-hover p-5">
          <p className="type-body-m">CTA Hover</p>
        </div>
        <div className="rounded-xl border border-border-subtle bg-success p-5 text-[#06210f]">
          <p className="type-body-m">Success</p>
        </div>
        <div className="rounded-xl border border-border-subtle bg-text-primary p-5 text-bg-primary">
          <p className="type-body-m">Primary Text</p>
        </div>
        <div className="rounded-xl border border-border-subtle bg-text-secondary p-5 text-bg-primary">
          <p className="type-body-m">Secondary Text</p>
        </div>
        <div className="rounded-xl border border-border-subtle bg-surface-card p-5">
          <p className="type-body-m">Border / Surface</p>
        </div>
        <button className="btn-cta rounded-xl p-5 text-left type-body-m">
          Button Token Test
        </button>
      </main>
    </div>
  );
}
