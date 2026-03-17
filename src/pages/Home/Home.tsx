export const Home = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="surface-card rounded-2xl p-8 sm:p-12">
        <p className="type-caption weight-medium text-text-secondary">
          STARTER HOME
        </p>
        <h1 className="type-display-l weight-bold mt-3 max-w-2xl">
          Build Your Fitness Journey With A Strong Start
        </h1>
        <p className="type-body-l weight-regular mt-4 max-w-xl text-text-secondary">
          Main layout is now active with Navbar and Footer shared across pages.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button className="btn-cta rounded-xl px-6 py-3 type-body-m weight-semibold">
            Get Started
          </button>
          <button className="rounded-xl border border-border-subtle px-6 py-3 type-body-m weight-medium text-text-primary hover:bg-surface-card">
            Explore Trainers
          </button>
        </div>
      </div>
    </section>
  );
};
