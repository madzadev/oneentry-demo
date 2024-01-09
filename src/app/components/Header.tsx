import Link from "next/link";
import { Page } from "../interfaces/data";

export default function Header({ pages }: { pages: Page[] }) {
  return (
    <div className="flex justify-between items-center mb-10 p-6">
      <Link href="/">
        <h1 className="text-xl">🏂 Alpine Sports</h1>
      </Link>
      <div className="flex space-x-4 list-none">
        {pages.map((page, index: number) => (
          <Link
            key={index}
            href={page.pageUrl === "home" ? "/" : `/${page.pageUrl}`}
          >
            {page.localizeInfos.en_US.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
