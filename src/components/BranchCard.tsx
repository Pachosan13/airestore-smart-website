export type Branch = {
  name: string;
  address: string;
  phone: string;
  schedule: string;
};

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{branch.name}</h3>
      <p className="mt-2 text-sm text-slate-700">{branch.address}</p>
      <p className="mt-2 text-sm text-slate-600">{branch.phone}</p>
      <p className="mt-2 text-xs font-semibold uppercase text-primary">{branch.schedule}</p>
    </div>
  );
}
