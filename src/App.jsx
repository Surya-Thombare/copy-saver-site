import { Download, Search, Clock, Trash2, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white font-sans">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Copy Saver</h1>
          <p className="text-xl">Your Digital Clipboard Organizer</p>
        </header>

        <section className="bg-white bg-opacity-10 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "Automatic Saving", description: "Captures text you copy while browsing" },
              { icon: <Search className="w-8 h-8" />, title: "Search Functionality", description: "Quickly find specific copied text" },
              { icon: <ExternalLink className="w-8 h-8" />, title: "Source URL", description: "Each item includes a link to its original webpage" },
              { icon: <Download className="w-8 h-8" />, title: "Export Option", description: "Export all saved items to a text file" },
              { icon: <Trash2 className="w-8 h-8" />, title: "Item Management", description: "Clear specific items or all at once" },
              { icon: <Clock className="w-8 h-8" />, title: "Auto-Cleanup", description: "Removes items older than 10 days" },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-white bg-opacity-20 rounded-full p-2">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white bg-opacity-10 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Perfect for</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Students collecting research from multiple sources</li>
            <li>Professionals gathering information across various websites</li>
            <li>Writers compiling ideas and quotes</li>
            <li>Anyone who frequently copies and refers back to online content</li>
          </ul>
        </section>

        <section className="bg-white bg-opacity-10 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6">Privacy Focus</h2>
          <p className="mb-4">Copy Saver respects your privacy:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>All data is stored locally on your device</li>
            <li>No personal information is collected</li>
            <li>Your copied content remains private</li>
          </ul>
        </section>

        <footer className="text-center mt-12">
          <p>Start saving time and staying organized with Copy Saver today!</p>
          <button className="mt-4 bg-white text-purple-600 font-bold py-2 px-4 rounded hover:bg-opacity-90 transition duration-300">
            Add to Chrome
          </button>
        </footer>
      </div>
    </div>
  );
}