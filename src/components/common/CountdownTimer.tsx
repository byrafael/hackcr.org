import { useEffect, useMemo, useState } from "react";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";

interface CountdownTimerProps {
  targetDate: Date | string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: Date): TimeLeft {
  const distance = Math.max(targetDate.getTime() - Date.now(), 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]">
        <span className="font-display text-2xl md:text-4xl font-bold text-cyber">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-sm text-cream/30 mt-2 uppercase tracking-wider font-display">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const { copy } = useLanguage();
  const target = useMemo(
    () => (targetDate instanceof Date ? targetDate : new Date(targetDate)),
    [targetDate],
  );
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <TimeUnit value={timeLeft.days} label={copy.common.countdown.days} />
      <span className="text-2xl md:text-4xl text-cyber/20 font-display">:</span>
      <TimeUnit value={timeLeft.hours} label={copy.common.countdown.hours} />
      <span className="text-2xl md:text-4xl text-cyber/20 font-display">:</span>
      <TimeUnit value={timeLeft.minutes} label={copy.common.countdown.mins} />
      <span className="text-2xl md:text-4xl text-cyber/20 font-display">:</span>
      <TimeUnit value={timeLeft.seconds} label={copy.common.countdown.secs} />
    </div>
  );
}
