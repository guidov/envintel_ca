function Blog() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Environmental Intelligence Blog</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Post 1 */}
        <article className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="h-48 bg-green-100"></div>
          <div className="p-6">
            <div className="text-green-600 text-sm font-semibold mb-2">Sustainability</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              The Future of Environmental Data Analytics
            </h2>
            <p className="text-gray-600 mb-4">
              Exploring how big data and AI are transforming environmental monitoring and analysis.
            </p>
            <div className="text-sm text-gray-500">Published on March 15, 2024</div>
          </div>
        </article>

        {/* Blog Post 2 */}
        <article className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="h-48 bg-green-100"></div>
          <div className="p-6">
            <div className="text-green-600 text-sm font-semibold mb-2">Technology</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Smart Cities and Environmental Monitoring
            </h2>
            <p className="text-gray-600 mb-4">
              How urban areas are using IoT sensors to track and improve environmental quality.
            </p>
            <div className="text-sm text-gray-500">Published on March 10, 2024</div>
          </div>
        </article>

        {/* Blog Post 3 */}
        <article className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="h-48 bg-green-100"></div>
          <div className="p-6">
            <div className="text-green-600 text-sm font-semibold mb-2">Research</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Breakthrough in Climate Prediction Models
            </h2>
            <p className="text-gray-600 mb-4">
              New developments in climate modeling that are improving forecast accuracy.
            </p>
            <div className="text-sm text-gray-500">Published on March 5, 2024</div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Blog;
