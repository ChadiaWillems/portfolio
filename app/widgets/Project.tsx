export default function Project({ title, description, link, cloudinaryUrl, tags }: { title: string; description: string; link: string; cloudinaryUrl: string; tags: string[] }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={cloudinaryUrl} alt={title} className="w-full h-96 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 h-50">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
        <div className="mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}