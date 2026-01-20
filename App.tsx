import React, { useState, useEffect } from 'react';
import { Book, MainCategory, TabView } from './types';
import { CATEGORIES, INITIAL_BOOKS } from './constants';
import { BookCard } from './components/BookCard';
import { AdminPanel } from './components/AdminPanel';
import { Button } from './components/Button';
import { Search, BookOpen, User, Youtube, GraduationCap, Lock, Plus, Menu, X, Instagram, Facebook, Mail } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState<TabView>('home');
  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<MainCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Persist books to localStorage
  useEffect(() => {
    const storedBooks = localStorage.getItem('rwk_books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  const handleAddBook = (newBook: Book) => {
    const updatedBooks = [newBook, ...books];
    setBooks(updatedBooks);
    localStorage.setItem('rwk_books', JSON.stringify(updatedBooks));
    setActiveTab('blog'); // Redirect to blog to see new post
    setActiveCategoryFilter('All');
  };

  const filteredBooks = books.filter(book => {
    const matchesCategory = activeCategoryFilter === 'All' || book.category === activeCategoryFilter;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // --- Components for other pages ---
  const PersonalStories = () => (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <h2 className="text-4xl font-serif font-bold text-white mb-8 text-center">Câu chuyện cá nhân</h2>
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12 text-center">
        <User size={64} className="mx-auto text-kate-orange mb-6" />
        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Chào mừng bạn đến với góc nhỏ của Kate. Đây là nơi mình chia sẻ những trải nghiệm thực tế, 
          những vấp ngã và bài học trên hành trình trưởng thành.
        </p>
        <p className="text-zinc-400 italic">"Mỗi cuốn sách là một cuộc đời, và mỗi cuộc đời là một cuốn sách đang được viết."</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
           {/* Placeholder content cards */}
           <div className="bg-black p-6 rounded-xl border border-zinc-800 hover:border-kate-orange/30 transition-all cursor-pointer text-left">
              <span className="text-xs text-kate-orange uppercase tracking-widest">Journal</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-2">Tuổi 20 lạc lối</h3>
              <p className="text-zinc-500 text-sm">Những ngày tháng không biết mình là ai và muốn gì...</p>
           </div>
           <div className="bg-black p-6 rounded-xl border border-zinc-800 hover:border-kate-orange/30 transition-all cursor-pointer text-left">
              <span className="text-xs text-kate-orange uppercase tracking-widest">Travel</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-2">Chuyến đi thay đổi tất cả</h3>
              <p className="text-zinc-500 text-sm">Bài học từ vùng đất lạ và những con người xa lạ.</p>
           </div>
        </div>
      </div>
    </div>
  );

  const YoutubeSection = () => (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <h2 className="text-4xl font-serif font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
        <Youtube className="text-red-600" size={40} /> Kênh Youtube
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity" style={{ backgroundImage: `url(https://picsum.photos/600/400?random=${i+10})`}}></div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors z-10">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-white font-medium truncate">Vlog {i}: Một ngày đọc sách cùng Kate</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const EnglishMethod = () => (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <h2 className="text-4xl font-serif font-bold text-white mb-8 text-center">Phương pháp học tiếng Anh</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-400">
            <BookOpen size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Reading</h3>
          <p className="text-zinc-400 text-sm">Phương pháp đọc sách nguyên tác từ trình độ cơ bản đến nâng cao. Cách note từ vựng hiệu quả.</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4 text-green-400">
            <Youtube size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Listening</h3>
          <p className="text-zinc-400 text-sm">Luyện nghe thụ động và chủ động qua Podcast, TED Talks và phim ảnh.</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-purple-400">
            <GraduationCap size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Shadowing</h3>
          <p className="text-zinc-400 text-sm">Kỹ thuật nhại giọng để cải thiện phát âm và ngữ điệu tự nhiên như người bản xứ.</p>
        </div>
      </div>
    </div>
  );

  // --- Main Layout ---
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-kate-orange selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="text-2xl font-serif font-bold text-white cursor-pointer flex items-center gap-2"
            onClick={() => { setActiveTab('home'); window.scrollTo(0,0); }}
          >
            <span className="text-kate-orange">Read</span> with Kate
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setActiveTab('blog')}
              className={`text-sm font-medium transition-colors hover:text-kate-orange ${activeTab === 'blog' ? 'text-kate-orange' : 'text-zinc-400'}`}
            >
              Blog Sách
            </button>
            <button 
              onClick={() => setActiveTab('personal')}
              className={`text-sm font-medium transition-colors hover:text-kate-orange ${activeTab === 'personal' ? 'text-kate-orange' : 'text-zinc-400'}`}
            >
              Câu chuyện cá nhân
            </button>
            <button 
              onClick={() => setActiveTab('youtube')}
              className={`text-sm font-medium transition-colors hover:text-kate-orange ${activeTab === 'youtube' ? 'text-kate-orange' : 'text-zinc-400'}`}
            >
              Youtube
            </button>
            <button 
              onClick={() => setActiveTab('english')}
              className={`text-sm font-medium transition-colors hover:text-kate-orange ${activeTab === 'english' ? 'text-kate-orange' : 'text-zinc-400'}`}
            >
              Học Tiếng Anh
            </button>
          </nav>

          <div className="flex items-center gap-4">
             {/* Admin Trigger (Visible for demo purposes as requested "Admin upload section") */}
             <button 
              onClick={() => setIsAdminOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-400 text-xs hover:text-white hover:bg-zinc-800 transition-all border border-zinc-800"
              title="Admin Upload"
            >
              <Lock size={12} /> Admin
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-zinc-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
           <div className="md:hidden bg-zinc-900 border-b border-zinc-800 p-4 flex flex-col gap-4 animate-slide-down">
              <button onClick={() => {setActiveTab('blog'); setMobileMenuOpen(false)}} className="text-zinc-300 hover:text-kate-orange text-left">Blog Sách</button>
              <button onClick={() => {setActiveTab('personal'); setMobileMenuOpen(false)}} className="text-zinc-300 hover:text-kate-orange text-left">Câu chuyện cá nhân</button>
              <button onClick={() => {setActiveTab('youtube'); setMobileMenuOpen(false)}} className="text-zinc-300 hover:text-kate-orange text-left">Youtube</button>
              <button onClick={() => {setActiveTab('english'); setMobileMenuOpen(false)}} className="text-zinc-300 hover:text-kate-orange text-left">Học Tiếng Anh</button>
              <button onClick={() => {setIsAdminOpen(true); setMobileMenuOpen(false)}} className="text-zinc-500 hover:text-white text-left flex items-center gap-2"><Lock size={14}/> Đăng bài (Admin)</button>
           </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-16">
        
        {/* HERO SECTION (Only on Home) */}
        {activeTab === 'home' && (
          <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2228&q=80')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
            
            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
              <span className="text-kate-orange font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Welcome to my world</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Read with <span className="text-kate-orange italic">Kate</span>
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
                Nơi lưu giữ những trang sách hay, những câu chuyện về sự trưởng thành và hành trình khám phá bản thân.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setActiveTab('blog')} className="px-8 py-3 text-lg">Khám phá Blog Sách</Button>
                <Button variant="outline" onClick={() => setActiveTab('personal')} className="px-8 py-3 text-lg">Về Kate</Button>
              </div>
            </div>
          </div>
        )}

        {/* BOOK BLOG SECTION */}
        {(activeTab === 'blog' || activeTab === 'home') && (
          <div className={`container mx-auto px-4 ${activeTab === 'home' ? 'py-20' : 'py-12'}`}>
            {activeTab === 'home' && <h2 className="text-3xl font-serif font-bold text-center mb-12 text-white">Bài viết mới nhất</h2>}
            
            {activeTab === 'blog' && (
              <div className="mb-10 space-y-6">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-serif font-bold text-white mb-4">Thư viện sách</h1>
                  <p className="text-zinc-400">Chọn chủ đề bạn quan tâm</p>
                </div>

                {/* Categories Filter */}
                <div className="flex flex-wrap justify-center gap-3">
                  <button 
                    onClick={() => setActiveCategoryFilter('All')}
                    className={`px-4 py-2 rounded-full text-sm transition-all border ${activeCategoryFilter === 'All' ? 'bg-white text-black border-white' : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600'}`}
                  >
                    Tất cả
                  </button>
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat.name}
                      onClick={() => setActiveCategoryFilter(cat.name)}
                      className={`px-4 py-2 rounded-full text-sm transition-all border ${activeCategoryFilter === cat.name ? 'bg-kate-orange text-white border-kate-orange' : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Sub-categories display (Purely informational/visual based on selection) */}
                {activeCategoryFilter !== 'All' && (
                  <div className="flex flex-wrap justify-center gap-2 text-xs text-zinc-500 max-w-2xl mx-auto">
                    {CATEGORIES.find(c => c.name === activeCategoryFilter)?.subCategories.map((sub, idx) => (
                      <span key={idx} className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">#{sub}</span>
                    ))}
                  </div>
                )}

                {/* Search Bar */}
                <div className="max-w-md mx-auto relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  <input 
                    type="text"
                    placeholder="Tìm kiếm sách, tác giả..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:border-kate-orange transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Books Grid */}
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} onClick={setSelectedBook} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-zinc-500">
                <p>Chưa tìm thấy cuốn sách nào phù hợp.</p>
                {activeTab === 'blog' && <Button variant="ghost" onClick={() => setIsAdminOpen(true)} className="mt-4 mx-auto"><Plus size={16}/> Đăng bài đầu tiên</Button>}
              </div>
            )}
          </div>
        )}

        {/* Other Pages */}
        {activeTab === 'personal' && <PersonalStories />}
        {activeTab === 'youtube' && <YoutubeSection />}
        {activeTab === 'english' && <EnglishMethod />}

      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-12 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Read with Kate</h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Chia sẻ niềm đam mê đọc sách và phát triển bản thân. Kết nối với những tâm hồn đồng điệu.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Liên kết</h4>
            <div className="flex flex-col gap-2 text-zinc-500 text-sm">
              <button onClick={() => setActiveTab('home')} className="hover:text-kate-orange transition-colors">Trang chủ</button>
              <button onClick={() => setActiveTab('blog')} className="hover:text-kate-orange transition-colors">Blog Sách</button>
              <button onClick={() => setActiveTab('personal')} className="hover:text-kate-orange transition-colors">Về Kate</button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Kết nối</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-kate-orange hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all"><Youtube size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all"><Mail size={18} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-900 mt-12 pt-8 text-center text-zinc-600 text-xs">
          © {new Date().getFullYear()} Read with Kate. All rights reserved.
        </div>
      </footer>

      {/* Admin Modal */}
      {isAdminOpen && (
        <AdminPanel onClose={() => setIsAdminOpen(false)} onAddBook={handleAddBook} />
      )}

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="bg-kate-dark w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-y-auto custom-scrollbar flex flex-col md:flex-row shadow-2xl border border-zinc-800 relative">
            <button 
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-kate-orange transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="md:w-1/3 h-64 md:h-auto relative">
              <img 
                src={selectedBook.coverUrl} 
                alt={selectedBook.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-2/3 p-8 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-kate-orange/10 text-kate-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-kate-orange/20">
                  {selectedBook.category}
                </span>
                <span className="text-zinc-500 text-xs">/ {selectedBook.subCategory}</span>
              </div>
              
              <h2 className="text-4xl font-serif font-bold text-white mb-2">{selectedBook.title}</h2>
              <p className="text-xl text-zinc-400 font-light italic mb-6">by {selectedBook.author}</p>
              
              <div className="flex items-center gap-1 text-yellow-500 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(selectedBook.rating) ? "opacity-100" : "opacity-30"}>★</span>
                ))}
                <span className="ml-2 text-zinc-500 text-sm">({selectedBook.rating}/5)</span>
              </div>

              <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed whitespace-pre-line">
                {selectedBook.content}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 text-zinc-500 text-sm italic">
                Đăng ngày: {new Date(selectedBook.createdAt).toLocaleDateString('vi-VN')}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;