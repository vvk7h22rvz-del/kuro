'use client'

import { useState, type ReactNode } from 'react'
import Image from 'next/image'
import { CelestialBackdrop } from '@/components/celestial-backdrop'

const FIELDS = [
  '恋愛',
  '復縁',
  '結婚',
  '仕事',
  '人間関係',
  '金運',
  '家庭',
  'その他',
] as const

type FormState = {
  email: string
  emailConfirm: string
  name: string
  birthday: string
  partnerBirthday: string
  topic: string
  relationship: string
  situation: string
  wantToKnow: string
  idealFuture: string
}

const initialState: FormState = {
  email: '',
  emailConfirm: '',
  name: '',
  birthday: '',
  partnerBirthday: '',
  topic: '',
  relationship: '',
  situation: '',
  wantToKnow: '',
  idealFuture: '',
}

const inputClass =
  'w-full rounded-lg border border-border bg-input/60 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/60'

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 py-1" aria-hidden="true">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  )
}

function Field({
  label,
  required,
  htmlFor,
  hint,
  children,
}: {
  label: string
  required?: boolean
  htmlFor?: string
  hint?: string
  children: ReactNode
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="flex items-center gap-2 text-sm font-medium text-foreground/90">
        <span>{label}</span>
        {required ? (
          <span className="rounded bg-gold/15 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-gold">
            必須
          </span>
        ) : (
          <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] tracking-wider text-muted-foreground">
            任意
          </span>
        )}
      </label>
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {children}
    </div>
  )
}

