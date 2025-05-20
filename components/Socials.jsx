import Link from "next/link";

import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterXFill,
  RiInstagramFill,
} from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookFill />,
    path: "https://www.facebook.com/harbidoye",
  },
  {
    icon: <RiYoutubeFill />,
    path: "https://www.youtube.com/@harbidoye",
  },
  {
    icon: <RiTwitterXFill />,
    path: "https://twitter.com/harbidoye",
  },
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/harbidoye",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social, index) => {
        return (
          <Link
            href={social.path}
            target="_blank"
            key={index}
            className={`${iconStyles}`}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
