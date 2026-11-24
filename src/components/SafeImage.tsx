import { useState } from 'react';
import { Car } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function SafeImage({ src, alt, className = '', fallbackLabel }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#14171D] via-[#0B0C0F] to-[#1D212A] text-[#C4C9D2] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Car className="w-10 h-10 mb-3 text-[#8A919E]" strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide text-[#C4C9D2]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
