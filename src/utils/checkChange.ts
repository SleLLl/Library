export default function checkChange(lastChange: Date, countDay: number): boolean {
  const date = new Date(lastChange);
  const days = Math.ceil(
    Math.abs(new Date().getTime() - date.getTime()) / (1000 * 3600 * 24),
  );
  return days > countDay;
}
