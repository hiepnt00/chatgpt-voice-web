import MicButton from "./MicButton";

interface Props {
  messages: any[];
  input: string;
  setInput: (v: string) => void;
  send: () => void;
}

export default function ChatBox({
  messages,
  input,
  setInput,
  send,
}: Props) {
  return (
    <div className="chat">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={m.role}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <MicButton onResult={setInput} />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nói hoặc nhập câu hỏi..."
        />
        <button onClick={send}>Gửi</button>
      </div>
    </div>
  );
}
