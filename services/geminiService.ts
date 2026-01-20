import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBookReview = async (title: string, author: string): Promise<string> => {
  try {
    const prompt = `Viết một bài review sách ngắn gọn, hấp dẫn (khoảng 150-200 từ) cho cuốn sách "${title}" của tác giả "${author}". 
    Phong cách viết: Sâu sắc, cá nhân, phù hợp với blog "Read with Kate". 
    Tập trung vào cảm nhận và bài học chính.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Không thể tạo nội dung lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã xảy ra lỗi khi kết nối với AI. Vui lòng thử lại sau.";
  }
};