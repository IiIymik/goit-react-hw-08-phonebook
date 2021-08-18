import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterValue } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  input: {
    marginBottom: '20px',
    marginTop: '10px',
  }
});

const Filter = () => {
  const valueFilter = useSelector(getFilter)
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      {/* <Input type="text" value={valueFilter} onChange={(e) => dispatch(changeFilterValue(e.currentTarget.value))} />   */}
    <TextField id="input-with-icon-textfield"  variant="filled" size='small' className={classes.input}  InputProps={{
          startAdornment: (
            <InputAdornment  position="start" variant='outlined'>
          <SearchIcon className={classes.icon}/>
            </InputAdornment>
          ),
        }} value={valueFilter} onChange={(e) => dispatch(changeFilterValue(e.currentTarget.value))}/>
    </>)
}

export default Filter
