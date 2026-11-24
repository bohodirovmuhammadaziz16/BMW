import { useEffect, useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CheckCircle2, MapPin, Phone, Clock, Send } from 'lucide-react';
import { HERITAGE_MODELS, NEW_BMW_MODELS } from '../data/bmwModels';

interface ContactSectionProps {
  preselectedModel: string;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  model: string;
  requestType: 'Test-drayvga yozilish' | 'Narx va komplektatsiya' | '3D Maslahat';
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
}

const ALL_MODEL_OPTIONS = [
  ...NEW_BMW_MODELS.map((m) => m.name),
  ...HERITAGE_MODELS.map((m) => `${m.year} ${m.name}`),
];

const REQUEST_TYPES: FormState['requestType'][] = [
  'Test-drayvga yozilish',
  'Narx va komplektatsiya',
  '3D Maslahat',
];

export function ContactSection({ preselectedModel }: ContactSectionProps) {
  const prefersReduced = useReducedMotion();
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    model: NEW_BMW_MODELS[0].name,
    requestType: 'Test-drayvga yozilish',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedModel) {
      setForm((prev) => ({ ...prev, model: preselectedModel }));
    }
  }, [preselectedModel]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Iltimos, ism va familiyangizni to‘liq kiriting.';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 9) {
      nextErrors.phone = 'Telefon raqami kamida 9 ta raqamdan iborat bo‘lishi kerak.';
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailOk) {
      nextErrors.email = 'Yaroqli elektron pochta manzilini kiriting.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    const code = `BMW-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(code);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setErrors({});
    setForm((prev) => ({
      ...prev,
      fullName: '',
      phone: '',
      email: '',
      message: '',
    }));
  };

  return (
    <section
      id="aloqa"
      className="bg-[#07080A] text-white py-20 lg:py-28 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Registration Info & Concierge Details */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#8A919E] tracking-wide mb-3">
                Aloqa va Ro‘yxatdan o‘tish
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4"
                style={{ textWrap: 'balance' }}
              >
                Shaxsiy test-drayv yoki maslahat uchun so‘rov yuboring
              </h2>
              <p className="text-base text-[#C4C9D2] leading-relaxed">
                O‘zingizga ma’qul BMW modelini tanlab, qisqa ro‘yxatdan o‘ting. Mutaxassislarimiz
                komplektatsiya, 3D konfiguratsiya va test-drayv vaqti bo‘yicha siz bilan bog‘lanadi.
              </p>
            </div>

            <div className="space-y-5 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#C4C9D2] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-white">Avtosalon va Ko‘rgazma</div>
                  <div className="text-sm text-[#8A919E]">
                    Toshkent sh., Amir Temur shoh ko‘chasi, 107B · Myunxen BMW Welt hamkorlik markazi
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#C4C9D2] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-white">Bog‘lanish markazi</div>
                  <div className="text-sm text-[#8A919E] tabular-nums">+998 71 200 00 16</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#C4C9D2] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-white">Ish tartibi</div>
                  <div className="text-sm text-[#8A919E] tabular-nums">
                    Dushanba — Shanba: 09:00 dan 20:00 gacha
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Registration & Inquiry Form */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#101216] border border-white/10 rounded-xl p-6 sm:p-8"
          >
            {submittedRef ? (
              <div className="py-10 text-center space-y-5">
                <CheckCircle2 className="w-12 h-12 text-white mx-auto" strokeWidth={1.5} />
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white">
                    So‘rovingiz muvaffaqiyatli qabul qilindi
                  </h3>
                  <p className="text-sm text-[#C4C9D2] max-w-md mx-auto leading-relaxed">
                    Hurmatli <span className="text-white font-medium">{form.fullName}</span>, sizning{' '}
                    <span className="text-white font-medium">{form.model}</span> bo‘yicha{' '}
                    <span className="text-white font-medium">{form.requestType.toLowerCase()}</span>{' '}
                    so‘rovingiz ro‘yxatga olindi.
                  </p>
                </div>

                <div className="inline-block px-4 py-2 bg-[#07080A] border border-white/15 rounded-md text-xs text-[#C4C9D2] tabular-nums">
                  Murojaat raqami: <strong className="text-white">{submittedRef}</strong>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 text-sm font-medium bg-white text-[#07080A] hover:bg-[#E2E5EB] rounded-md transition-colors"
                  >
                    Yangi so‘rov yuborish
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="bmw-fullname"
                      className="block text-xs font-medium text-[#C4C9D2] mb-2"
                    >
                      Ism va familiya *
                    </label>
                    <input
                      id="bmw-fullname"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Masalan: Azizbek Karimov"
                      className="w-full px-4 py-3 text-sm bg-[#07080A] border border-white/15 rounded-md text-white placeholder-[#5B6270] focus:outline-none focus:border-white transition-colors"
                    />
                    {errors.fullName && (
                      <p role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="bmw-phone"
                      className="block text-xs font-medium text-[#C4C9D2] mb-2"
                    >
                      Telefon raqami *
                    </label>
                    <input
                      id="bmw-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+998 90 123 45 67"
                      className="w-full px-4 py-3 text-sm bg-[#07080A] border border-white/15 rounded-md text-white placeholder-[#5B6270] focus:outline-none focus:border-white transition-colors tabular-nums"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="bmw-email"
                      className="block text-xs font-medium text-[#C4C9D2] mb-2"
                    >
                      Elektron pochta *
                    </label>
                    <input
                      id="bmw-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="ismingiz@example.com"
                      className="w-full px-4 py-3 text-sm bg-[#07080A] border border-white/15 rounded-md text-white placeholder-[#5B6270] focus:outline-none focus:border-white transition-colors"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Model Selection */}
                  <div>
                    <label
                      htmlFor="bmw-model"
                      className="block text-xs font-medium text-[#C4C9D2] mb-2"
                    >
                      Qiziqtirgan BMW modeli
                    </label>
                    <select
                      id="bmw-model"
                      value={form.model}
                      onChange={(e) => setForm({ ...form, model: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-[#07080A] border border-white/15 rounded-md text-white focus:outline-none focus:border-white transition-colors"
                    >
                      {ALL_MODEL_OPTIONS.map((modelName) => (
                        <option key={modelName} value={modelName} className="bg-[#101216]">
                          {modelName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Request Type Segmented Buttons */}
                <div>
                  <span className="block text-xs font-medium text-[#C4C9D2] mb-2">
                    Murojaat maqsadi
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {REQUEST_TYPES.map((type) => {
                      const active = form.requestType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, requestType: type })}
                          className={`px-3 py-2.5 text-xs font-medium rounded-md border transition-colors whitespace-nowrap ${
                            active
                              ? 'bg-white text-[#07080A] border-white'
                              : 'bg-[#07080A] text-[#C4C9D2] border-white/15 hover:border-white/40 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label
                    htmlFor="bmw-message"
                    className="block text-xs font-medium text-[#C4C9D2] mb-2"
                  >
                    Qo‘shimcha savol yoki izoh (ixtiyoriy)
                  </label>
                  <textarea
                    id="bmw-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Qulay vaqt, rang yoki komplektatsiya bo‘yicha istaklaringiz..."
                    className="w-full px-4 py-3 text-sm bg-[#07080A] border border-white/15 rounded-md text-white placeholder-[#5B6270] focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#8A919E]">
                    Barcha ma’lumotlar faqat murojaatingizga javob berish uchun ishlatiladi.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-white text-[#07080A] hover:bg-[#E2E5EB] transition-colors rounded-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span>Ro&apos;yxatdan o&apos;tib yuborish</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
