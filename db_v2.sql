CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "username" varchar,
  "email" varchar,
  "name" varchar,
  "password" varchar
);

CREATE TABLE "products" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "description" text,
  "price" "decimal(10, 2)",
  "quantity" int
);

CREATE TABLE "orders" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "total_amount" "decimal(10, 2)"
);

CREATE TABLE "order_items" (
  "id" int PRIMARY KEY,
  "order_id" int,
  "product_id" int,
  "quantity" int,
  "price_per_unit" "decimal(10, 2)",
  "total_amount" "decimal(10, 2)"
);

CREATE TABLE "addresses" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "street" varchar,
  "city" varchar,
  "state" varchar,
  "country" varchar,
  "postal_code" varchar
);

CREATE TABLE "carts" (
  "id" int PRIMARY KEY,
  "user_id" int
);

CREATE TABLE "cart_items" (
  "id" int PRIMARY KEY,
  "cart_id" int,
  "product_id" int,
  "quantity" int
);

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "addresses" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "carts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "cart_items" ADD FOREIGN KEY ("cart_id") REFERENCES "carts" ("id");

ALTER TABLE "cart_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");
