import { TextProps } from "../interfaces/data";

export default function Text({ className, text }: TextProps) {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: text }} />
  );
}
