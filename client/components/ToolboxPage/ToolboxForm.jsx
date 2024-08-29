import Button from "../Button";

export default function ToolboxForm({ formData, handleSubmit, value, onChange, loading }) {
  return (
    <div className="flex flex-col gap-4 h-full">
    <h4 className="h4">{formData.title}</h4>

    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full h-full justify-between"
    >
      <textarea
        className="w-full p-6 rounded overflow-scroll mb-4"
        rows="11"
        placeholder={formData.placeholderText}
        value={value}
        onChange={onChange}
      ></textarea>

      <Button type="submit" text={loading ? `${formData.loadingTxt}` : "Submit"} disabled={loading} />
    </form>
  </div>
  );
}