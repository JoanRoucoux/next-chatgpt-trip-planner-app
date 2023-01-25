import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import { calculateDateDiff, getPaceLabel } from '../../commons';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generatePrompt = (req: NextApiRequest): string => {
  const { country, endDate, pace, startDate, travelers } = req.body;
  const promptTemplate =
    'Plan a AAAA days trip to BBBB for CCCC people, ' +
    'pace should be DDDD and give me an overall cost estimate at the end.';
  return promptTemplate
    .replace('AAAA', calculateDateDiff(startDate, endDate).toString())
    .replace('BBBB', country)
    .replace('CCCC', travelers)
    .replace('DDDD', getPaceLabel(pace));
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt(req),
      temperature: 0.6,
      max_tokens: 2048,
    });
    res.status(200).json({
      result: completion.data.choices[0].text,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'An error occurred during the request.',
      },
    });
  }
};

export default handler;
