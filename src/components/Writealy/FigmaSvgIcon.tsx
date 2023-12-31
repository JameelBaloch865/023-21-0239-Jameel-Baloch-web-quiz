import { memo, SVGProps } from 'react';

const FigmaSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.1801 14.445C15.1801 12.2148 16.9881 10.4068 19.2183 10.4068H23.2565V18.4832H19.2183C16.9881 18.4832 15.1801 16.6752 15.1801 14.445Z'
      stroke='black'
      strokeWidth={1.38757}
    />
    <path
      d='M15.1801 22.557C15.1801 20.3268 16.9881 18.5188 19.2183 18.5188H23.2565V26.5952H19.2183C16.9881 26.5952 15.1801 24.7872 15.1801 22.557Z'
      stroke='black'
      strokeWidth={1.38757}
    />
    <path
      d='M15.1801 31.345C15.1801 29.1147 16.9881 27.3068 19.2183 27.3068H23.2565V31.5576C23.2565 33.6704 21.5438 35.3832 19.431 35.3832H19.2183C16.9881 35.3832 15.1801 33.5752 15.1801 31.345Z'
      stroke='black'
      strokeWidth={1.38757}
    />
    <path
      d='M23.2914 10.4068H27.3296C29.5599 10.4068 31.3678 12.2148 31.3678 14.445C31.3678 16.6752 29.5599 18.4832 27.3296 18.4832H23.2914V10.4068Z'
      stroke='black'
      strokeWidth={1.38757}
    />
    <path
      d='M23.2914 22.557C23.2914 20.3268 25.0994 18.5188 27.3296 18.5188C29.5599 18.5188 31.3678 20.3268 31.3678 22.557C31.3678 24.7872 29.5599 26.5952 27.3296 26.5952C25.0994 26.5952 23.2914 24.7872 23.2914 22.557Z'
      stroke='black'
      strokeWidth={1.38757}
    />
    <path
      d='M26.6527 18.8389L24.2867 20.1908C24.174 20.5288 23.5431 22.6244 23.2727 22.8948C23.0023 23.1652 23.3854 20.0782 23.6107 18.5009L26.6527 18.8389Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(FigmaSvgIcon);
export { Memo as FigmaSvgIcon };
