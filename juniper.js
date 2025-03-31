import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function JuniperSoapPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Можжевеловое мыло</h1>
      <Image src="/images/juniper-soap.jpg" alt="Можжевеловое мыло" width={600} height={400} className="rounded-xl mb-4" />
      <p className="mb-2">Состав: экстракт можжевельника, масло виноградной косточки, кокосовое масло, щёлочь, вода.</p>
      <p className="mb-2">Действие: очищает поры, снимает воспаления, обладает антисептическим эффектом, улучшает общее состояние кожи.</p>
      <p className="mb-2">Отлично подходит после тренировок и для проблемной кожи.</p>
      <Button className="mt-4">Добавить в корзину</Button>
    </div>
  );
}
