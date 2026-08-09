import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import { 
  TbActivityHeartbeat, 
  TbLungs, 
  TbUser, 
  TbHome 
} from 'react-icons/tb';

// Icons ka mapping object
export const AppIcons: Record<string, ComponentType<IconBaseProps>> = {
  TbActivityHeartbeat,
  TbLungs,
  TbUser,
  TbHome,
};