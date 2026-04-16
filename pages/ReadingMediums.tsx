import { motion } from 'motion/react';
import { Book, Laptop, Smartphone, Tablet, Headphones, FileText, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReadingMediums() {
  const sections = [
    {
      id: 1,
      title: "Đọc sách giấy",
      subtitle: "mình đọc để thật sự được “chạm” vào cuốn sách",
      icon: <Book className="w-10 h-10 text-[#F27D26]" />,
      pros: [
        "Sách giấy mang lại một trải nghiệm rất khác – không chỉ là đọc, mà là cảm nhận. Từ mùi giấy, cảm giác lật từng trang, đến việc bạn vô thức nhớ vị trí một đoạn văn nằm ở góc nào… tất cả giúp việc ghi nhớ trở nên tự nhiên hơn.",
        "Khi đọc sách giấy, chúng ta gần như tách biệt khỏi thế giới số, không có thông báo, không có mạng xã hội chen ngang. Điều này giúp bạn tập trung sâu hơn và dễ “đắm mình” vào nội dung.",
        "Việc ghi chú trực tiếp lên sách, gạch chân những câu mình thích cũng tạo cảm giác kết nối cá nhân rất rõ ràng với cuốn sách đó."
      ],
      cons: [
        "Sách giấy khá cồng kềnh, đặc biệt nếu bạn đang đọc nhiều cuốn cùng lúc hoặc phải di chuyển thường xuyên.",
        "Giá thành thường cao hơn so với ebook, và việc mua sách cũng không “tức thì” như online.",
        "Bạn không thể tra từ, tìm kiếm nhanh hay đồng bộ ghi chú như các thiết bị số."
      ]
    },
    {
      id: 2,
      title: "Đọc trên laptop",
      subtitle: "cũng khá hiệu quả nhưng không nên đọc trong thời gian dài",
      icon: <Laptop className="w-10 h-10 text-[#F27D26]" />,
      pros: [
        "Laptop rất phù hợp khi bạn đọc để học tập hoặc nghiên cứu, vì bạn có thể vừa đọc vừa ghi chú, tra cứu thông tin hoặc mở nhiều tài liệu cùng lúc.",
        "Màn hình lớn giúp việc đọc các tài liệu dài, file PDF hoặc giáo trình trở nên dễ chịu hơn so với điện thoại.",
        "Bạn có thể dễ dàng tìm kiếm từ khóa, copy nội dung hoặc lưu trữ tài liệu một cách có hệ thống."
      ],
      cons: [
        "Laptop cũng là nơi chứa rất nhiều “sự xao nhãng”: mạng xã hội, công việc, thông báo… chỉ một click là bạn có thể rời khỏi việc đọc.",
        "Việc nhìn màn hình trong thời gian dài dễ gây mỏi mắt, đặc biệt nếu bạn đọc liên tục hàng giờ.",
        "Trải nghiệm đọc trên laptop thường mang tính “công việc” nhiều hơn là “thưởng thức”, nên khó tạo cảm hứng đọc lâu dài."
      ]
    },
    {
      id: 3,
      title: "Điện thoại",
      subtitle: "tiện lợi nhưng dễ mất tập trung",
      note: "Trên điện thoại bạn có thể tải nhiều ứng dụng đọc sách (Apple Books)",
      icon: <Smartphone className="w-10 h-10 text-[#F27D26]" />,
      pros: [
        "Chính vì điện thoại là thứ chúng ta luôn mang theo bên mình, nên việc đọc sách trở nên cực kỳ linh hoạt – bạn có thể đọc ở bất cứ đâu, bất cứ lúc nào.",
        "Các app đọc sách hiện nay hỗ trợ highlight, ghi chú, tra từ vựng rất nhanh, đặc biệt hữu ích khi đọc sách tiếng Anh.",
        "Kho sách đa dạng, chỉ cần vài thao tác là bạn có thể bắt đầu một cuốn sách mới ngay lập tức."
      ],
      cons: [
        "Màn hình nhỏ khiến việc đọc lâu trở nên khá mỏi mắt, đặc biệt với những cuốn sách dài.",
        "Điện thoại cũng là “nguồn gây xao nhãng lớn nhất” – tin nhắn, thông báo, mạng xã hội luôn sẵn sàng kéo bạn ra khỏi việc đọc.",
        "Trải nghiệm đọc bị “chia nhỏ”, khó tạo được sự tập trung sâu hoặc cảm xúc liền mạch."
      ]
    },
    {
      id: 4,
      title: "Máy đọc sách",
      subtitle: "sự cân bằng giữa tiện lợi và tập trung",
      icon: <Tablet className="w-10 h-10 text-[#F27D26]" />,
      pros: [
        "Màn hình e-ink được thiết kế gần giống giấy thật, giúp bạn đọc trong thời gian dài mà không bị mỏi mắt như khi dùng điện thoại hay laptop.",
        "Thiết bị nhẹ, pin lâu (có thể dùng hàng tuần), và có thể lưu trữ hàng nghìn cuốn sách – rất phù hợp cho người đọc thường xuyên.",
        "Bạn vẫn có đầy đủ tiện ích như highlight, ghi chú, tra từ vựng, nhưng lại không bị làm phiền bởi thông báo hay ứng dụng khác.",
        "Giá ebook thường rẻ hơn sách giấy, giúp bạn tiết kiệm chi phí nếu đọc nhiều."
      ],
      cons: [
        "Cần đầu tư thiết bị ban đầu, có thể là một rào cản với người mới.",
        "Đa số Kindle không có màu, nên không phù hợp với sách có nhiều hình ảnh hoặc đồ họa.",
        "Dù tiện lợi, nhưng cảm giác “cầm một cuốn sách thật” vẫn là điều khó thay thế hoàn toàn."
      ]
    },
    {
      id: 5,
      title: "Sách nói",
      subtitle: "đọc bằng cách lắng nghe",
      note: "Các ứng dụng sách nói (Audible), hay các kênh youtube đọc sách",
      icon: <Headphones className="w-10 h-10 text-[#F27D26]" />,
      pros: [
        "Sách nói giúp bạn tận dụng những khoảng thời gian “chết” như khi di chuyển, tập thể dục hoặc làm việc nhà để tiếp cận kiến thức.",
        "Giọng đọc truyền cảm có thể giúp câu chuyện trở nên sống động và dễ đi vào cảm xúc hơn.",
        "Đây là lựa chọn rất tốt khi bạn không có thời gian hoặc không đủ năng lượng để ngồi đọc."
      ],
      cons: [
        "Việc nghe dễ bị gián đoạn và khó tập trung, đặc biệt với những nội dung phức tạp hoặc cần suy ngẫm.",
        "Bạn không thể highlight hay ghi chú trực tiếp như khi đọc.",
        "Rất dễ rơi vào trạng thái “nghe nhưng không nhớ”, vì não không xử lý sâu như khi đọc."
      ]
    },
    {
      id: 6,
      title: "Bản tóm tắt",
      subtitle: "nhanh nhưng không đủ",
      note: "Kênh YouTube tóm tắt sách mà Kate thích nhất là Better Version – nơi những cuốn sách dày hàng trăm trang được chắt lọc thành những video ngắn gọn, rõ ràng và rất dễ “thấm”. Nội dung không chỉ súc tích mà còn mang tính ứng dụng cao, đủ để bạn hiểu nhanh, nhưng vẫn khiến bạn muốn mở cuốn sách ra và đọc thật sự.",
      icon: <FileText className="w-10 h-10 text-[#F27D26]" />,
      pros: [
        "Giúp bạn nắm được ý chính của một cuốn sách trong thời gian rất ngắn.",
        "Phù hợp để khám phá nhanh nội dung hoặc chọn lọc sách nên đọc.",
        "Tiết kiệm thời gian trong những giai đoạn bận rộn."
      ],
      cons: [
        "Bạn chỉ tiếp cận “kết luận”, mà bỏ qua toàn bộ quá trình lập luận – thứ thực sự giúp bạn hiểu sâu vấn đề.",
        "Mất đi cảm xúc, câu chuyện và những chi tiết nhỏ làm nên giá trị của cuốn sách.",
        "Dễ tạo cảm giác “mình đã đọc rất nhiều”, nhưng thực chất lại không tích lũy được nhiều kiến thức lâu dài."
      ]
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#F27D26] selection:text-black">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full p-6 z-50 mix-blend-difference">
        <Link to="/" className="inline-flex items-center text-white hover:text-[#F27D26] transition-colors uppercase tracking-widest text-xs font-semibold">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Read with Kate
        </Link>
      </nav> */}

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="text-[#F27D26] text-sm font-bold tracking-[0.2em] uppercase mb-6 flex items-center">
            <Sparkles className="w-4 h-4 mr-2" />
            Góc nhìn & Trải nghiệm
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Phương tiện <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D26] to-[#ff9d5c]">đọc sách</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
            Mỗi phương tiện đều mang lại một cảm xúc riêng. Dưới đây là những ưu và nhược điểm từ trải nghiệm thực tế của mình.
          </p>
        </motion.div>
      </header>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="space-y-32">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: Title & Icon */}
                <div className="lg:col-span-5 sticky top-32">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="text-6xl font-black text-[#F27D26]/20 leading-none">
                      0{section.id}
                    </div>
                    {section.icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{section.title}</h2>
                  <p className="text-xl text-[#F27D26] font-serif italic mb-6">"{section.subtitle}"</p>
                  
                  {section.note && (
                    <div className="p-4 border-l-2 border-[#F27D26] bg-white/5 text-sm text-white/70 leading-relaxed">
                      {section.note}
                    </div>
                  )}
                </div>

                {/* Right Column: Pros & Cons */}
                <div className="lg:col-span-7 space-y-12">
                  {/* Pros */}
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6 flex items-center">
                      <span className="w-8 h-[1px] bg-white/20 mr-4"></span>
                      Ưu điểm
                    </h3>
                    <ul className="space-y-6">
                      {section.pros.map((pro, i) => (
                        <li key={i} className="flex items-start text-lg text-white/80 leading-relaxed">
                          <span className="text-[#F27D26] mr-4 mt-1.5">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6 flex items-center">
                      <span className="w-8 h-[1px] bg-white/20 mr-4"></span>
                      Nhược điểm
                    </h3>
                    <ul className="space-y-6">
                      {section.cons.map((con, i) => (
                        <li key={i} className="flex items-start text-lg text-white/80 leading-relaxed">
                          <span className="text-white/40 mr-4 mt-1.5">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-40 pt-20 border-t border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-8 h-8 text-[#F27D26] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif italic mb-12 leading-relaxed">
              Nếu phải chọn một cách đọc khiến mình gắn bó lâu dài, thì mình vẫn nghiêng về việc đọc trên <span className="text-[#F27D26] font-bold not-italic">Kindle</span>.
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed text-left">
              <p>
                Không phải vì nó “hiện đại” hơn, mà vì nó… tiện. Mình có thể mang theo cả một “thư viện nhỏ” trong túi, đọc bất cứ lúc nào mình muốn – khi chờ xe, khi nằm trước khi ngủ, hay những lúc chỉ cần một chút yên tĩnh.
              </p>
              <p>
                E-book cũng rẻ hơn sách giấy, nên mình không còn phải đắn đo quá nhiều trước khi mua một cuốn sách mới. Và điều mình thích nhất là cảm giác được highlight, ghi chú, tra từ ngay lập tức – mọi thứ diễn ra rất tự nhiên, không làm gián đoạn mạch đọc.
              </p>
              <p>
                Dù vậy, mình vẫn nghĩ mỗi phương tiện đều có một “cảm xúc” riêng. Sách giấy dành cho những lúc muốn chậm lại. Điện thoại dành cho những lúc tranh thủ. Còn Kindle… là thứ ở giữa – đủ tiện lợi để duy trì thói quen, nhưng vẫn đủ “yên tĩnh” để mình thật sự đọc.
              </p>
              <p>
                Nếu Kindle là “nơi mình đọc nghiêm túc”, thì audiobook lại giống như một người bạn đồng hành. Những lúc mình không đủ tập trung để đọc, mình vẫn có thể “tiêu thụ” kiến thức theo một cách nhẹ nhàng hơn.
              </p>
              <p>
                Còn book summary thì giống như việc… lướt qua một cuốn sách trước khi quyết định có nên yêu nó hay không. Mình từng có giai đoạn chỉ đọc summary, vì nghĩ như vậy là “hiệu quả”. Nhưng sau đó, mình nhận ra mình nhớ rất ít – và gần như không có cảm xúc gì với những gì mình đọc.
              </p>
              
              <div className="mt-12 p-8 bg-[#F27D26]/10 border border-[#F27D26]/20 rounded-2xl text-center">
                <p className="text-xl font-bold text-white mb-2">
                  Mình nghĩ không có phương pháp nào là tốt nhất tuyệt đối.
                </p>
                <p className="text-[#F27D26] mb-6">
                  Quan trọng là: Bạn đang ở trạng thái nào? Bạn muốn đọc để làm gì?
                </p>
                <p className="text-white/80 italic">
                  Chúc bạn sẽ tìm được phương pháp đọc hiệu quả nhất cho riêng mình, và luôn giữ được niềm vui khi bước vào thế giới của những trang sách!!
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
