import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "events",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/event-list/event-list.module").then(
                m => m.EventListPageModule
              )
          }
        ]
      },
      {
        path: "events-saved",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/event-saved-list/event-saved-list.module").then(
                m => m.EventSavedListPageModule
              )
          }
        ]
      },
      {
        path: "tab1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../tab1/tab1.module").then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: "tab2",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../tab2/tab2.module").then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../tab3/tab3.module").then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tabs/events",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/events",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
