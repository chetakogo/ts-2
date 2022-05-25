import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import MusicAlbum from "../domain/MusicAlbum";
import Book from "../domain/Book";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add a new movie to a cart', () => {
  const cart = new Cart();
  const newMovie = new Movie(
    1002,
    'Мстители',
    459,
    'https://www.google.com/search?q=%D0%BC%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D0%B8+%D0%BE%D0%B1%D1%89%D0%B8%D0%B9+%D1%81%D0%B1%D0%BE%D1%80&rlz=1C1CHWL_ruRU963RU963&sxsrf=ALiCzsaKbrCVK0F3jQVAQKKqgpDSI8hMuA:1653423835241&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiB5fLi-_j3AhWNz4sKHe2lCeAQ_AUoAXoECAIQAw&biw=1280&bih=577&dpr=1.5#imgrc=KXXJK43WyESkzM',
    2012,
    'США',
    'Мстители, общий сбор!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17'
  );
  cart.add(newMovie);
  const result = cart.items;
  const expected = [newMovie];
  expect(result).toEqual(expected);
});

  test("suumary Price ", () => {
    const cart = new Cart();
    cart.add(new Book(1, "Poems", "Pushkin A. A.", 500, 150));
    cart.add(new Book(2, "Poems", "Esenin S. A.", 500, 100));

    expect(cart.summuryPrice()).toBe(1000);
  });

  test("summury price with sale", () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(101, "American idiot", "Green Day", 250));
    cart.add(new MusicAlbum(102, "Demolicious", "Green Day", 250));

    expect(cart.summuryPriceWithSale(10)).toBe(450);
  });

  test("delete cart", () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(101, "American idiot", "Green Day", 250));
    cart.add(new Book(2, "Poems", "Esenin S. A.", 500, 100));
    cart.deleteCart(2);
    expect(cart.items.length).toBe(1);
  });
