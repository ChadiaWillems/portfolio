export default function Skills({icon, title, skills}:{icon?: string; title: string; skills: string}) {
  return (
    <div className="border p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{skills}</p>
    </div>
  );
}
