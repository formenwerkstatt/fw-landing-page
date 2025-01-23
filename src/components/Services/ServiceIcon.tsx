// ICONS
import { RxGear } from "react-icons/rx";
import { MdOutlineDesignServices } from "react-icons/md";
import { LiaToolsSolid } from "react-icons/lia";
import { GiFactoryArm } from "react-icons/gi";
import { GiElectricalResistance } from "react-icons/gi";
import { GiTargetLaser } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { GiRecycle } from "react-icons/gi";
import { PiToolboxBold } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";

import Image from "next/image";
import { cn } from "@/utils/cn";

interface ServiceIconProps {
  iconname: string;
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
      case "milling":
        return (
          <IconContainer
            className={className}
            src="/icons/drilling-machine.svg"
          />
        );
      case "turning":
        return (
          <IconContainer className={className} src="/icons/lathe-machine.svg" />
        );
      case "edm":
        return <GiElectricalResistance className={className} />;
      case "wire-edm":
        return (
          <IconContainer
            className={className}
            src="/icons/dashboard-command.svg"
          />
        );
      case "laser":
        return <GiTargetLaser className={className} />;
      case "welding":
        return (
          <IconContainer
            className={className}
            src="/icons/welding-machine.svg"
          />
        );
      case "polish":
        return <HiOutlineSparkles className={className} />;
      case "grinding":
        return (
          <IconContainer
            className={className }
            src="/icons/industrial-robot.svg"
          />
        );
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

function IconContainer({ src, className }: { src: string; className: string }) {
  return (
    <div className={cn(`${className} relative `)}>
      <Image src={src} alt="icon" fill  />
    </div>
  );
}
