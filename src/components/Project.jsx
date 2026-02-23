export default function Project() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-lime-400 mb-6">My Project</h1>
      <div className="bg-slate-700 w-full p-4 rounded shadow-md shadow-lime-500">
        <h2 className="text-gray-300 font-semibold mb-2">Mini Project</h2>
        <p className="text-gray-300 mb-4">
          Mini project pembelajaran dari program MSIB dengan fitur autentikasi,
          role user & admin, serta interaksi sosial sederhana.
        </p>
        <ul className="list-disc ml-5 text-gray-300 mb-4">
          <li>Login & Register</li>
          <li>Role User & Admin</li>
          <li>Profile Management</li>
          <li>Follow & Comment</li>
          <li>CRUD Data</li>
        </ul>
        <div className="text-sm text-gray-400 mb-3">
          Tech Stack: React, Tailwind CSS
        </div>

        <div className="flex justify-between items-center">
          <span className="text-yellow-400 text-sm">
            Not Deployed (Local Project)
          </span>

          <a
            href="https://github.com/username/msib-social-media-web"
            target="_blank"
            className="text-lime-400 hover:underline">
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
}
