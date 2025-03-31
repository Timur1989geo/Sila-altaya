import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PineSoapPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Пихтовое мыло</h1>
      <Image src="/images/pine-soap.jpg" alt="Пихтовое мыло" width={600} height={400} className="rounded-xl mb-4" />
      <p className="mb-2">Состав: масло пихты, оливковое масло, кокосовое масло, вода, щёлочь.</p>
      <p className="mb-2">Действие: тонизирует кожу, улучшает кровообращение, придаёт бодрость, обладает антисептическими свойствами.</p>
      <p className="mb-2">Подходит для всех типов кожи. Особенно рекомендовано для утреннего использования.</p>
      <Button className="mt-4">Добавить в корзину</Button>
    </div>
  );
}
