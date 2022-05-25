import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    summuryPrice(): number {
        return Array.from(this.items).reduce(
            (sum, current) => sum + current.price,
            0
          );
    }

    summuryPriceWithSale(sale: number): number {
        return this.summuryPrice() * ((100 - sale) / 100);
    }

    deleteCart(id: number): void {
        this._items.forEach((item, index) => {
        if (id === item.id) {
            this._items.splice(index, 1);
        }
        });
    }
}