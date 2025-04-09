interface LabelProps {
  htmlFor: string;
  children: string;
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-sm text-primary">
      {children}
    </label>
  );
}
