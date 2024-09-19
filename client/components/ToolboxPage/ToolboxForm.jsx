import Button from "../Button";

export default function ToolboxForm({ formData, handleSubmit, value, onChange, loading }) {
  return (
    <div className="flex flex-col justify-between gap-4 h-full">
      <h4 className="body-txt-lg-bold text-secondary">{formData.title}</h4>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-end w-full h-full justify-between"
      >
        <textarea
          className="w-full p-6 rounded overflow-scroll outline-primary/20"
          rows="10"
          placeholder={formData.placeholderText}
          value={value}
          onChange={onChange}
        ></textarea>

        <Button
          type="submit"
          text={loading ? `${formData.loadingTxt}` : "Submit"}
          disabled={loading}
        />
      </form>
    </div>
  );
}
