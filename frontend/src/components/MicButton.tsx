interface Props {
  onResult: (text: string) => void;
}

export default function MicButton({ onResult }: Props) {
  const startMic = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Trình duyệt không hỗ trợ Speech API");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "vi-VN";
    recognition.start();

    recognition.onresult = (e: any) => {
      onResult(e.results[0][0].transcript);
    };
  };

  return (
    <button className="mic" onClick={startMic}>
      🎤
    </button>
  );
}
