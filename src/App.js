import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    //thenはURLから値をとってきた後に行う処理を指定している
    //catchはエラー時に行う処理を指定できる
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のusers</button>
    </div>
  );
}
