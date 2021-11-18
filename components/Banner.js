import Image from "next/image";

export default function Banner(props) {
  const { title, description, imgUrl, width, height } = props;
  return (
    <div className="mb-10 space-y-10 md:mb-20 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 lg:gap-x-8">
      <div className="flex items-center justify-center">
        <Image
          src={imgUrl}
          width={width}
          height={height}
          alt={title}
          title={title}
          priority
        />
      </div>
      <div className="flex items-center justify-center text-left">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-black-500 dark:text-white md:text-5xl">
            {title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-400 md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
