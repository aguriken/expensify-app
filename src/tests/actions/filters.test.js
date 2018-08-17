import moment from 'moment';
import { 
  setStartDate, 
  setEndDate, 
  sortByAmount, 
  sortByDate, 
  setTextFilter 
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('sohuld generate set text filter object with value', () => {
  const text = 'Anything'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('sohuld generate set text filter object with default', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('sohuld generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
})

test('sohuld generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
})