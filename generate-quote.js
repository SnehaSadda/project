// netlify/functions/generate-quote.js

import fetch from 'node-fetch';

export async function handler(event, context) {
  try {
    const { name, category } = JSON.parse(event.body);

    // Create prompt for OpenAI
    const prompt = `Give a short motivational quote for someone about ${category}.
    Make it positive and encouraging.
    If a name is given, personalize it for ${name || 'them'}.
    Keep it under 25 words.`;

    // Call OpenAI securely
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    // Extract AI-generated quote
    const aiQuote = data.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ quote: aiQuote }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
