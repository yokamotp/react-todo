import "./styles.css";

export default function App() {
  return (
    <>
      <div>
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のToDO</p>
        <ul>
          <li>
            <div>
              ああああ
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のToDO</p>
        <ul>
          <li>
            <div>
              いいいい
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
