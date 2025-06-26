export type ViewMode = 'server' | 'dm';

export type Server = {
  id: string;
  name: string;
  icon: string;
  messages: string[];
};
export type DM = {
  id: string;
  name: string;
  status: string;
  avatar: string;
  messages: string[];
};