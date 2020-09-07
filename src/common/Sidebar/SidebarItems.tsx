import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const items = [
  { id: 1, label: 'Inicio', path: '' },
  { id: 2, label: 'Chat', path: '/chat' },
  { id: 3, label: 'Organización', path: '/organization' },
];

const SidebarItems: React.FC = () => {
  const [item, setItem] = useState<number>(1);
  const selectItem = (id: number) => {
    setItem(id);
  };
  const { url } = useRouteMatch();
  const isSelected = (id: number): string => {
    return id === item ? 'active' : '';
  };
  return (
    <div className="sidebar__nav">
      {items.map((e) => (
        <li key={e.id} className={`sidebar__nav-link ${isSelected(e.id)}`}>
          <Link onClick={() => selectItem(e.id)} to={`${url}${e.path}`}>
            {e.label}
          </Link>
        </li>
      ))}
    </div>
  );
};
export default SidebarItems;
