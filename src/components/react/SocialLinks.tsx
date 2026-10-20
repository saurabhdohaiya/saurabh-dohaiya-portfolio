import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

type SocialLink = {
  label: string;
  href: string;
};

type Props = {
  links: SocialLink[];
  className?: string;
};

export default function SocialLinks({ links, className = "" }: Props) {
  return (
    <ul className={className} aria-label="Social profiles">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
            {link.label === "GitHub" && <FaGithub aria-hidden="true" />}
            {link.label === "LinkedIn" && <FaLinkedinIn aria-hidden="true" />}
            {link.label === "LeetCode" && <SiLeetcode aria-hidden="true" />}
          </a>
        </li>
      ))}
    </ul>
  );
}
