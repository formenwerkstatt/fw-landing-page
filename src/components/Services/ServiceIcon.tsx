import { IconName } from "@/types";

// ICONS
import { RxGear } from "react-icons/rx";
import { MdOutlineDesignServices } from "react-icons/md";
import { LiaToolsSolid } from "react-icons/lia";
import { GiFactoryArm } from "react-icons/gi";
import { GiSewingMachine } from "react-icons/gi";
import { GiElectricalResistance } from "react-icons/gi";
import { GiTargetLaser } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { GiRecycle } from "react-icons/gi";
import { PiToolboxBold } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";

interface ServiceIconProps {
  iconname: IconName;
  className: string;
}

export default function ServiceIcon({ iconname, className }: ServiceIconProps) {
  const getIcon = () => {
    switch (iconname) {
      case "gear":
        return <RxGear className={className} />;
      case "design":
        return <MdOutlineDesignServices className={className} />;
      case "tools":
        return <LiaToolsSolid className={className} />;
      case "manufacture":
        return <GiFactoryArm className={className} />;
      case "machine":
        return <GiSewingMachine className={className} />;
      case "edm":
        return <GiElectricalResistance className={className} />;
      case "laser":
        return <GiTargetLaser className={className} />;
      case "polish":
        return <HiOutlineSparkles className={className} />;
      case "renovation":
        return <GiRecycle className={className} />;
      case "overhaul":
        return <PiToolboxBold className={className} />;
      case "repair":
        return <GiAutoRepair className={className} />;
      default:
        return <RxGear className={className} />;
    }
  };
  return getIcon();
}
