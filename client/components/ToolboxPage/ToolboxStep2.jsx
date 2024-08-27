export default function ToolboxStep2({ keywords }) {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="h4">Get Keywords</h4>

      <div>
        {keywords.map((word, idx) => (
          <p key={idx}>{word}</p>
        ))}
      </div>
    </div>
  );
}
