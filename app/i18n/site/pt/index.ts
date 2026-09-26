import type { SiteDictionary } from "..";
import { about } from "./about";
import { auth } from "./auth";
import { common } from "./common";
import { help } from "./help";
import { howItWorks } from "./howItWorks";
import { marketing } from "./marketing";
import { navigation } from "./navigation";
import { pricing } from "./pricing";

export const site: SiteDictionary = { common, navigation, marketing, howItWorks, about, pricing, help, auth };
