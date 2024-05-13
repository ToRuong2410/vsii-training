import Dropdown_Menu from './Components/DropdownMenu';
import ImageUpload from './Components/ImageUpload';
import Todolist from './Components/Todolist';
import Validate from './Components/Validate';

function App() {
  return (
    <div>
      {/* <h1>Nguyễn Quang Trường</h1> */}
      <div>{/* <Todolist /> */}</div>

      <div>{/* <Validate /> */}</div>

      <div>
        <h2>---Drop Down Menu---</h2>
        <Dropdown_Menu />
        <h2>---Upload File---</h2>
        <ImageUpload />
      </div>
    </div>
  );
}

export default App;
