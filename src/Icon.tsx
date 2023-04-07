export function Icon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  return (
    <span className={"inline-flex items-center " + (className ?? "")}>
      {"\u200B"}
      <span className={name} />
    </span>
  )
}