export function ReadingForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const update = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (form.email !== form.emailConfirm) {
      setError('メールアドレスが一致しません。ご確認ください。')
      return
    }
    if (!agreed) {
      setError('注意事項へのご同意が必要です。')
      return
    }
    setSubmitted(true)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (submitted) {
    return (
      <main className="relative min-h-dvh">
        <CelestialBackdrop />
        <div className="relative mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 py-16 text-center">
          <div className="relative mb-8 h-24 w-24">
            <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-90 shadow-[0_0_50px_10px_oklch(0.82_0.12_84/0.35)]" />
            <div className="absolute inset-[6px] rounded-full bg-background" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>
          <p className="mb-3 text-sm tracking-[0.4em] text-gold/80">RECEIVED</p>
          <h1 className="font-serif text-3xl font-bold text-gold-gradient">受付完了</h1>
          <Ornament />
          <p className="mt-4 text-pretty leading-relaxed text-foreground/90">
            お申し込みありがとうございます。
            <br />
            ご縁を大切に、心を込めて視させていただきます。
          </p>
          <div className="mt-8 w-full rounded-xl border border-gold/25 bg-card/70 px-6 py-5">
            <p className="text-pretty leading-relaxed text-foreground">
              3日以内に鑑定結果を
              <br className="sm:hidden" />
              メールでお送りします。
            </p>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            {form.name ? `${form.name} さま、` : ''}
            どうか穏やかな気持ちでお待ちください。
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-dvh">
      <CelestialBackdrop />
      <div className="relative mx-auto max-w-md px-5 pb-16 pt-14">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <div className="relative h-32 w-32">
            <div className="absolute -inset-1 rounded-full bg-gold-gradient opacity-80 blur-[1px]" />
            <div className="absolute inset-0 rounded-full p-[2px]">
              <Image
                src="/images/kuroko.png"
                alt="黒い着物をまとい扇子を手にした占い師「黒」"
                width={128}
                height={128}
                priority
                className="h-full w-full rounded-full object-cover ring-1 ring-gold/40"
              />
            </div>
          </div>

          <h1 className="mt-6 font-serif text-6xl font-extrabold leading-none tracking-widest text-gold-gradient">
            黒
          </h1>
          <p className="mt-3 font-serif text-lg tracking-[0.35em] text-foreground/90">
            初縁鑑定 お申し込み
          </p>

          <Ornament />

          <p className="mt-2 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            ここまで来てくれてありがとう。あなたのお悩みを丁寧に視させていただきます。
          </p>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <Field label="メールアドレス" required htmlFor="email">
            <input
              id="email"
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => update('email')(e.target.value)}
              placeholder="you@example.com"
              className={inputClass}
            />
          </Field>

          <Field label="メールアドレス（確認用）" required htmlFor="emailConfirm">
            <input
              id="emailConfirm"
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              value={form.emailConfirm}
              onChange={(e) => update('emailConfirm')(e.target.value)}
              placeholder="もう一度ご入力ください"
              className={inputClass}
            />
          </Field>

          <Field label="呼んでほしい名前" required htmlFor="name">
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => update('name')(e.target.value)}
              placeholder="例：さくら"
              className={inputClass}
            />
          </Field>

          <Field label="生年月日" required htmlFor="birthday">
            <input
              id="birthday"
              type="date"
              required
              value={form.birthday}
              onChange={(e) => update('birthday')(e.target.value)}
              className={`${inputClass} appearance-none [color-scheme:dark]`}
            />
          </Field>

          <Field label="お相手の生年月日" htmlFor="partnerBirthday" hint="分かる範囲でご入力ください">
            <input
              id="partnerBirthday"
              type="date"
              value={form.partnerBirthday}
              onChange={(e) => update('partnerBirthday')(e.target.value)}
              className={`${inputClass} appearance-none [color-scheme:dark]`}
            />
          </Field>

          <Field label="相談したい分野" required htmlFor="topic">
            <div className="grid grid-cols-2 gap-2">
              {FIELDS.map((f) => {
                const active = form.topic === f
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => update('topic')(f)}
                    aria-pressed={active}
                    className={`rounded-lg border px-3 py-3 text-sm transition ${
                      active
                        ? 'border-gold bg-gold/15 font-medium text-gold'
                        : 'border-border bg-input/40 text-foreground/80 hover:border-gold/50'
                    }`}
                  >
                    {f}
                  </button>
                )
              })}
            </div>
          </Field>

          <Field label="お相手との現在の関係" htmlFor="relationship">
            <input
              id="relationship"
              type="text"
              value={form.relationship}
              onChange={(e) => update('relationship')(e.target.value)}
              placeholder="例：片思い／交際中／音信不通 など"
              className={inputClass}
            />
          </Field>

          <Field label="今の状況・これまであったこと" required htmlFor="situation">
            <textarea
              id="situation"
              required
              rows={5}
              value={form.situation}
              onChange={(e) => update('situation')(e.target.value)}
              placeholder="これまでの経緯や、今の状況を自由にお書きください。"
              className={`${inputClass} resize-y leading-relaxed`}
            />
          </Field>

          <Field label="今回一番知りたいこと" required htmlFor="wantToKnow">
            <textarea
              id="wantToKnow"
              required
              rows={4}
              value={form.wantToKnow}
              onChange={(e) => update('wantToKnow')(e.target.value)}
              placeholder="鑑定で最も知りたいことをお書きください。"
              className={`${inputClass} resize-y leading-relaxed`}
            />
          </Field>

          <Field label="本当はどうなりたいか・理想の未来" required htmlFor="idealFuture">
            <textarea
              id="idealFuture"
              required
              rows={4}
              value={form.idealFuture}
              onChange={(e) => update('idealFuture')(e.target.value)}
              placeholder="あなたが心から望む未来を教えてください。"
              className={`${inputClass} resize-y leading-relaxed`}
            />
          </Field>

          {/* Notice */}
          <div className="rounded-xl border border-gold/20 bg-card/60 p-5">
            <p className="mb-2 flex items-center gap-2 text-sm font-medium text-gold">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
              ご注意
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              医療・法律・生死・妊娠・犯罪などの相談は受付できません。あらかじめご了承ください。
            </p>
            <label className="mt-4 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border border-gold/50 bg-input/60 transition checked:border-gold checked:bg-gold/25 checked:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23d9b96a%22 stroke-width=%223%22><path d=%22M20 6L9 17l-5-5%22/></svg>')] checked:bg-center checked:bg-no-repeat"
              />
              <span className="text-sm leading-relaxed text-foreground/90">
                上記の注意事項に同意します。
              </span>
            </label>
          </div>

          {error ? (
            <p role="alert" className="text-center text-sm text-destructive">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-xl bg-gold-gradient py-4 text-base font-bold tracking-[0.15em] text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.82_0.12_84/0.6)] transition active:scale-[0.99]"
          >
            初縁鑑定を申し込む
          </button>

          <div className="flex items-center justify-center gap-3 pt-2" aria-hidden="true">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="font-serif text-sm tracking-[0.3em] text-muted-foreground/80">黒</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </form>
      </div>
    </main>
  )
}
