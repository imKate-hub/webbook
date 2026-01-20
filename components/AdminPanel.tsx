import React, { useState } from 'react';
import { Book, MainCategory, SubCategory } from '../types';
import { CATEGORIES } from '../constants';
import { Button } from './Button';
import { generateBookReview } from '../services/geminiService';
import { X, Sparkles, Upload } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
  onAddBook: (book: Book) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onClose, onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MainCategory>(CATEGORIES[0].name);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>(CATEGORIES[0].subCategories[0]);
  const [content, setContent] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [rating, setRating] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);

  // Update sub-category when main category changes
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCat = e.target.value as MainCategory;
    setSelectedCategory(newCat);
    const catObj = CATEGORIES.find(c => c.name === newCat);
    if (catObj && catObj.subCategories.length > 0) {
      setSelectedSubCategory(catObj.subCategories[0]);
    }
  };

  const handleGenerateAI = async () => {
    if (!title || !author) {
      alert("Vui lòng nhập Tên sách và Tác giả trước khi dùng AI.");
      return;
    }
    setIsGenerating(true);
    const review = await generateBookReview(title, author);
    setContent(review);
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook: Book = {
      id: Date.now().toString(),
      title,
      author,
      category: selectedCategory,
      subCategory: selectedSubCategory,
      coverUrl: coverUrl || `https://picsum.photos/300/450?random=${Date.now()}`,
      content,
      rating,
      createdAt: Date.now()
    };
    onAddBook(newBook);
    onClose();
  };

  const currentCategoryObj = CATEGORIES.find(c => c.name === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-kate-dark border border-zinc-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
          <h2 className="text-2xl font-serif text-white">Đăng Tải Review Mới</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 custom-scrollbar">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Tên sách</label>
                <input 
                  type="text" 
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-kate-orange focus:ring-1 focus:ring-kate-orange outline-none transition-all"
                  placeholder="Nhập tên sách..."
                />
              </div>
              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Tác giả</label>
                <input 
                  type="text" 
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-kate-orange focus:ring-1 focus:ring-kate-orange outline-none transition-all"
                  placeholder="Nhập tên tác giả..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Category */}
               <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Danh mục chính</label>
                <select 
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-kate-orange outline-none"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              {/* Sub Category */}
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Phân loại chi tiết</label>
                <select 
                  value={selectedSubCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                  className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-kate-orange outline-none"
                >
                  {currentCategoryObj?.subCategories.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cover URL */}
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Link ảnh bìa (Tùy chọn)</label>
              <input 
                type="text" 
                value={coverUrl}
                onChange={(e) => setCoverUrl(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-kate-orange focus:ring-1 focus:ring-kate-orange outline-none"
                placeholder="https://example.com/image.jpg (Để trống sẽ dùng ảnh ngẫu nhiên)"
              />
            </div>
             {/* Rating */}
             <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Đánh giá: {rating}/5</label>
              <input 
                type="range" 
                min="1" 
                max="5" 
                step="0.5"
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))}
                className="w-full accent-kate-orange"
              />
            </div>

            {/* Content Area with AI Button */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-zinc-400">Nội dung Review</label>
                <button 
                  type="button"
                  onClick={handleGenerateAI}
                  disabled={isGenerating}
                  className="text-xs flex items-center gap-1 text-kate-orange hover:text-white transition-colors disabled:opacity-50"
                >
                  <Sparkles size={14} />
                  {isGenerating ? 'Đang viết...' : 'Viết bằng AI (Gemini)'}
                </button>
              </div>
              <textarea 
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-kate-orange focus:ring-1 focus:ring-kate-orange outline-none leading-relaxed"
                placeholder="Viết cảm nhận của bạn về cuốn sách này..."
              />
            </div>

            <div className="pt-4 border-t border-zinc-800 flex justify-end gap-3">
              <Button type="button" variant="secondary" onClick={onClose}>Hủy bỏ</Button>
              <Button type="submit" variant="primary">
                <Upload size={18} /> Đăng bài
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};