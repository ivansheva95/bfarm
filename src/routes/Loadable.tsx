import React from "react";
import Loader from "ui/Loader/Loader";

export const Loadable = (Component: React.ElementType) => (props: any) => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Component {...props} />
    </React.Suspense>
  )
}
