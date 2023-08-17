import type { ControlBarItem } from "$types";

import fileIcon from "$icons/file.svg";
import outlineIcon from "$icons/outline.svg";
import insertIcon from "$icons/insert.svg";
import headingIcon from "$icons/heading.svg";

const controlBarItems: readonly ControlBarItem[] = [
  {
    name: "file",
    icon: fileIcon,
    menu: [
      {
        text: "save",
        action: () => {},
      },
      {
        text: "open",
        action: () => {},
      },
      {
        text: "new",
        action: () => {},
      },
      {
        text: "export",
        action: () => {
          /* Export file */
        },
      },
    ],
  },
  {
    name: "headings",
    icon: headingIcon,
    menu: [
      {
        text: "heading 2",
        action: () => {
          /* Wrap selected text in <h2> tags */
        },
      },
      {
        text: "heading 3",
        action: () => {
          /* Wrap selected text in <h3> tags */
        },
      },
      {
        text: "heading 4",
        action: () => {
          /* Wrap selected text in <h4> tags */
        },
      },
    ],
  },
  {
    name: "insert",
    icon: insertIcon,
    menu: [
      {
        text: "paragraph",
        action: () => {},
      },
      {
        text: "image",
        action: () => {},
      },
      {
        text: "devider",
        action: () => {},
      },
    ],
  },
  {
    name: "outline",
    icon: outlineIcon,
    menu: [],
  },
];

export default controlBarItems;
