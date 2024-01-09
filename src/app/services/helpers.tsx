export function calculateTotal(items: { price: number }[]) {
  return items.reduce((total, item) => total + Number(item.price), 0);
}

export function boughtStatus(items: { id: string }[], id: string) {
  return items.some((item) => item.id === id);
}

export function cartIndex(items: { id: string }[], id: string) {
  return items.findIndex((item) => item.id === id);
}
