import { cn } from "@/lib/utils";

export default function FormInput({
  title,
  placeholder,
  use_name,
  restrictions,
  errorsOBJ,
  registerOBJ,
  className,
}) {
  return (
    <div
      className={cn(
        className,
        "pointer-events-auto flex h-auto w-full flex-col gap-1",
      )}
    >
      <label className="text-xl">{title}:</label>
      <input
        className="border-2 bg-transparent px-4 py-2"
        type="text"
        id={use_name}
        placeholder={placeholder}
        {...registerOBJ(use_name, restrictions)}
      />
    </div>
  );
}

export function FormTextarea({
  title,
  placeholder,
  use_name,
  restrictions,
  errorsOBJ,
  registerOBJ,
  className,
}) {
  return (
    <div
      className={cn(
        className,
        "pointer-events-auto flex h-full w-full flex-col",
      )}
    >
      <label className="">{title}:</label>
      <textarea
        className="max-h-1/4 min-h-[90%] border-2 bg-transparent px-4 py-2"
        type="text"
        id={use_name}
        placeholder={placeholder}
        {...registerOBJ(use_name, restrictions)}
      />
    </div>
  );
}
