export default function ExplanationCard({ text }: { text: string }) {
  const formatText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-green-500 border border-gray-300 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">💡</span>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Explanation</h3>
      </div>
      <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
        {text.split('\n').map((paragraph, index) => (
          paragraph.trim() && (
            <p 
              key={index} 
              className="mb-4 last:mb-0 text-gray-800 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: formatText(paragraph) }}
            />
          )
        ))}
      </div>
    </div>
  );
}