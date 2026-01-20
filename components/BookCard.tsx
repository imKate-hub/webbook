import React from 'react';
import { Book } from '../types';
import { Star, BookOpen } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onClick: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div 
      className="group bg-kate-dark border border-zinc-800 rounded-xl overflow-hidden hover:border-kate-orange/50 transition-all duration-300 hover:shadow-2xl hover:shadow-kate-orange/10 cursor-pointer flex flex-col h-full"
      onClick={() => onClick(book)}
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-900">
        <img 
          src={book.coverUrl} 
          alt={book.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 text-kate-orange text-sm font-bold border border-white/10">
          <Star size={12} fill="currentColor" />
          {book.rating}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-kate-orange font-medium mb-1 tracking-wider uppercase truncate">
          {book.subCategory}
        </div>
        <h3 className="text-xl font-serif font-bold text-white mb-1 leading-tight group-hover:text-kate-orange transition-colors">
          {book.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 italic">by {book.author}</p>
        
        <p className="text-zinc-500 text-sm line-clamp-3 mb-4 flex-grow">
          {book.content}
        </p>

        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between mt-auto">
          <span className="text-xs text-zinc-600">
            {new Date(book.createdAt).toLocaleDateString('vi-VN')}
          </span>
          <span className="text-xs text-zinc-400 flex items-center gap-1 group-hover:text-white transition-colors">
            Đọc review <BookOpen size={12} />
          </span>
        </div>
      </div>
    </div>
  );
};