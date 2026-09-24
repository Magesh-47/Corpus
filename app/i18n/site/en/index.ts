import { about } from "./about";
import { auth } from "./auth";
import { common } from "./common";
import { help } from "./help";
import { howItWorks } from "./howItWorks";
import { marketing } from "./marketing";
import { navigation } from "./navigation";
import { pricing } from "./pricing";

/** English is the source of truth: `SiteDictionary` is derived from this shape. */
export const site = { common, navigation, marketing, howItWorks, about, pricing, help, auth };
