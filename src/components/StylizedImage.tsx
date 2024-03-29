import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

const shapes = [
  {
    width: 655,
    height: 680,
    path: "M639.58,331.01l-.11-174.59c0-2.71-1.01-5.47-2.88-7.33L490.56,3.06c-1.86-1.86-4.62-2.88-7.33-2.88l-174.59-.11-115.8-.07L3.02,189.81C1.14,191.69,0,194.3,0,197.21l.07,111.43v5.93s.09,55.38.09,55.38l-.16-.04v259.33c0,1.46.29,2.84.81,4.09.06.16.14.31.21.47.04.07.07.14.11.21.09.19.19.37.3.55.1.18.21.35.33.54.06.09.12.19.19.27.65.91,1.44,1.7,2.35,2.35.09.06.18.13.27.19.17.12.35.23.54.33.18.11.36.21.55.3.07.04.14.07.21.11.16.07.31.14.47.21,1.25.53,2.63.81,4.09.81h259.33l-.04-.16,55.38.08h5.93s111.43.07,111.43.07c2.9,0,5.51-1.14,7.39-3.02l189.81-189.81-.07-115.8ZM183.79,565.85l-95.07.03c-8.26,0-14.95-6.7-14.95-14.95l.03-95.07c-.03-13.3,16.09-20.01,25.52-10.59l95.07,95.07c9.42,9.42,2.71,25.54-10.6,25.51ZM452.93,517.67l.1-176.14c0-2.71-1.22-5.31-3.24-7.33l-144.33-144.33c-2.02-2.02-4.62-3.24-7.33-3.24l-176.14.1,104.85-104.85,114.66-.08c2.88.16,5.24,1.15,7.25,3.16l205.96,205.96c2.01,2.01,2.99,4.37,3.16,7.25l-.08,114.66-104.85,104.85Z",
  },
  {
    width: 719,
    height: 680,
    path: 'M600.44,453.28v377.3c0,7.65-6.1,13.75-13.75,13.75H13.75c-7.71,0-13.75-6.1-13.75-13.75v-342.3l.21.05-.11-73.09-.11-154.91c0-7.65,6.05-13.75,13.75-13.75l379.76-.21c3.59,0,7.01,1.61,9.69,4.28l193.17,193.17c2.46,2.46,4.07,5.89,4.07,9.47Z',
  },
  {
    width: 719,
    height: 680,
    path: 'M632.827 9.245A11.5 11.5 0 0 1 644.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-95.832 479.159c-4.3 21.502-23.18 36.979-45.107 36.979H178.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C240.096 91.477 258.975 76 280.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm0 479A11.5 11.5 0 0 1 644.104 479h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 630h-63.366c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM37.104 159a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C-1.196 303.361 4.247 310 11.504 310H74.87a11.5 11.5 0 0 0 11.277-9.245l24.76-123.798a.03.03 0 0 1 .052-.012c.015.021.048.012.052-.014C114.016 158.98 120.134 151 143 151h58.87a11.5 11.5 0 0 0 11.277-9.245l25.6-128C240.17 6.64 234.727 0 227.47 0h-63.366a11.5 11.5 0 0 0-11.277 9.245l-24.754 123.771c-.002.011-.016.015-.024.006-.007-.009-.021-.005-.023.007-3.469 18.452-13.551 25.107-24.88 25.981-.848.065-1.699 0-2.549-.009l-.127-.001H37.104Z',
  },
]




type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export function StylizedImage({
  shape = 0,
  className,
  ...props
}: ImagePropsWithOptionalAlt & { shape?: 0 | 1 | 2 }) {
  let id = useId()
  let { width, height, path } = shapes[shape]

  return (
    <div
      className={clsx(
        className,
        'relative flex aspect-[719/680] w-full grayscale',
      )}
    >
      <svg viewBox={`0 0 ${width} ${height}`} fill="none" className="h-full">
        <g clipPath={`url(#${id}-clip)`} className="group">
          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
            <foreignObject width={width} height={height}>
              <Image
                alt=""
                className="w-full bg-neutral-100 object-cover"
                style={{ aspectRatio: `${width} / ${height}` }}
                {...props}
              />
            </foreignObject>
          </g>
          <use
            href={`#${id}-shape`}
            strokeWidth="2"
            className="stroke-neutral-950/10"
          />
        </g>
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              id={`${id}-shape`}
              d={path}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
