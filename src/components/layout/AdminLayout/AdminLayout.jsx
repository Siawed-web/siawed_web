import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { List, X, CalendarEvent, BoxArrowRight, People, HeartFill, Shop, EnvelopeFill } from "react-bootstrap-icons";
import styles from "./AdminLayout.module.scss";

const AdminLayout = ({ children, title = "Admin Dashboard" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const navItems = [
    { name: "Events", path: "/admin", icon: <CalendarEvent /> },
    { name: "Memberships", path: "/admin/memberships", icon: <People /> },
    { name: "Donations", path: "/admin/donations", icon: <HeartFill /> },
    { name: "Procurement", path: "/admin/procurement", icon: <Shop /> },
    { name: "Enquiries", path: "/admin/enquiries", icon: <EnvelopeFill /> },
  ];

  return (
    <div className={styles.adminLayout}>
      {/* Mobile Overlay */}
      <div 
        className={`${styles.mobileOverlay} ${sidebarOpen ? styles.open : ''}`} 
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <span>SIAWED Admin</span>
          <button className={styles.closeMenu} onClick={closeSidebar}>
            <X />
          </button>
        </div>
        
        <nav className={styles.sidebarNav}>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`${styles.navItem} ${router.pathname === item.path ? styles.active : ''}`}
              onClick={closeSidebar}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/" className={styles.navItem}>
            <BoxArrowRight />
            <span>Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        <header className={styles.topbar}>
          <button className={styles.menuToggle} onClick={toggleSidebar}>
            <List />
          </button>
          <div className={styles.topbarTitle}>{title}</div>
        </header>

        <main className={styles.contentArea}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
