import Image from "next/image";
import Link from "next/link";
import { HiOutlineStar, HiOutlineClock } from "react-icons/hi2";

export default function MovieGrid({ movies = [] }) {
  if (!movies.length) {
    return (
      <div className="text-center py-12 text-neutral-500">
        No movies found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <article
          key={movie.id}
          className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
        >
          {/* Movie Poster */}
          <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            {movie.primaryImage ? (
              <Image
                src={movie.primaryImage}
                alt={movie.primaryTitle}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-xs text-neutral-400">
                No Poster Available
              </div>
            )}
            
            {/* Rating Badge */}
            {movie.averageRating && (
              <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-xs font-semibold text-yellow-400 backdrop-blur-sm">
                <HiOutlineStar className="h-3.5 w-3.5 fill-yellow-400" />
                <span>{movie.averageRating.toFixed(1)}</span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col p-4">
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span>{movie.startYear}</span>
              {movie.runtimeMinutes && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-0.5">
                    <HiOutlineClock className="h-3 w-3" />
                    {movie.runtimeMinutes}m
                  </span>
                </>
              )}
              {movie.contentRating && (
                <>
                  <span>•</span>
                  <span className="rounded border border-neutral-300 px-1 py-0.2 text-[10px] font-medium uppercase dark:border-neutral-700">
                    {movie.contentRating}
                  </span>
                </>
              )}
            </div>

            <h3 className="mt-2 text-base font-semibold text-neutral-900 line-clamp-1 dark:text-white">
              {movie.primaryTitle}
            </h3>

            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              {movie.description}
            </p>

            {/* Genres */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {movie.genres?.slice(0, 2).map((genre) => (
                <span
                  key={genre}
                  className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Link Anchor */}
            <Link
              href={`/movies/${movie.id}`}
              className="mt-4 block w-full rounded-lg bg-neutral-100 py-2 text-center text-xs font-medium text-neutral-800 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
            >
              View Details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}