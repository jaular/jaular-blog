export default function Avatar({ name, publishedAt }) {
  return (
    <div className="flex">
      <div className="self-center flex-shrink-0 mr-2">
        <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full dark:bg-black-300">
          <span className="font-medium leading-none text-black-500 dark:text-white">
            JA
          </span>
        </span>
      </div>
      <div className="flex items-center">
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {name} / {publishedAt}
        </p>
      </div>
    </div>
  );
}
