import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({data, click, classes}) => {
  const onClickHandler = (event) => {
    click(data.id);
  };

  return (
    <div className={classes} onClick={onClickHandler}>
      {data.name}
    </div>
  );
};

Todo.propTypes = {
  data: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
  classes: PropTypes.string
};

export default Todo;


