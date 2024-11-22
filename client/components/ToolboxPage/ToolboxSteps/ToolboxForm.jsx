import Button from "@/components/ui/Button";

// This renders a modular form for the Toolbox
export default function ToolboxForm({ formData, handleSubmit, value, onChange, loading }) {
  return (
    <div className="flex flex-col justify-between gap-4 h-full">
      <h4 className="body-txt-lg-bold text-secondary">{formData.title}</h4>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center md:items-end w-full h-full justify-between"
      >
        <textarea
          className="w-full h-56 md:h-96 p-4 rounded overflow-scroll outline-primary/20"
          placeholder={formData.placeholderText}
          value={value}
          onChange={onChange}
        />

        <Button
          type="submit"
          text={loading ? `${formData.loadingTxt}` : "Submit"}
          disabled={loading}
        />
      </form>
    </div>
  );
}
