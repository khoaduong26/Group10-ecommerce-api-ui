import { useContext } from 'react';
import ProfileCard from '../components/auth/ProfileCard';
import { AuthContext } from '../components/context/auth.context';

const AdminPage = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="section-shell py-10">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin console</p>
            <h1 className="mt-2 font-display text-3xl text-slate-900">Welcome back</h1>
            <p className="mt-2 text-sm text-slate-500">
              Review system activity, manage data, and keep the storefront healthy.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
            Signed in as <span className="font-semibold text-slate-900">{auth?.user?.email || 'admin'}</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Pending orders', value: '08' },
                { label: 'Low stock', value: '14' },
                { label: 'New users', value: '26' },
                { label: 'Active promos', value: '05' }
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  'Create promotion',
                  'Review orders',
                  'Manage catalog',
                  'User permissions'
                ].map((label) => (
                  <button
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:border-slate-300"
                    type="button"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ProfileCard
              title="Admin Profile"
              description="Administrator account with elevated access rights."
              user={auth.user}
            />
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">System status</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-center justify-between">
                  <span>Auth service</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Healthy</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Catalog API</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Healthy</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Payments</span>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">Monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;