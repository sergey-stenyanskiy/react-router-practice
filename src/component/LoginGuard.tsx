import React, { ReactElement } from 'react'

import { Navigate } from 'react-router-dom'

type LoginGuardProps = {
  logged: boolean
  children: ReactElement | ReactElement[]
}

export default ({
  logged,
  children
}: LoginGuardProps) => {
  if (logged) {
    return <>{children}</>;
  }

  return (
    <Navigate replace to="/" />
  );
}
