import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleEdit = async () => {
    const lines = inputText.split('\n');
    const editedLines = lines.map(line => line.trim() ? `${line} [Edited: ${prompt}]` : '');
    setOutputText(editedLines.join('\n'));
  };

  const handleReset = () => {
    setInputText('');
    setOutputText('');
    setPrompt('');
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Agri X AI - Smart Editor</h1>
      <textarea
        className="w-full h-32 p-2 border mb-2"
        placeholder="Paste WhatsApp-style messages here (one per line)..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input
        className="w-full p-2 border mb-2"
        type="text"
        placeholder="Enter your custom edit prompt (e.g., Translate to Hindi)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex gap-2 mb-2">
        <button onClick={handleEdit} className="bg-blue-600 text-white px-4 py-2 rounded">Apply Smart Edit</button>
        <button onClick={handleReset} className="bg-gray-400 text-white px-4 py-2 rounded">Reset</button>
      </div>
      <textarea
        className="w-full h-32 p-2 border"
        placeholder="Edited output will appear here..."
        value={outputText}
        readOnly
      />
    </div>
  );
};

export default App;
