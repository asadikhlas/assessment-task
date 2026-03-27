import type { Assessment } from '../types/assessment';
import { assessments } from '../data/assessments';

const MOCK_DELAY_MS = 1600;

export const getAssessments = async (): Promise<Assessment[]> => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(assessments as Assessment[]);
    }, MOCK_DELAY_MS);
  });
};
