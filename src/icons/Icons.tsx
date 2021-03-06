import { IconGallery } from "../components/Icon";

import { ReactComponent as Eye } from './assets/eye.svg';
import { ReactComponent as EyeOff } from './assets/eye-off.svg';
import { ReactComponent as Loader } from './assets/loader.svg';
import { ReactComponent as ChevronLeft } from './assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from './assets/chevron-right.svg';
import { ReactComponent as ChevronUp } from './assets/chevron-up.svg';
import { ReactComponent as ChevronDown } from './assets/chevron-down.svg';
import { ReactComponent as Spinner } from './assets/spinner.svg';
import { ReactComponent as Home } from './assets/home.svg';

export const Icons = IconGallery({
  Eye: { source: Eye },
  EyeOff: { source: EyeOff },
  Loader: { source: Loader },
  ChevronLeft: { source: ChevronLeft },
  ChevronRight: { source: ChevronRight },
  ChevronUp: { source: ChevronUp },
  ChevronDown: { source: ChevronDown },
  Spinner: { source: Spinner },
  Home: { source: Home },

}, { width: 16, height: 16, mode: 'svg' })