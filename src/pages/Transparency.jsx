// src/pages/Transparency.jsx
export default function Transparency() {
  return (
    
    <div className="min-h-[100vh] p-6 md:p-10 text-white">
      <h1 className="text-3xl font-bold">Transparency</h1>
      <p className="text-neutral-300 mt-2 max-w-3xl">
        Citizens of the Universe operates under Stage One, Inc., a 501(c)(3) nonprofit (EIN: 56-1922771).
        Below are our key docs and policies.
      </p>

      <div className="mt-6 space-y-4">
        <section className="rounded-xl border border-white/15 bg-neutral-900/60 p-4">
          <h2 className="font-semibold">Nonprofit Status</h2>
          <ul className="list-disc pl-5 text-neutral-300">
            <li>EIN: 56-1922771</li>
            <li>In good standing since 1996</li>
            <li>Annual IRS Form 990 (posted when filed)</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/15 bg-neutral-900/60 p-4">
          <h2 className="font-semibold">Public Documents</h2>
          <ul className="list-disc pl-5 text-emerald-300">
            <li><a href="/docs/StageOne_501c3_letter.pdf">IRS determination letter (PDF)</a></li>
            <li><a href="/docs/Form990_latest.pdf">Form 990 (latest)</a></li>
            <li><a href="/docs/Board_Policies.pdf">Board & conflict-of-interest policy</a></li>
            <li><a href="/docs/Financial_Overview.pdf">Financial overview & budgets</a></li>
          </ul>
          <p className="text-neutral-400 mt-2 text-sm">
            
          </p>
        </section>

        <section className="rounded-xl border border-white/15 bg-neutral-900/60 p-4">
          <h2 className="font-semibold">Contact</h2>
          <p className="text-neutral-300">For additional disclosures: <a className="underline" href="/enlist">contact us</a>.</p>
        </section>
      </div>
    </div>
  );
}
