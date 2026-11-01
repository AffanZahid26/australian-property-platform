"use client";

export function AppraisalForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Appraisal request sent (demo — no backend).");
      }}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="First Name*" name="firstName" required />
        <Field label="Last Name*" name="lastName" required />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Email*" name="email" type="email" required />
        <Field label="Phone" name="phone" />
      </div>
      <Field label="Property Address*" name="address" required />
      <Select
        label="How can we help?*"
        name="help"
        required
        options={[
          "I’m not selling but curious",
          "I am considering selling but need to know my figures",
          "I’ve decided to sell my property",
          "Something else.",
        ]}
      />
      <Select
        label="How can we reach you back?"
        name="reach"
        options={[
          "I’d prefer a phone call",
          "I’d prefer an sms",
          "I’d prefer an email",
        ]}
      />
      <label className="block">
        <span className="text-sm text-muted">
          Anything else we should know about you or your property?
        </span>
        <textarea
          name="notes"
          rows={4}
          className="mt-1 w-full border border-line bg-cream/40 px-3 py-2 outline-none focus:border-sky"
        />
      </label>
      <button
        type="submit"
        className="bg-sky text-white px-8 py-3 text-sm tracking-wide hover:bg-primary-deep transition"
      >
        Submit
      </button>
    </form>
  );
}

export function ManageForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Rental appraisal request sent (demo — no backend).");
      }}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="First Name*" name="firstName" required />
        <Field label="Last Name*" name="lastName" required />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Email*" name="email" type="email" required />
        <Field label="Phone" name="phone" />
      </div>
      <Field label="Property Address*" name="address" required />
      <Select
        label="How can we help?*"
        name="help"
        required
        options={[
          "I’m looking to rent out my property",
          "I’m unhappy with my current property manager",
          "Something else",
        ]}
      />
      <Select
        label="How can we reach you back?"
        name="reach"
        options={[
          "I’d prefer a phone call",
          "I’d prefer an sms",
          "I’d prefer an email",
        ]}
      />
      <label className="block">
        <span className="text-sm text-muted">Message*</span>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full border border-line bg-cream/40 px-3 py-2 outline-none focus:border-sky"
        />
      </label>
      <button
        type="submit"
        className="bg-sky text-white px-8 py-3 text-sm tracking-wide hover:bg-primary-deep transition"
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
        className="mt-1 w-full border border-line bg-cream/40 px-3 py-2 outline-none focus:border-sky"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm text-muted">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-1 w-full border border-line bg-cream/40 px-3 py-2 outline-none focus:border-sky"
      >
        <option value="" disabled>
          Select…
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
