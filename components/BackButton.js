import Link from "next/link";
import { ArrowSmLeftIcon } from "@heroicons/react/outline";

export default function BackButton({ href }) {
  return (
    <div className="mb-8">
      <Link href={href}>
        <a className="inline-flex items-center justify-center font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-500 dark:hover:text-emerald-600">
          <ArrowSmLeftIcon className="w-5 h-5 mr-1" aria-hidden="true" />
          Volver al blog
        </a>
      </Link>
    </div>
  );
}
