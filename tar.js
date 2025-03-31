import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TarSoapPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Дегтярное мыло</h1>
      <Image src="/images/tar-soap.jpg" alt="Дегтярное мыло" width={600} height={400} className="rounded-xl mb-4" />
      <p className="mb-2">Состав: берёзовый дёготь, оливковое масло, кокосовое масло, вода, щёлочь.</p>
      <p className="mb-2">Действие: помогает при кожных заболеваниях (псориаз, экзема), снимает зуд, очищает кожу, подсушивает воспаления.</p>
      <p className="mb-2">Рекомендуется для жирной и проблемной кожи. Имеет характерный натуральный запах.</p>
      <Button className="mt-4">Добавить в корзину</Button>
    </div>
  );
}
