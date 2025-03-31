import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

export default function SilaAltayaShop() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: "Гость" });
  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Сила Алтая</h1>
        <p className="text-lg">Натуральное мыло ручной работы из сердца природы</p>
        <p className="mt-2 text-sm">Пользователь: {user.name} | В корзине: {cart.length} товаров</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <ProductCard
          title="Пихтовое мыло"
          description="Очищающее и тонизирующее мыло."
          price="350 ₽"
          link="/products/pine"
          onAdd={() => addToCart("Пихтовое мыло")}
        />
        <ProductCard
          title="Можжевеловое мыло"
          description="Антисептическое мыло с ароматом хвои."
          price="370 ₽"
          link="/products/juniper"
          onAdd={() => addToCart("Можжевеловое мыло")}
        />
        <ProductCard
          title="Дегтярное мыло"
          description="Мыло с берёзовым дёгтем для проблемной кожи."
          price="320 ₽"
          link="/products/tar"
          onAdd={() => addToCart("Дегтярное мыло")}
        />
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Отзывы покупателей</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <blockquote className="bg-white p-4 rounded-xl shadow">
            <p className="italic">“Лучшее мыло, что я пробовал. Пихта бодрит с утра!”</p>
            <footer className="mt-2 text-sm text-right">— Артём С.</footer>
          </blockquote>
          <blockquote className="bg-white p-4 rounded-xl shadow">
            <p className="italic">“Дегтярное мыло помогло справиться с раздражением кожи.”</p>
            <footer className="mt-2 text-sm text-right">— Марина К.</footer>
          </blockquote>
        </div>
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Свяжитесь с нами</h2>
        <form className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <Input type="text" placeholder="Ваше имя" />
          <Input type="email" placeholder="Email или телефон" />
          <Button>Отправить</Button>
        </form>
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Оплата</h2>
        <p className="text-sm max-w-xl mx-auto mb-4">Мы принимаем оплату онлайн банковской картой, через СБП и ЮKassa. После оформления заказа, наш менеджер свяжется с вами для подтверждения и отправит ссылку на оплату.</p>
        <Button>Оформить заказ ({cart.length} товаров)</Button>
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Личный кабинет</h2>
        <div className="max-w-md mx-auto bg-white p-4 rounded-xl shadow">
          <p className="mb-2">Имя: {user.name}</p>
          <p className="mb-2">Email: example@mail.ru</p>
          <Button onClick={() => alert("Редактирование профиля скоро будет доступно")}>Редактировать</Button>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ title, description, price, link, onAdd }) {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-2">{description}</p>
        <Link href={link} className="text-sm text-emerald-700 underline mb-2 inline-block">Подробнее</Link>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{price}</span>
          <Button onClick={onAdd}>В корзину</Button>
        </div>
      </CardContent>
    </Card>
  );
}
