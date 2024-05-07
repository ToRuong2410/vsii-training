import React, { useState } from 'react';

const Todolist = () => {
  const [todo, setTodo] = useState<any>([]);
  const [input, setInput] = useState<string>('');

  const onClickAdd = () => {
    console.log('them thanh cong');

    setTodo([...todo, input]);
    setInput('');
  };
  const onClickDelete = (index: number) => {
    const newTodo = todo.filter((_: string, i: number) => i !== index);
    setTodo(newTodo);
    console.log('xoa thanh cong');
  };
  const onClickEdit = (index: number) => {
    const newTodo = prompt('Edit todo:', todo[index]);
    console.log('thong tin sua moi', newTodo);

    if (newTodo !== null) {
      todo[index] = newTodo;
      const editTodos = [...todo];
      setTodo(editTodos);
    }
  };
  return (
    <div>
      <h2>Bài 2</h2>
      <div style={{ display: 'flex' }}>
        Nhập dữ liệu
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            onClickAdd();
          }}
        >
          Thêm
        </button>
      </div>
      <div>
        {todo.map((value: string, index: number) => {
          return (
            <div style={{ display: 'flex' }} key={index}>
              <li>{value}</li>
              <button
                onClick={() => {
                  onClickEdit(index);
                }}
              >
                Chỉnh sửa
              </button>
              <button
                onClick={() => {
                  onClickDelete(index);
                }}
              >
                Xóa
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
