"use client";

export function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Enquiry sent (demo — no backend).");
      }}
    >
      <Field label="Your Name" name="name" required />
      <Field label="Phone" name="phone" />
      <Field label="Email" name="email" type="email" required />
      <fieldset className="space-y-2">
        <legend className="text-sm text-muted mb-2">Enquiry type</legend>
        {[
          "General",
          "Sales Appraisal",
          "Rental Appraisal",
          "Buying Enquiry",
          "Rental Enquiry",
        ].map((opt) => (
          <label key={opt} className="flex items-center gap-2 text-sm">
            <input type="radio" name="type" value={opt} defaultChecked={opt === "General"} />
            {opt}
          </label>
        ))}
      </fieldset>
      <label className="block">
        <span className="text-sm text-muted">Enquiry</span>
        <textarea
          name="message"
          rows={5}
          className="mt-1 w-full border-b border-line bg-transparent py-2 outline-none focus:border-primary"
        />
      </label>
      <button
        type="submit"
        className="bg-primary text-white px-8 py-3 text-sm tracking-wide hover:bg-primary-deep transition"
      >
        Submit
      </button>
    </form>
  );
}

export function AppraisalForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Appraisal request sent (demo — no backend).");
      }}
    >
      <Field label="Name" name="name" required />
      <Field label="Phone" name="phone" />
      <Field label="Email" name="email" type="email" required />
      <div className="grid grid-cols-3 gap-4">
        <Select label="Bedrooms" name="beds" options={["1", "2", "3", "4", "5+"]} />
        <Select label="Bathrooms" name="baths" options={["1", "2", "3", "4+"]} />
        <Select label="Car" name="cars" options={["0", "1", "2", "3+"]} />
      </div>
      <Field label="Address" name="address" required />
      <label className="block">
        <span className="text-sm text-muted">Comments</span>
        <textarea
          name="comments"
          rows={4}
          className="mt-1 w-full border-b border-line bg-transparent py-2 outline-none focus:border-primary"
        />
      </label>
      <button
        type="submit"
        className="bg-primary text-white px-8 py-3 text-sm tracking-wide hover:bg-primary-deep transition"
      >
        Submit
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full border-b border-line bg-transparent py-2 outline-none focus:border-primary"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-sm text-muted">{label}</span>
      <select
        name={name}
        className="mt-1 w-full border-b border-line bg-transparent py-2 outline-none"
        defaultValue=""
      >
        <option value="" disabled>
          —
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
