import React from "react";
import { Instagram, Youtube } from "lucide-react";
import { SiteConfig } from "../types";
import kate from "../assets/images/kate.jpg";

interface AboutProps {
  config: SiteConfig;
}

const About: React.FC<AboutProps> = ({ config }) => {
  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Image */}
          <div className="w-full md:w-1/2 relative group">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"
              style={{ backgroundColor: config.themeColor }}
            ></div>
            <img
              // src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop"
              src={kate}
              alt="Kate reading"
              className="relative z-10 w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="font-serif text-5xl text-white">Về Kate</h1>
            <div
              className="h-1 w-16"
              style={{ backgroundColor: config.themeColor }}
            ></div>

            <div className="text-neutral-300 space-y-4 leading-relaxed font-light text-lg">
              <p>
                Chào bạn, mình là Kate, tên thật là Trang Thật ra trước đây mình
                không phải là một người thích đọc sách. Mình khá lười đọc và
                thường chọn những cách tiếp nhận thông tin nhanh hơn như nghe
                podcast hay xem video. Nhưng mọi thứ bắt đầu thay đổi khi mình
                tham gia một thử thách đọc sách 28 ngày để nhận thưởng. Ban đầu
                chỉ là thử cho biết, nhưng càng đọc mình càng nhận ra giá trị
                của việc đọc sách mang lại.
              </p>
              <p>
                So với podcast hay video, việc đọc sách giúp mình hiểu sâu hơn,
                suy nghĩ chậm lại và nhìn nhận vấn đề rõ ràng hơn. Từ đó, mình
                bắt đầu duy trì thói quen đọc sách, dù không phải lúc nào cũng
                dễ dàng.
              </p>
              <p>
                Website này được mình tạo ra như một không gian nhỏ để lưu lại
                hành trình thay đổi của bản thân. Sau mỗi cuốn sách, mình viết
                lại cảm nhận, những điều khiến mình ấn tượng và những bài học
                mình rút ra. Mình hy vọng những chia sẻ này có thể giúp bạn hiểu
                nhanh nội dung sách và tìm được cuốn phù hợp với mình.
              </p>
              <p>
                Ở đây, mình thường review các thể loại như sách phát triển bản
                thân, hồi ký, kinh tế và sách truyền cảm hứng. Những bài viết
                không mang tính học thuật, mà chỉ đơn giản là góc nhìn cá nhân
                của mình – một người từng không thích đọc sách nhưng đang cố
                gắng duy trì thói quen này mỗi ngày.
              </p>
              <p>
                Mình vẫn rất thích nghe podcast và xem video, nhưng mình tin
                rằng đọc sách là một cách khác để hiểu thế giới sâu sắc hơn. Và
                nếu bạn cũng giống mình trước đây – từng ngại đọc sách – thì hy
                vọng bạn sẽ tìm thấy một chút động lực khi ghé thăm website này.
              </p>
              <p>
                Rất vui nếu được đồng hành cùng bạn trên hành trình đọc sách
              </p>
            </div>

            <div className="pt-8">
              <h3
                className="text-sm uppercase tracking-widest font-bold mb-4"
                style={{ color: config.themeColor }}
              >
                Kết nối với mình
              </h3>
              <div className="flex space-x-4">
                {/* <button className="flex items-center space-x-2 text-white bg-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-700 transition-colors">
                  <Youtube size={18} /> <span>YouTube</span>
                </button> */}
                <button
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/imkate.mz/",
                      "_blank",
                    );
                  }}
                  className="flex items-center space-x-2 text-white bg-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-700 transition-colors"
                >
                  <Instagram size={18} /> <span>Instagram</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
