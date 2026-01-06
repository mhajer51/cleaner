import { MenuItem } from "@/types/types";

export const leftMenuItems: MenuItem[] = [
  {
    id: "dashboards",
    icon: "NiHome",
    label: "menu-dashboards",
    description: "menu-dashboards-description",
    color: "text-primary",
    href: "/admin/dashboards",
  },
  {
    id: "multi-level",
    label: "menu-multi-level",
    icon: "NiDirectory",
    color: "text-primary",
    href: "/admin/menu-levels",
    children: [
      { id: "level-two", label: "menu-level-two", icon: "NiStar", href: "/admin/menu-levels/level-two" },
      {
        id: "level-two-subs",
        label: "menu-level-two-subs",
        href: "/admin/menu-levels/level-two-subs",
        icon: "NiStars",
      },
    ],
  },
];

export const leftMenuBottomItems: MenuItem[] = [
];
