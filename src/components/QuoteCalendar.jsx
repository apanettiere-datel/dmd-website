'use client'

import { useMemo, useState } from 'react'

export function QuoteCalendar({ value, onChange }) {
  const initialDate = value ? parseYmd(value) : new Date()
  const [visibleMonth, setVisibleMonth] = useState(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1),
  )

  const days = useMemo(() => buildMonthGrid(visibleMonth), [visibleMonth])
  const selected = value ? parseYmd(value) : null
  const today = new Date()

  return (
    <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm font-semibold tracking-[0.12em] text-sky-600 uppercase">
        Preferred Day
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-slate-900">Choose your appointment day</h3>
      <p className="mt-2 text-sm text-slate-600">
        Select the date that works best. We will follow up to confirm schedule availability.
      </p>

      <header className="mt-6 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-900">
          {visibleMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </h4>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))
            }
            className="rounded-lg border border-slate-300 p-2 text-slate-600 hover:border-slate-400 hover:text-slate-900"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))
            }
            className="rounded-lg border border-slate-300 p-2 text-slate-600 hover:border-slate-400 hover:text-slate-900"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="mt-4 grid grid-cols-7 text-center text-xs font-semibold uppercase text-slate-500">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>

      <div className="mt-2 grid grid-cols-7 gap-1">
        {days.map((day) => {
          const isCurrentMonth = day.getMonth() === visibleMonth.getMonth()
          const isSelected = selected && isSameDay(day, selected)
          const isToday = isSameDay(day, today)
          const ymd = formatYmd(day)

          return (
            <button
              key={ymd}
              type="button"
              onClick={() => onChange(ymd)}
              className={[
                'rounded-lg px-0 py-2 text-sm font-medium transition',
                isSelected
                  ? 'bg-sky-500 text-white'
                  : isCurrentMonth
                    ? 'text-slate-700 hover:bg-sky-50'
                    : 'text-slate-400 hover:bg-slate-100',
                isToday && !isSelected ? 'ring-1 ring-sky-300' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {day.getDate()}
            </button>
          )
        })}
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        {value ? (
          <>
            Selected day:{' '}
            <span className="font-semibold text-slate-900">
              {parseYmd(value).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </>
        ) : (
          'No day selected yet.'
        )}
      </div>
    </article>
  )
}

function buildMonthGrid(monthDate) {
  const firstOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1)
  const mondayOffset = (firstOfMonth.getDay() + 6) % 7
  const gridStart = new Date(firstOfMonth)
  gridStart.setDate(firstOfMonth.getDate() - mondayOffset)

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart)
    day.setDate(gridStart.getDate() + index)
    return day
  })
}

function formatYmd(date) {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${day}`
}

function parseYmd(value) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M12.78 4.22a.75.75 0 0 1 0 1.06L8.06 10l4.72 4.72a.75.75 0 1 1-1.06 1.06l-5.25-5.25a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M7.22 15.78a.75.75 0 0 1 0-1.06L11.94 10 7.22 5.28a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
