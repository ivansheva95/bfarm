import React from "react";
import { Loader, Ripple } from "ui";

export const Loadable = (Component: React.ElementType) => (props: any) => {
  return (
    <React.Suspense fallback={<Loader><Ripple /></Loader>}>
      <Component {...props} />
    </React.Suspense>
  )
}
