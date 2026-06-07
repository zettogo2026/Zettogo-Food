# Zettogo Food

Original Chinese boxed-lunch online ordering website built with Next.js, React, TypeScript, and Tailwind CSS.

The experience is inspired by modern online ordering flows for fast-casual restaurants, but uses an original brand, original menu names, original UI copy, and no third-party trademarks or official images.

## Features

- Mobile-first responsive design
- Homepage with hero, pickup/delivery CTAs, meal type entry points, featured items
- Menu page with categories, calories, spice level, allergens, and Add buttons
- Order flow for Pickup and Delivery
- Pickup store and time selection
- Delivery address, fee, and ETA UI
- Combo meal builder for Bowl, Plate, Bigger Plate, and Family Meal
- Cart stored in `localStorage`
- Cart quantity updates, removal, subtotal, tax, delivery fee, promo code, total
- Checkout page with mock payment methods
- Order success page with order number and ETA
- Sign in and account pages
- Member account mock with recent orders and favorite dishes
- Recent orders and favorite dishes
- Admin page for menu, categories, orders, stores, hours, delivery range, and delivery fee
- Empty cart and checkout error states
- Accessible labels and strong color contrast

## Routes

- `/` Home
- `/menu` Menu
- `/order` Order flow
- `/cart` Cart
- `/checkout` Checkout
- `/order-success` Success
- `/login` Sign in
- `/signup` Sign up
- `/account` Account and rewards
- `/locations` Locations
- `/contact` Contact
- `/admin` Admin dashboard

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Modify Menu Data

Edit:

```text
src/lib/data.ts
```

Menu items live in `menuItems`. Each item supports:

- `id`
- `name`
- `category`
- `price`
- `calories`
- `spice`
- `allergens`
- `description`
- `image`
- `badge`
- `popular`
- `new`

Meal types live in `mealTypes`.

Stores live in `stores`.

Seed admin/account orders live in `seededOrders`.

## Promo Code

Use this mock promo code at checkout:

```text
WOK10
```

It applies a 10% discount.
