import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
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
          <SidebarGroupLabel className="font-semibold text-[1.2rem]">
            General
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={route.url}>
                      <route.icon />
                      <span className="text-[1rem] ">{route.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
