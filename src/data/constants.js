import React from "react";
import { GiCapybara, GiNestedHearts, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "books",
    url: "/products",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiStabbedNote />,
    title: "traditional",
    text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. ",
  },
  {
    id: 2,
    icon: <GiNestedHearts />,
    title: "passionate",
    text: "He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
  },
  {
    id: 3,
    icon: <GiCapybara />,
    title: "capybara",
    text: "The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.",
  },
];

export const products_url =
  "https://rest-apis-production.up.railway.app/api/v1/books";
export const single_product_url = `https://rest-apis-production.up.railway.app/api/v1/books/`;
