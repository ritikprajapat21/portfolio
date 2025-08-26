import { PROFILE } from "@/app/data";

const Footer = () => {
  return (
    <footer className="border-t py-10 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js &
      Tailwind.
    </footer>
  );
};

export default Footer;
