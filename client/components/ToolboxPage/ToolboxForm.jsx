import Button from "../Button";

export default function ToolboxForm({ formData, handleSubmit, value, onChange, loading }) {
  return (
    <div className="flex flex-col justify-between gap-4 h-full">
      <h4 className="body-txt-lg-bold text-secondary">{formData.title}</h4>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center md:items-end w-full h-full justify-between"
      >
        <textarea
          className="w-full h-full p-2 pb-10 md:p-6 rounded overflow-scroll outline-primary/20"
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
