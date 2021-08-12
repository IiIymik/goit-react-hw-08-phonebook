import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled.js';
import { changeFilterValue } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';

const Filter = () => {
  const valueFilter = useSelector(getFilter)
  const dispatch = useDispatch();
  
  return (
    <Label>
            Find Your Contact =>
      <Input type="text" value={valueFilter} onChange={(e)=> dispatch(changeFilterValue(e.currentTarget.value))} />
    </Label>
  )
}

export default Filter
