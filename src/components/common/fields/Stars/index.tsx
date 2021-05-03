import React from 'react';

const Stars = (props: { count?: number; book: boolean }): JSX.Element => (
  <div>
    {new Array(5).fill(1).map((_, index) => {
      if (index <= (props?.count ?? 0)) {
        return (
          <svg
            key={index}
            width={props.book ? '15' : '25'}
            height={props.book ? '15' : '25'}
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.7174 0.927048C7.01675 0.00573778 8.32016 0.0057404 8.61951 0.927051L9.57683 3.87336C9.7107 4.28538 10.0947 4.56434 10.5279 4.56434H13.6258C14.5945 4.56434 14.9973 5.80395 14.2136 6.37336L11.7073 8.19427C11.3568 8.44892 11.2102 8.90028 11.344 9.31231L12.3014 12.2586C12.6007 13.1799 11.5462 13.946 10.7625 13.3766L8.25624 11.5557C7.90575 11.3011 7.43116 11.3011 7.08067 11.5557L4.57439 13.3766C3.79068 13.946 2.7362 13.1799 3.03555 12.2586L3.99287 9.3123C4.12674 8.90028 3.98008 8.44892 3.62959 8.19427L1.12332 6.37335C0.339602 5.80395 0.74238 4.56434 1.7111 4.56434H4.80903C5.24226 4.56434 5.62621 4.28538 5.76009 3.87336L6.7174 0.927048Z"
              fill="black"
            />
          </svg>
        );
      }
      return (
        <svg
          key={index}
          width={props.book ? '15' : '25'}
          height={props.book ? '15' : '25'}
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.91607 1.08156C7.06575 0.620905 7.71745 0.620901 7.86713 1.08156L8.82444 4.02786C9.02525 4.6459 9.60119 5.06434 10.251 5.06434H13.349C13.8333 5.06434 14.0347 5.68414 13.6428 5.96885L11.1366 7.78976C10.6108 8.17173 10.3909 8.84878 10.5917 9.46681L11.549 12.4131C11.6987 12.8738 11.1714 13.2568 10.7796 12.9721L8.27328 11.1512C7.74755 10.7693 7.03565 10.7693 6.50992 11.1512L4.00364 12.9721C3.61179 13.2568 3.08455 12.8738 3.23423 12.4131L4.19154 9.46681C4.39235 8.84878 4.17236 8.17173 3.64663 7.78976L1.14035 5.96885C0.748499 5.68415 0.949883 5.06434 1.43425 5.06434H4.53218C5.18202 5.06434 5.75795 4.6459 5.95876 4.02786L6.91607 1.08156Z"
            fill="white"
            stroke="black"
          />
        </svg>
      );
    })}
  </div>
);

export default Stars;
