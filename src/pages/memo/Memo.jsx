import React, { lazy, Suspense } from "react";
import WithUseMemo from "../../Components/memoUsage/WithUseMemo";
import ReactMemo from "../../Components/memoUsage/ReactMemo";
import Loading from "../../Components/Loading/Loading";

const WithoutUseMemo = lazy(() =>
  import("../../Components/memoUsage/WithoutUseMemo")
);

const Memo = () => {
  return (
    <div className="flex justify-items-center mt-8 justify-evenly">
      <Suspense fallback={<Loading />}>
        <WithoutUseMemo />
      </Suspense>
      <WithUseMemo />
      <ReactMemo />
    </div>
  );
};

export default Memo;
