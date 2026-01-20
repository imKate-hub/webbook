import { Book, CategoryStructure, MainCategory } from './types';

export const CATEGORIES: CategoryStructure[] = [
  {
    name: MainCategory.LITERATURE,
    description: "Khám phá vẻ đẹp của ngôn từ và cảm xúc.",
    icon: "feather",
    subCategories: [
      "Tiểu thuyết",
      "Truyện ngắn",
      "Tản văn",
      "Thơ",
      "Truyện kinh điển"
    ]
  },
  {
    name: MainCategory.SELF_HELP,
    description: "Hành trình hoàn thiện bản thân mỗi ngày.",
    icon: "sprout",
    subCategories: [
      "Sách tư duy (mindset)",
      "Thói quen",
      "Kỹ năng sống",
      "Định hướng cuộc đời"
    ]
  },
  {
    name: MainCategory.BUSINESS,
    description: "Kiến thức thực chiến cho sự nghiệp.",
    icon: "briefcase",
    subCategories: [
      "Kinh doanh",
      "Tài chính cá nhân",
      "Marketing",
      "Quản lý",
      "Khởi nghiệp"
    ]
  }
];

export const INITIAL_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Nhà Giả Kim',
    author: 'Paulo Coelho',
    category: MainCategory.LITERATURE,
    subCategory: 'Tiểu thuyết',
    coverUrl: 'https://picsum.photos/300/450?random=1',
    content: 'Một cuốn sách kinh điển về việc theo đuổi ước mơ. Câu chuyện về chàng chăn cừu Santiago đã truyền cảm hứng cho hàng triệu độc giả trên toàn thế giới...',
    rating: 5,
    createdAt: Date.now()
  },
  {
    id: '2',
    title: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    category: MainCategory.SELF_HELP,
    subCategory: 'Kỹ năng sống',
    coverUrl: 'https://picsum.photos/300/450?random=2',
    content: 'Nghệ thuật thu phục lòng người. Cuốn sách không chỉ dạy cách giao tiếp mà còn dạy cách sống tử tế và quan tâm đến người khác.',
    rating: 4.5,
    createdAt: Date.now() - 100000
  },
  {
    id: '3',
    title: 'Cha Giàu Cha Nghèo',
    author: 'Robert Kiyosaki',
    category: MainCategory.BUSINESS,
    subCategory: 'Tài chính cá nhân',
    coverUrl: 'https://picsum.photos/300/450?random=3',
    content: 'Thay đổi tư duy về tiền bạc. Cuốn sách giải thích sự khác biệt cơ bản trong tư duy tài chính giữa người giàu và người nghèo.',
    rating: 5,
    createdAt: Date.now() - 200000
  }
];
