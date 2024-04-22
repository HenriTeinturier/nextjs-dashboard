import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  className?: string;
}

export function Button({ children, className, loading, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={rest.disabled || loading}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        {
          'cursor-not-allowed opacity-50': loading,
        },
        className,
      )}
    >
      {loading ? (
        <span>Loading...</span> // Placeholder for a spinner or any loading animation
      ) : (
        children
      )}
    </button>
  );
}
