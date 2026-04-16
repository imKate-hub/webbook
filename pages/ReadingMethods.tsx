import { motion } from "motion/react";
import { BookOpen, Brain, Clock, Layers, Target, Zap } from "lucide-react";

export default function ReadingMethods() {
  const methods = [
    {
      id: "syntopical",
      title: "Đọc Đồng Chủ Đề (Syntopical Reading)",
      icon: <Layers className="w-6 h-6 text-[#f97316]" />,
      description:
        "Cấp độ đọc cao nhất, nơi bạn đọc nhiều cuốn sách về cùng một chủ đề và so sánh các ý tưởng của chúng để đưa ra kết luận của riêng mình.",
      steps: [
        "Tạo danh mục các cuốn sách liên quan",
        "Đọc lướt tất cả các sách để tìm những đoạn liên quan nhất",
        "Thiết lập thuật ngữ trung lập để so sánh các tác giả",
        "Xác định những câu hỏi bạn muốn được giải đáp",
        "Phân tích các cuộc thảo luận và các quan điểm khác nhau",
      ],
      bestFor: "Nghiên cứu, hiểu sâu các chủ đề phức tạp, viết luận.",
    },
    {
      id: "active",
      title: "Đọc Chủ Động (Active Reading)",
      icon: <Brain className="w-6 h-6 text-[#f97316]" />,
      description:
        "Đọc với một cây bút trên tay. Đây là một cuộc trò chuyện với tác giả, nơi bạn đặt câu hỏi, ghi chú và phản biện lại văn bản.",
      steps: [
        "Làm nổi bật các lập luận chính và luận điểm",
        "Viết câu hỏi và suy nghĩ ra lề sách",
        "Tóm tắt các chương theo cách hiểu của bạn",
        "Tạo dàn ý cấu trúc của cuốn sách",
        "Xem lại ghi chú của bạn sau khi đọc xong",
      ],
      bestFor: "Sách phi hư cấu, triết học, ghi nhớ thông tin dài hạn.",
    },
    {
      id: "sq3r",
      title: "Phương Pháp SQ3R",
      icon: <Target className="w-6 h-6 text-[#f97316]" />,
      description:
        "Một phương pháp tiếp cận có cấu trúc để đọc tài liệu giáo trình, đảm bảo mức độ hiểu và ghi nhớ cao.",
      steps: [
        "Khảo sát (Survey): Đọc lướt chương để có cái nhìn tổng quan",
        "Đặt câu hỏi (Question): Biến các tiêu đề thành câu hỏi",
        "Đọc (Read): Đọc để trả lời những câu hỏi đó",
        "Ghi nhớ (Recite): Tóm tắt những gì vừa đọc từ trí nhớ",
        "Ôn tập (Review): Xem lại ghi chú và toàn bộ chương",
      ],
      bestFor:
        "Sách giáo khoa, tài liệu học thuật, văn bản chứa nhiều thông tin.",
    },
    {
      id: "inspectional",
      title: "Đọc Lướt Có Hệ Thống (Inspectional Reading)",
      icon: <Zap className="w-6 h-6 text-[#f97316]" />,
      description:
        "Đọc lướt có hệ thống để nắm bắt ý chính của một cuốn sách trong thời gian giới hạn trước khi quyết định đọc sâu.",
      steps: [
        "Đọc trang tiêu đề và lời tựa",
        "Nghiên cứu mục lục",
        "Kiểm tra bảng chỉ mục để tìm các thuật ngữ chính",
        "Đọc lời giới thiệu của nhà xuất bản",
        "Đọc lướt các chương có vẻ quan trọng đối với lập luận chính",
      ],
      bestFor: "Đánh giá sách, tìm kiếm thông tin cụ thể một cách nhanh chóng.",
    },
  ];

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className=" text-black py-24">
        <div className="bg-[#f97316]  mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Phương Pháp Đọc
            </h1>
            <p className="text-xl text-warm-white/80 leading-relaxed">
              Cách bạn đọc cũng quan trọng không kém những gì bạn đọc. Khám phá
              các phương pháp này để tận dụng tối đa thời gian đọc của bạn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methods List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {methods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 shadow-sm border border-sand relative overflow-hidden"
            >
              {/* Decorative background number */}
              <div className="absolute -top-10 -right-10 text-[200px] font-serif font-bold text-sand/20 leading-none select-none pointer-events-none">
                {/* 0{index + 1} */}
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-warm-white p-4 rounded-full mr-6 border border-sand">
                    {method.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif">
                    {method.title}
                  </h2>
                </div>

                <p className="text-lg text-ink/80 mb-10 leading-relaxed max-w-2xl">
                  {method.description}
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-ink/50 mb-6">
                      Cách thực hiện
                    </h3>
                    <ul className="space-y-4">
                      {method.steps.map((step, i) => (
                        <li key={i} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f97316]/10 text-[#f97316] flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-ink/80 leading-relaxed">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-warm-white rounded-2xl p-6 border border-sand h-full">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-ink/50 mb-4">
                        Phù hợp nhất cho
                      </h3>
                      <p className="text-ink/80 leading-relaxed italic font-serif text-lg">
                        "{method.bestFor}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-10">
        <div className="bg-sand/30 rounded-3xl p-12 border border-sand">
          <h2 className="text-3xl font-serif mb-4">
            Sẵn sàng áp dụng các phương pháp này?
          </h2>
          <p className="text-ink/70 mb-8 max-w-xl mx-auto">
            Hãy chọn một phương pháp và thử nghiệm với cuốn sách tiếp theo của
            bạn. Xem các bài đánh giá của mình để biết cách mình áp dụng những
            kỹ thuật này vào thực tế.
          </p>
          <a
            href="/reviews"
            className="inline-flex items-center justify-center px-8 py-4 bg-ink text-warm-white rounded-full hover:bg-[#f97316] transition-colors text-sm tracking-widest uppercase font-medium"
          >
            Xem Bài Đánh Giá
          </a>
        </div>
      </section>
    </div>
  );
}
