import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction, toggleTodoAction } from '../store/actions'
import Todo from '../components/Todo';
import cx from 'classnames';

class TodoList extends Component {
  addItem = (event) => {
      event.preventDefault();
      console.log('this.props', this.props);
      this.props.addTodo(this.refs.addInput.value);
  };

  clickHandler = (id) => {
    this.props.toggleTodo(id);
  };

  render() {
    const todos = this.props.todoItems.map((item) => (
        <Todo
          key={item.id}
          classes={cx({"is-done": item.done})}
          data={item}
          click={this.clickHandler}
        />
      )
    );

    return (
      <div className="TodoList">
        <div>
          <h2>
            Todo List
          </h2>
          <div>
            <form onSubmit={this.addItem}>
              <input type="text" ref="addInput"/>
              <input
                type="submit"
                value="+"/>
            </form>
          </div>
        </div>
        <div>
          {todos}
        </div>
        <style>{`
            .is-done {
                text-decoration: line-through;
            }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoItems: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: data => dispatch(addTodoAction(data)),
  toggleTodo: id => dispatch(toggleTodoAction(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

