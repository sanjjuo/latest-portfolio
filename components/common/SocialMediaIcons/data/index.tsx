import Github from "@/components/svg/Github";
import Instagram from "@/components/svg/Instagram";
import Linkedin from "@/components/svg/Linkedin";
import Whatsapp from "@/components/svg/Whatsapp";

export const socialMediaIconData = [
  {
    id: 1,
    label: "instagram",
    href: "https://instagram.com/",
    icon: <Instagram className="w-[16px] h-[16px] stroke-app-text" />,
  },
  {
    id: 2,
    label: "whatsapp",
    href: "https://whatsapp.com/",
    icon: <Whatsapp className="w-4 h-4 stroke-app-text" />,
  },
  {
    id: 4,
    label: "github",
    href: "https://github.com/",
    icon: <Github className="w-4 h-4 stroke-app-text" />,
  },
  {
    id: 5,
    label: "linkedin",
    href: "https://linkedin.com/",
    icon: <Linkedin className="w-4 h-4 stroke-app-text" />,
  },
];
