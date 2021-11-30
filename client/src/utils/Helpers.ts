import moment from 'moment';
export function convertToDate(month: string, year: string): moment.Moment {
  const convertedDate = moment(`${year}-${month}-01`, 'YYYY-MMM-DD');
  return convertedDate;
}
