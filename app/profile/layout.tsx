"use client";
import { usePathname } from "next/navigation";
import Navbar from "../components/navbar/Navbar";
import styles from "./Main.module.css";
import Link from "next/link";

const links = [
  {
    icon: "/profile/sidebar/user-icon.svg",
    name: "Información personal",
    href: "/profile",
  },
  {
    icon: "/profile/sidebar/orders-icon.svg",
    name: "Mis pedidos",
    href: "/profile/orders",
  },
];

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html>
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <div className={styles["profile-container"]}>
            <div className={styles["sidebar"]}>
              <ul>
                {links.map((x) => {
                  return (
                    <li
                      key={x.name}
                      className={pathname === x.href ? styles["active"] : ""}
                    >
                      <Link href={x.href}>
                        <img src={x.icon} alt="" />
                        <span>{x.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles["content"]}>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
