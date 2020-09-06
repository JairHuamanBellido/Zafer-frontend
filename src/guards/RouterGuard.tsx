import React from 'react';
import { Redirect } from 'react-router-dom';

import Guard from './router.guard';

interface IProps {
  component: React.ReactNode;
  redirect: string;
}
const RouterGuard: React.FC<IProps> = (props: IProps) => {
  const { component, redirect } = props;
  return Guard.valid() ? <>{component}</> : <Redirect to={redirect} />;
};

export default RouterGuard;
