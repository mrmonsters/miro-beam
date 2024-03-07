import { ReactNode } from 'react';

type AppCardProps = {
  title: string;
  tags: ReactNode;
};

const AppCard = ({ title, tags }: AppCardProps) => {
  return (
    <div className="app-card">
      <div className="app-card--title">{title}</div>
      <div className="app-card--body">
        <div className="app-card--tags">{tags}</div>
      </div>
    </div>
  );
};

export default AppCard;
