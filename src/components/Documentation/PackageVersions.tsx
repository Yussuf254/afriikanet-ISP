"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

export const PackageVersions = () => {
  const dependencies = [
    { name: "Next.js", version: "14.2.4" },
    { name: "React", version: "^18" },
    { name: "React DOM", version: "^18" },
    { name: "TypeScript", version: "^5" },
    { name: "Tailwind CSS", version: "^3.4.1" },
    { name: "NextAuth", version: "^4.24.7" },
    { name: "Framer Motion", version: "^11.11.9" },
    { name: "Axios", version: "^1.7.2" },
    { name: "Iconify", version: "^5.0.1" },
    { name: "React Hot Toast", version: "^2.4.1" },
    { name: "React Slick", version: "^0.30.2" },
    { name: "AOS", version: "^2.3.4" },
    { name: "Gray Matter", version: "^4.0.3" },
    { name: "Date-fns", version: "^3.4.0" },
  ];

  const devDependencies = [
    { name: "@types/node", version: "^20" },
    { name: "@types/react", version: "^18" },
    { name: "@types/react-dom", version: "^18" },
    { name: "@types/react-slick", version: "^0.23.13" },
    { name: "@types/aos", version: "^3.0.7" },
    { name: "PostCSS", version: "^8" },
    { name: "gh-pages", version: "^6.3.0" },
  ];

  return (
    <div id="version" className="md:scroll-m-[130px] scroll-m-28">
      <h3 className="text-2xl font-semibold mt-8 text-slate-900">
        Package Versions
      </h3>
      <p className="text-slate-600 mt-2">
        Current versions of dependencies used in the Afriikanet project.
      </p>

      {/* Production Dependencies */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 mt-6">
        <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Icon icon="solar:box-bold" className="text-amber-600" />
          Production Dependencies
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dependencies.map((dep, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-amber-100 flex items-center justify-between"
            >
              <span className="font-medium text-slate-900">{dep.name}</span>
              <span className="text-amber-600 font-mono text-sm bg-amber-50 px-2 py-1 rounded">
                {dep.version}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Development Dependencies */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mt-6">
        <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Icon icon="solar:code-bold" className="text-slate-600" />
          Development Dependencies
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {devDependencies.map((dep, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-4 border border-slate-200 flex items-center justify-between"
            >
              <span className="font-medium text-slate-900">{dep.name}</span>
              <span className="text-slate-600 font-mono text-sm bg-slate-200 px-2 py-1 rounded">
                {dep.version}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 text-white mt-6">
        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon icon="solar:info-circle-bold" className="text-amber-400" />
          Project Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-slate-400 text-sm">Project Name</p>
            <p className="font-semibold text-lg">Afriikanet</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-slate-400 text-sm">Version</p>
            <p className="font-semibold text-lg">2.0.0</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-slate-400 text-sm">Private</p>
            <p className="font-semibold text-lg">Yes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
