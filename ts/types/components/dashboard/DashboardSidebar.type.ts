import { IconType } from 'react-icons';

export type subItemSidebar = {
  title: string,
  path: string
}

export type itemSidebarType = {
  title: string,
  path: string,
  icon: IconType,
  sub?: subItemSidebar[]
}