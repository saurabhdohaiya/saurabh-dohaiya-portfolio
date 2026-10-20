import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

type Props = {
  email: string;
  phone: string;
  className?: string;
};

export default function ContactMethods({ email, phone, className = "" }: Props) {
  return (
    <div className={className}>
      <a href={`mailto:${email}`} aria-label={`Email ${email}`}>
        <SiGmail aria-hidden="true" />
        <span>{email}</span>
      </a>
      <a href={`tel:${phone.replaceAll(" ", "")}`} aria-label={`Call ${phone}`}>
        <FaPhone aria-hidden="true" />
        <span>{phone}</span>
      </a>
    </div>
  );
}
