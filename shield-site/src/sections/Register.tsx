import { useId, useState, type DragEvent, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretDown, CheckCircle, FileText, Phone, UploadSimple, X } from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { PHONE, PHONE_HREF, register } from "../lib/content";

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "mobile" | "consent" | "privacy", string>>;

const inputCls =
  "h-12 w-full rounded-xl bg-canvas px-4 text-[15px] text-ink ring-1 ring-line outline-none transition-shadow duration-300 placeholder:text-muted focus:ring-2 focus:ring-focus aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-danger";

function Field({ label, error, children, id, className = "" }: { label: string; error?: string; children: ReactNode; id: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-[14px] font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-[13px] font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({ id, name, placeholder, options }: { id: string; name: string; placeholder: string; options: string[] }) {
  const [value, setValue] = useState("");
  return (
    <div className="relative">
      <select id={id} name={name} value={value} onChange={(e) => setValue(e.target.value)} className={`${inputCls} appearance-none pr-10 ${value ? "" : "text-muted"}`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <CaretDown size={16} weight="bold" aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
    </div>
  );
}

function validate(data: FormData): Errors {
  const e: Errors = {};
  const val = (k: string) => String(data.get(k) ?? "").trim();
  if (!val("firstName")) e.firstName = "Enter your first name.";
  if (!val("lastName")) e.lastName = "Enter your last name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val("email"))) e.email = "Enter an email address like name@example.com.";
  if (val("mobile").replace(/\D/g, "").length < 8) e.mobile = "Enter a mobile number we can call.";
  if (!data.get("consent")) e.consent = "We need your agreement before we can contact you.";
  if (!data.get("privacy")) e.privacy = "Please confirm you have read the Privacy Collection Statement.";
  return e;
}

export function Register() {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const reduce = useReducedMotion();
  const [errors, setErrors] = useState<Errors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)].slice(0, 10));
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(id(first))?.focus();
      return;
    }
    // Mock-up only: the live form posts to Formstack, which feeds Actionstep.
    setName(String(data.get("firstName")).trim());
    setState("sending");
    window.setTimeout(() => setState("sent"), 900);
  };

  const err = (k: keyof Errors) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${id(k)}-error` } : {});

  return (
    <section id="register" className="border-y border-line bg-surface-2 py-20 md:py-32">
      <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-32">
          <span className="inline-flex rounded-full bg-surface px-3.5 py-1.5 text-[12.5px] font-medium text-brand-text ring-1 ring-line">{register.eyebrow}</span>
          <h2 className="mt-5 max-w-[16ch] text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[52px]">{register.title}</h2>
          {register.leads.map((l) => (
            <p key={l} className="mt-5 max-w-[48ch] text-[18px] leading-relaxed text-muted">
              {l}
            </p>
          ))}
          <a href={PHONE_HREF} className="group mt-8 inline-flex items-center gap-3 text-[16px] font-medium text-ink">
            <span className="grid size-11 place-items-center rounded-full bg-surface text-brand-text ring-1 ring-line transition-transform duration-500 ease-spring group-hover:-translate-y-0.5">
              <Phone size={19} weight="duotone" aria-hidden />
            </span>
            Call {PHONE}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[32px] bg-surface/60 p-2 ring-1 ring-line">
            <div className="rounded-[24px] bg-surface p-6 shadow-[0_30px_60px_-40px_rgb(14_32_58/0.45)] md:p-8">
              <AnimatePresence mode="wait" initial={false}>
                {state === "sent" ? (
                  <motion.div
                    key="sent"
                    role="status"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex min-h-[420px] flex-col items-start justify-center gap-5"
                  >
                    <span className="grid size-14 place-items-center rounded-2xl bg-brand text-signal">
                      <CheckCircle size={30} weight="fill" aria-hidden />
                    </span>
                    <h3 className="text-[28px] font-semibold tracking-[-0.03em]">Thank you, {name}.</h3>
                    <p className="max-w-[46ch] text-[17px] leading-relaxed text-muted">We will review what you send and contact you within five business days.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" noValidate onSubmit={onSubmit} exit={reduce ? undefined : { opacity: 0, y: -12 }} className="grid gap-5 sm:grid-cols-2">
                    <Field label="First name" id={id("firstName")} error={errors.firstName}>
                      <input id={id("firstName")} name="firstName" autoComplete="given-name" className={inputCls} {...err("firstName")} />
                    </Field>
                    <Field label="Last name" id={id("lastName")} error={errors.lastName}>
                      <input id={id("lastName")} name="lastName" autoComplete="family-name" className={inputCls} {...err("lastName")} />
                    </Field>
                    <Field label="Email" id={id("email")} error={errors.email}>
                      <input id={id("email")} name="email" type="email" autoComplete="email" className={inputCls} {...err("email")} />
                    </Field>
                    <Field label="Mobile" id={id("mobile")} error={errors.mobile}>
                      <input id={id("mobile")} name="mobile" type="tel" autoComplete="tel" className={inputCls} {...err("mobile")} />
                    </Field>
                    <Field label="Platform or super fund" id={id("platform")}>
                      <Select id={id("platform")} name="platform" placeholder="Macquarie, Equity Trustees, SMSF, other" options={["Macquarie", "Equity Trustees", "SMSF", "Other"]} />
                    </Field>
                    <Field label="Adviser or licensee" id={id("adviser")}>
                      <Select id={id("adviser")} name="adviser" placeholder="MWL, InterPrac, FSGA, UGC, other" options={["MWL", "InterPrac", "FSGA", "UGC", "Other"]} />
                    </Field>
                    <Field label="Amount invested (approximate)" id={id("amount")}>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-muted">$</span>
                        <input id={id("amount")} name="amount" inputMode="numeric" className={`${inputCls} pl-8`} />
                      </div>
                    </Field>
                    <Field label="Has Macquarie repaid your capital?" id={id("repaid")}>
                      <Select id={id("repaid")} name="repaid" placeholder="Select" options={["Yes", "No", "Not sure"]} />
                    </Field>
                    <Field label="Complained to AFCA already?" id={id("afca")}>
                      <Select id={id("afca")} name="afca" placeholder="Select" options={["Yes", "No"]} />
                    </Field>
                    <Field label="Invested through an SMSF?" id={id("smsf")}>
                      <Select id={id("smsf")} name="smsf" placeholder="Yes / No" options={["Yes", "No"]} />
                    </Field>
                    <Field label="Anything else we should know" id={id("notes")} className="sm:col-span-2">
                      <textarea id={id("notes")} name="notes" rows={3} className={`${inputCls} h-auto min-h-24 resize-y py-3 leading-relaxed`} />
                    </Field>

                    <div className="sm:col-span-2">
                      <label
                        onDragOver={(e) => {
                          e.preventDefault();
                          setDragging(true);
                        }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={onDrop}
                        className={`flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-[1.5px] border-dashed px-5 py-6 text-center transition-colors duration-300 ${
                          dragging ? "border-brand-text bg-brand/[0.05]" : "border-line hover:border-brand-text/50"
                        }`}
                      >
                        <span className="grid size-10 place-items-center rounded-full bg-brand/[0.07] text-brand-text">
                          <UploadSimple size={19} weight="bold" aria-hidden />
                        </span>
                        <span className="text-[14.5px] text-body">{register.upload}</span>
                        <input type="file" name="files" multiple className="sr-only" onChange={(e) => addFiles(e.target.files)} />
                      </label>
                      {files.length > 0 && (
                        <ul className="mt-3 grid gap-2">
                          {files.map((f, i) => (
                            <li key={`${f.name}-${i}`} className="flex items-center gap-3 rounded-xl bg-canvas px-3 py-2 text-[14px] text-ink ring-1 ring-line">
                              <FileText size={18} weight="duotone" className="shrink-0 text-brand-text" aria-hidden />
                              <span className="min-w-0 flex-1 truncate">{f.name}</span>
                              <button
                                type="button"
                                aria-label={`Remove ${f.name}`}
                                onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                                className="grid size-7 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                              >
                                <X size={14} weight="bold" aria-hidden />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="grid gap-3 sm:col-span-2">
                      {(["consent", "privacy"] as const).map((k) => (
                        <div key={k}>
                          <label className="flex cursor-pointer items-start gap-3 text-[14.5px] leading-snug text-body">
                            <input id={id(k)} type="checkbox" name={k} className="mt-0.5 size-[18px] shrink-0 cursor-pointer accent-brand" {...err(k)} />
                            <span>{k === "consent" ? register.consent : register.privacy}</span>
                          </label>
                          {errors[k] && (
                            <p id={`${id(k)}-error`} className="mt-1.5 pl-[30px] text-[13px] font-medium text-danger">
                              {errors[k]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="pt-1 sm:col-span-2">
                      <Button type="submit" variant="signal" disabled={state === "sending"}>
                        {state === "sending" ? "Sending" : register.submit}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
