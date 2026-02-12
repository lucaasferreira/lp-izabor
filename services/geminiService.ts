import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists (handled gracefully in UI if not)
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const askGeminiAboutCourse = async (question: string): Promise<string> => {
  if (!ai) {
    return "API Key not configured. Please check environment variables.";
  }

  try {
    const modelId = 'gemini-3-flash-preview';
    
    // Context about the course to ground the answers
    const context = `
      Você é um assistente virtual para o curso "Desafio 21 Dias - Método PAUSA" da Izabor Cruz.
      
      Sobre o curso:
      - O objetivo é sair do piloto automático e viver com propósito.
      - É um método chamado C.L.A.R.E.
      - Dura 21 dias.
      - Para mulheres que se sentem sobrecarregadas, ansiosas ou distantes da fé.
      - Não é apenas teoria, é prática (10-15 min por dia).
      - Preço/Vagas: Vagas limitadas para 50 mulheres.
      
      Responda a seguinte pergunta da usuária de forma curta, empática e persuasiva para comprar o curso:
      "${question}"
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: context,
    });

    return response.text || "Desculpe, não consegui processar sua pergunta agora.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao consultar o assistente.";
  }
};