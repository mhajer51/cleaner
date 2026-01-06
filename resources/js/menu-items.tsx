import { AiChatMenuContent } from "./pages/app/applications/ai-chat/components/menu-content";
import { AiContentMenuContent } from "./pages/app/applications/ai-content/components/menu-content";
import { DriveMenuContent } from "./pages/app/applications/drive/components/menu-content";

import { MenuItem } from "@/types/types";

export const leftMenuItems: MenuItem[] = [
  {
    id: "dashboards",
    icon: "NiHome",
    label: "menu-dashboards",
    description: "menu-dashboards-description",
    color: "text-primary",
    href: "/dashboards",
  },
  {
    id: "multi-level",
    label: "menu-multi-level",
    icon: "NiDirectory",
    color: "text-primary",
    href: "/menu-levels",
    children: [
      { id: "level-two", label: "menu-level-two", icon: "NiStar", href: "/menu-levels/level-two" },
      {
        id: "level-two-subs",
        label: "menu-level-two-subs",
        href: "/menu-levels/level-two-subs",
        icon: "NiStars",
      },
    ],
  },
];

export const leftMenuBottomItems: MenuItem[] = [
];
