interface ErrorMessageProps {
  children: string;
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className="text-sm text-error">{children}</p>;
}
