import { InputProps } from '../interfaces';
// same but different way of doing it:
//const InputField: React.FC<props> = ({ todo, setTodo, addToTasklist }) => {

const InputField = ({ todo, setTodo, addToTasklist }: InputProps) => {
  return (
    <form
      className="input__form"
      onSubmit={(e) => {
        addToTasklist(e);
      }}
    >
      <input
        type="text"
        name="task_input"
        id="task_input"
        placeholder="Enter your task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input__submit">
        Add Task
      </button>
    </form>
  );
};

export default InputField;
