import { useState, FormEvent, useRef, useEffect } from 'react';
import { Sparkles, ChevronRight, User } from 'lucide-react';

const SUGGESTED_QUESTIONS: string[] = [
  'Bandingkan laba rugi bulan ini dengan bulan lalu.',
  'Apakah ada tagihan piutang pelanggan yang berisiko macet?',
  'Tampilkan 5 produk paling laris di Cabang Jakbar.',
];

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const AnalisaAITab: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Halo! Saya asisten AI analitik Orbibox Anda. Saya dapat membantu menganalisa data laporan, menemukan tren tersembunyi, atau sekadar meringkas posisi kas Anda hari ini. Apa yang ingin Anda ketahui?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (question: string) => {
    if (!question.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: question };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      // Format riwayat pesan agar sesuai dengan yang dibutuhkan API (user/assistant)
      const apiHistory = newMessages.map(msg => ({
        role: msg.sender === 'ai' ? 'assistant' : 'user',
        content: msg.text,
      }));

      // Kirim pertanyaan ke backend Anda (yang akan kita buat)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: apiHistory }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal mendapatkan respon dari AI.');
      }

      const data = await response.json();
      const aiMessage: Message = { sender: 'ai', text: data.reply };
      // Gunakan functional update untuk memastikan state 'messages' selalu yang terbaru
      setMessages(currentMessages => [...currentMessages, aiMessage]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Terjadi kesalahan tidak diketahui.';
      const aiMessage: Message = { sender: 'ai', text: `Maaf, terjadi kesalahan: ${errorMessage}` };
      setMessages(prev => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 p-6 relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        <div className="text-center mb-8 mt-4">
          <Sparkles className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Insight Keuangan Berbasis AI</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Tanyakan apa saja tentang kondisi finansial, tren penjualan, atau anomali pengeluaran perusahaan Anda.
          </p>
        </div>

        {messages.length <= 1 && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <div
                key={i}
                onClick={() => handleSendMessage(q)}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur border border-purple-100 dark:border-purple-800 p-4 rounded-xl cursor-pointer hover:bg-white dark:hover:bg-slate-700 hover:shadow-md transition-all text-sm text-purple-900 dark:text-purple-300 font-medium"
              >
                &quot;{q}&quot;
              </div>
            ))}
          </div>
        )}

        <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 flex flex-col overflow-hidden mb-4 transition-colors duration-300">
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 dark:bg-slate-900/50 space-y-6">
            {messages.map((msg, index) => (
              <div key={index} className={`flex space-x-4 max-w-2xl ${msg.sender === 'user' ? 'ml-auto flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white ${msg.sender === 'ai' ? 'bg-gradient-to-tr from-purple-600 to-blue-500' : 'bg-slate-400'}`}>
                  {msg.sender === 'ai' ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className={`p-4 rounded-2xl shadow-sm border text-sm leading-relaxed transition-colors duration-300 ${msg.sender === 'ai' ? 'bg-white dark:bg-slate-800 rounded-tl-none border-gray-100 dark:border-slate-700 text-gray-700 dark:text-gray-300' : 'bg-blue-500 text-white rounded-tr-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex space-x-4 max-w-2xl">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-slate-700 text-gray-400 dark:text-gray-500 text-sm italic transition-colors duration-300">
                  AI sedang berpikir...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700 transition-colors duration-300">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                className="w-full bg-gray-100 dark:bg-slate-700 border-none rounded-full pl-6 pr-12 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
                placeholder="Ketik pertanyaan untuk Analisa AI..."
              />
              <button type="submit" disabled={isLoading} className="absolute right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnalisaAITab;
