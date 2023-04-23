import React, { useMemo } from 'react';
import SlideShowCustom from '@components/widgets/SlideShowCustom';

export default function Home() {
  const slideElement = useMemo(
    () =>
      [1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => (
        <div key={i} style={{ height: 200, background: 'rgb(54, 77, 121)' }}>
          {e}
        </div>
      )),
    []
  );
  return (
    <div>
      <SlideShowCustom
        slideElement={slideElement}
        isNavigation
        isPagination={false}
        slidesPerView={4}
        spaceBetween={40}
        slideKey='slide-news-with-thumbnail'
        // isPaginationAbsolute
      />
    </div>
  );
}
