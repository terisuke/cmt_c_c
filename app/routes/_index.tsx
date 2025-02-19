import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/common";
import { Files } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "文書管理システム" },
    { name: "description", content: "文書管理システム" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        文書管理システムへようこそ
      </h1>
      <Button to="/documents" icon={Files} size="lg">
        文書一覧を見る
      </Button>
    </div>
  );
}