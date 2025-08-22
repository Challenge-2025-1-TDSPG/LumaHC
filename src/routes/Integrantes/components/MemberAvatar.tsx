type Props = { src: string; alt: string; className?: string };

export default function MemberAvatar({ src, alt, className = '' }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-[140px] h-[140px] rounded-full object-cover shrink-0 ${className}`}
      loading="lazy"
    />
  );
}