import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      {projects.map((p) => (
        <div key={p.title} className="border rounded p-4 my-4">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p>{p.description}</p>
          <p className="text-sm text-gray-500">{p.tech.join(", ")}</p>
        </div>
      ))}
    </main>
  );
}
