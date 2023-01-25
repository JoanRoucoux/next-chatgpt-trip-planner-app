import { format, parseISO } from 'date-fns';

const getFormattedDate = (date: string | null): string =>
  date ? format(parseISO(date), 'MM/dd/yyyy') : '';

export const calculateDateDiff = (
  startDate: string,
  endDate: string
): number => {
  const formattedStartDate = getFormattedDate(startDate);
  const formattedEndDate = getFormattedDate(endDate);
  return Math.floor(
    (Date.parse(formattedEndDate) - Date.parse(formattedStartDate)) / 86400000
  );
};
