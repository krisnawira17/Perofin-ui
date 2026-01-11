import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import clsx from "clsx";
import { ArrowRightLeft, LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router";

export function AppSidebar() {
  const routes = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: ArrowRightLeft,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="font-bold text-[1.4rem] text-primary">
        Perofin
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-[1.2rem]">
            General
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="p-1">
              {routes.map((route) => (
                <NavLink to={route.url}>
                  {({ isActive }: { isActive: boolean }) => (
                    <div
                      className={clsx(
                        "flex flex-row items-center gap-4 w-full p-1.5 rounded-[12px]",
                        isActive
                          ? "bg-primary shadow-sm hover:bg-primary"
                          : "hover:bg-sidebar-accent"
                      )}
                    >
                      <route.icon color={clsx(isActive ? "white" : "black")} />
                      <span
                        className={clsx("text-base", isActive && "text-white")}
                      >
                        {route.title}
                      </span>
                    </div>
                  )}
                </NavLink>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
