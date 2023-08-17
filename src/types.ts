export interface ControlBarItem {
  name: string;
  icon: string;
  menu: {
    text: string;
    action: () => void;
  }[]
}
