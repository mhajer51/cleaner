import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, Divider, Drawer, Tooltip, Typography } from "@mui/material";

import { DEFAULTS } from "@/config";
import { ModeVariant, THEME_OPTIONS } from "@/constants";
import { RadiobuttonSmallChecked, RadiobuttonSmallEmptyOutlined } from "@/icons/form/mui-radiobutton";
import NiArrowCircleLeft from "@/icons/nexture/ni-arrow-circle-left";
import NiBasket from "@/icons/nexture/ni-basket";
import NiKnobs from "@/icons/nexture/ni-knobs";
import NiMoon from "@/icons/nexture/ni-moon";
import NiPalette from "@/icons/nexture/ni-palette";
import NiScreen from "@/icons/nexture/ni-screen";
import NiSun from "@/icons/nexture/ni-sun";
import { cn } from "@/lib/utils";
import { useThemeContext } from "@/theme/theme-provider";

export default function ThemeConfiguration() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  const { t } = useTranslation();

  const { theme, setTheme, mode, setMode } = useThemeContext();

  const handleResetTheme = () => {
    setTheme(DEFAULTS.themeColor);
    setMode(DEFAULTS.themeMode);
  };

  const themeModeOptions = [
    { value: "system" as ModeVariant, icon: <NiScreen /> },
    { value: "light" as ModeVariant, icon: <NiSun /> },
    { value: "dark" as ModeVariant, icon: <NiMoon /> },
  ];

  return (
    <>
      <Box className="bg-background-paper shadow-darker-xs fixed top-1/2 right-0 flex w-[60px] -translate-y-1/2 flex-col gap-2 rounded-l-3xl p-2.5">
        <Tooltip title="Configuration" placement="left" arrow>
          <Button
            id="themeCustomization"
            onClick={toggleDrawer(true)}
            className="icon-only text-primary"
            size="large"
            color="grey"
            variant="text"
            startIcon={<NiKnobs size={"large"} />}
          ></Button>
        </Tooltip>
        <Tooltip title="Purchase" placement="left" arrow>
          <Button
            className="icon-only text-secondary"
            size="large"
            color="grey"
            variant="text"
            startIcon={<NiBasket size={"large"} />}
            href="https://1.envato.market/k4z0"
            target="_blank"
          ></Button>
        </Tooltip>
      </Box>
      <Drawer open={openDrawer} anchor="right" onClose={toggleDrawer(false)}>
        <Box className="flex min-h-full min-w-80 flex-col p-5">
          <Typography variant="h6" component="h6" className="card-title px-4 pt-4">
            Configuration
          </Typography>

          <Box className="mb-4 flex flex-1 flex-col gap-2 px-5">
            <Typography variant="body2" className="font-semibold" component="div">
              {t("palette")}
            </Typography>
            <Box className="flex flex-col gap-2">
              {Object.values(THEME_OPTIONS).map((option) => (
                <Button
                  key={`theme-color-${option}`}
                  className={cn(
                    "full-width-button hover:bg-grey-25! flex justify-between shadow-none! outline-none!",
                    option,
                    theme === option && "active bg-grey-25!",
                  )}
                  variant="surface"
                  startIcon={<NiPalette />}
                  onClick={() => setTheme(option)}
                >
                  {t(option)}
                  <span className={cn("flex flex-1 justify-end", theme !== option && "text-grey-200")}>
                    {theme === option && <RadiobuttonSmallChecked />}
                    {theme !== option && <RadiobuttonSmallEmptyOutlined />}
                  </span>
                </Button>
              ))}
            </Box>
            <Divider />
            <Typography variant="body2" component="div" className="font-semibold">
              {t("mode")}
            </Typography>
            <Box className="flex flex-col gap-2">
              {themeModeOptions.map((option) => (
                <Button
                  key={`theme-mode-${option.value}`}
                  className={cn(
                    "full-width-button hover:bg-grey-25! flex justify-between shadow-none! outline-none!",
                    mode === option.value && "active bg-grey-25!",
                  )}
                  variant="surface"
                  color={mode === option.value ? "primary" : "text-primary"}
                  startIcon={option.icon}
                  onClick={() => setMode(option.value)}
                >
                  {t(`mode-${option.value}`)}
                  <span className={cn("flex flex-1 justify-end", mode !== option.value && "text-grey-200")}>
                    {mode === option.value && <RadiobuttonSmallChecked />}
                    {mode !== option.value && <RadiobuttonSmallEmptyOutlined />}
                  </span>
                </Button>
              ))}
            </Box>

            <Divider />
          </Box>
          <Box className="mt-auto flex w-full px-5 pb-4">
            <Button
              variant="outlined"
              size="small"
              color="grey"
              startIcon={<NiArrowCircleLeft size="small" />}
              className="w-full"
              onClick={() => handleResetTheme()}
            >
              {t("reset-theme")}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
