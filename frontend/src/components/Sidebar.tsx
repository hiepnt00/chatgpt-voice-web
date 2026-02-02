interface Props {
  chats: any[];
  currentChatId: number | null;
  onNewChat: () => void;
  onSelectChat: (id: number) => void;
}

export default function Sidebar({
  chats,
  currentChatId,
  onNewChat,
  onSelectChat,
}: Props) {
  return (
    <div className="sidebar">
      <button onClick={onNewChat}>+ Chat mới</button>

      <input placeholder="Tìm đoạn chat..." />

      {chats.map((chat) => (
        <div
          key={chat.id}
          className="chat-item"
          style={{
            background:
              chat.id === currentChatId ? "#222" : "transparent",
          }}
          onClick={() => onSelectChat(chat.id)}
        >
          {chat.title || "Chat mới"}
        </div>
      ))}
    </div>
  );
}
