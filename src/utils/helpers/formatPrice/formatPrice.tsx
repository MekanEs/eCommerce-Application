export default function formatPrice(price: number, language: string): string {
  return (price / 100).toLocaleString(language, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
