import { Spin } from "antd";
import { lazy, Suspense } from "react";

const lazyLoading = (importFunc) => {
  const LazComponent = lazy(importFunc);

  return function (props) {
    return (
      <Suspense
        fallback={
          <div className="lazy-loading">
            <Spin />
          </div>
        }
      >
        <LazComponent {...props} />
      </Suspense>
    );
  };
};

export default lazyLoading;
